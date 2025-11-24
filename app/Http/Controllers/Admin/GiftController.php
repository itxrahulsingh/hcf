<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Causes\Gift\GiftStoreRequest;
use App\Http\Requests\Admin\Causes\Gift\GiftUpdateRequest;
use App\Models\Gift;
use App\Models\Setting;
use App\Repositories\Admin\GiftRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GiftController extends Controller
{
    public function __construct()
    {
        // for demo mood
        $this->middleware('demo', ['only' => ['destroy', 'store', 'update', 'bulkDelete']]);
    }

    public function index(Request $request, GiftRepository $repository)
    {
        $data['search'] = $request->search ?: '';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['filtered_lang'] = $request->filter['lang'] ?? Setting::pull('default_lang');
        $data['gifts'] = $repository->paginateSearchResult($data['search'], $data['sort']);

        return Inertia::render('Causes/Gifts/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));

        return Inertia::render('Causes/Gifts/Create', $data);
    }

    /**
     * Store gift
     */
    public function store(GiftStoreRequest $request, GiftRepository $repository)
    {
        $repository->create($request);
        return redirect()->route('admin.gifts.index')->with('success', 'Gift successfully created!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gift $gift, GiftRepository $repository)
    {
        $data['gift'] = $repository->getEditData($gift);
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));

        return Inertia::render('Causes/Gifts/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GiftUpdateRequest $request, Gift $gift, GiftRepository $repository)
    {
        try {
            $repository->update($request, $gift);

            return redirect()->route('admin.gifts.index')->with('success', 'Gift successfully updated!');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gift $gift, GiftRepository $repository)
    {
        $repository->destroy($gift);
        return back()->with('success', 'Gift successfully deleted');
    }

    public function bulkDelete(Request $request, GiftRepository $repository)
    {
        $repository->bulkDelete($request->ids);
        return back()->with('success', 'Gift successfully deleted!');
    }
}
