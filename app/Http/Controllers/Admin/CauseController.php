<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Causes\CauseStoreRequest;
use App\Http\Requests\Admin\Causes\CauseUpdateRequest;
use App\Models\Cause;
use App\Models\CauseCategory;
use App\Models\Gift;
use App\Models\Product; // Added Import
use App\Models\Setting;
use App\Repositories\Admin\CauseRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CauseController extends Controller
{
    public function __construct()
    {
        $this->middleware('demo', ['only' => ['destroy', 'store', 'update', 'bulkDelete']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, CauseRepository $repository)
    {
        $data['search'] = $request->search ?: '';
        $data['type'] = $request->filter['type'] ?? 'all';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';
        $data['filtered_lang'] = $request->filter['lang'] ?? Setting::pull('default_lang');
        $data['causes'] = $repository->paginateSearchResult($data['search'], $data['sort'], $data['type']);
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['cause_types'] = Cause::$causeTypes;

        return Inertia::render('Causes/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['cause_categories'] = CauseCategory::with('content')->get();
        $data['gifts'] = Gift::with('content')->where('status', 1)->get();
        $data['products'] = Product::with('content')->where('status', 1)->get();
        $data['cause_types'] = Cause::$causeTypes;

        return Inertia::render('Causes/Create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CauseStoreRequest $request, CauseRepository $repository)
    {
        $repository->create($request);

        return redirect()->route('admin.causes.index')->with('success', 'Cause created successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cause $cause, CauseRepository $repository)
    {
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['cause'] = $repository->getEditedData($cause);
        $data['cause_categories'] = CauseCategory::with('content')->get();
        $data['gifts'] = Gift::with('content')->where('status', 1)->get();
        $data['products'] = Product::with('content')->where('status', 1)->get();
        $data['cause_types'] = Cause::$causeTypes;

        return Inertia::render('Causes/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CauseUpdateRequest $request, Cause $cause, CauseRepository $repository)
    {
        $repository->update($request, $cause);

        return redirect()->route('admin.causes.index')->with('success', 'Cause Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cause $cause, CauseRepository $repository)
    {
        $repository->destroy($cause);

        return back()->with('success', 'Cause Successfully Deleted!');
    }

    /**
     * Bulk delete
     */
    public function bulkDelete(Request $request, CauseRepository $repository)
    {
        $repository->bulkDelete($request->ids);

        return back()->with('success', 'Causes Successfully Deleted!');
    }
}
