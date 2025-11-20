<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Causes\Categories\CauseCategoryStoreRequest;
use App\Http\Requests\Admin\Causes\Categories\CauseCategoryUpdateRequest;
use App\Models\CauseCategory;
use App\Models\Setting;
use App\Repositories\Admin\CauseCategoryRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CauseCategoriesController extends Controller
{

    /**
     * Get the middleware that should be assigned to the controller.
     */
    public function __construct()
    {
        // for demo mood
        $this->middleware('demo', ['only' => ['destroy', 'store', 'update', 'bulkDelete']]);
    }
    public function index(Request $request, CauseCategoryRepository $repository): Response
    {
        if (Setting::pull("is_enabled_case_study") === "0") {
            abort(404);
        }

        $data['search'] = $request->search ?: '';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';
        $data['filtered_lang'] = $request->filter['lang'] ?? Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['categories'] = $repository->paginateSearchResult($data['search'], $data['sort']);

        return Inertia::render('Cause/Categories/Index', $data);
    }

    /**
     * Create category
     */
    public function create(): Response
    {
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        return Inertia::render('Cause/Categories/Create', $data);
    }

    /**
     * Edit portfolio
     */
    public function edit(CauseCategory $causeCategory, CauseCategoryRepository $repository): Response
    {
        if (Setting::pull("is_enabled_case_study") === "0") {
            abort(404);
        }

        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['category'] = $repository->getEditData($causeCategory);
        return Inertia::render('Cause/Categories/Edit', $data);
    }

    /**
     * Update category
     */
    public function update(CauseCategory $causeCategory, CauseCategoryUpdateRequest $request, CauseCategoryRepository $repository): RedirectResponse
    {
        try {
            $repository->update($causeCategory, $request);
            return redirect()->route('admin.cause.categories.index')->with('success', 'Category successfully updated');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    /**
     * Store category
     */
    public function store(CauseCategoryStoreRequest $request, CauseCategoryRepository $repository): RedirectResponse
    {
        $repository->store($request);
        return redirect()->route('admin.cause.categories.index')->with('success', 'Category successfully created');
    }

    /**
     * Delete category
     */
    public function destroy(CauseCategory $causeCategory, CauseCategoryRepository $repository): RedirectResponse
    {
        try {
            $repository->destroy($causeCategory);
            return back()->with('success', 'Category successfully deleted');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    /**
     * Bulk delete
     */
    public function bulkDelete(Request $request, CauseCategoryRepository $repository): RedirectResponse
    {
        $repository->bulkDelete($request->ids);
        return back()->with('success', 'Category successfully deleted');
    }
}
