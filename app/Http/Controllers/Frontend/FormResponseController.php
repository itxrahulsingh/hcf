<?php

namespace App\Http\Controllers\Frontend;

use App\Events\FormSubmitted;
use App\Http\Controllers\Controller;
use App\Models\FormResponse;
use App\Models\FormResponseType;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Added for storage

class FormResponseController extends Controller
{
    public function store(Request $request)
    {
        $formResponseTo = Setting::pull('form_response_to');

        // 1. Get all data except internal fields
        $formData = $request->except(['captchaToken', 'response_from', 'form_name']);

        // 2. Handle File Uploads
        foreach ($request->allFiles() as $key => $file) {
            if ($request->hasFile($key) && $file->isValid()) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('submissions', $fileName, config('filesystems.default'));
                $formData[$key] = Storage::url($path);
            }
        }

        // 3. Prepare common data for processing
        $responseFrom = $request->response_from;
        $formName     = $request->form_name;

        if ($formResponseTo === 'email_only') {
            $data = new \stdClass;
            $data->response_data = $formData;
            $data->response_from = $responseFrom;

            event(new FormSubmitted($data));
        } elseif ($formResponseTo === 'database_only') {
            FormResponseType::updateOrCreate(
                ['form_response' => $responseFrom],
            );

            FormResponse::create([
                'response_data' => json_encode($formData),
                'response_from' => $responseFrom,
                'form_name'     => $formName,
            ]);
        } else {
            // Both Email and Database
            FormResponseType::updateOrCreate(
                ['form_response' => $responseFrom],
            );

            FormResponse::create([
                'response_data' => json_encode($formData),
                'response_from' => $responseFrom,
                'form_name'     => $formName,
            ]);

            $emailData = new \stdClass;
            $emailData->response_data = $formData;
            $emailData->response_from = $responseFrom;

            event(new FormSubmitted($emailData));
        }

        return back()->with('success', 'Form successfully submitted');
    }
}
