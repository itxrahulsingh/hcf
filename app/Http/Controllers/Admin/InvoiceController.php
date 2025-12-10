<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Posts\PostStoreRequest;
use App\Http\Requests\Admin\Posts\PostUpdateRequest;
use App\Http\Resources\Admin\PostCategoryCollection;
use App\Models\Category;
use App\Models\Post;
use App\Models\Setting;
use App\Repositories\Admin\InvoiceRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvoiceController extends Controller
{
    /**
     * Apply permission
     */
    public function __construct()
    {
        $this->middleware('can:invoices.index', ['only' => ['index']]);
        $this->middleware('can:invoices.show', ['only' => ['show']]);
        $this->middleware('can:invoices.create', ['only' => ['create']]);
        $this->middleware('can:invoices.edit', ['only' => ['edit', 'bulkPublish', 'update', 'statusToggle', 'bulkUnPublish']]);
        $this->middleware('can:invoices.delete', ['only' => ['delete', 'bulkDelete']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, InvoiceRepository $repository): Response
    {
        $data['search'] = $request->search ?: '';
        $data['sort']['column'] = $request->sort['column'] ?? 'id';
        $data['sort']['order'] = $request->sort['order'] ?? 'desc';
        $data['filter']['status'] = $request->filter['status'] ?? 'All Status';
        $data['filter']['category'] = $request->filter['category'] ?? 'All Categories';
        $default_lang = Setting::pull('default_lang');
        $data['filtered_lang'] = $request->filter['lang'] ?? $default_lang;
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['categories'] = new PostCategoryCollection(Category::with('contents')->get());
        $data['invoices'] = $repository->paginateSearchResult($data['search'], $data['sort'], $data['filter']);

        return Inertia::render('Invoices/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $data['default_lang'] = Setting::pull('default_lang');
        $data['languages'] = json_decode(Setting::pull('languages'));
        $data['categories'] = new PostCategoryCollection(Category::with('contents')->get());

        return Inertia::render('Posts/Create', $data);
    }

    /**
     * Store new post
     */
    public function store(PostStoreRequest $request, PostRepository $repository): RedirectResponse
    {
        $repository->create($request);

        return redirect()->route('admin.invoices.index')->with('success', 'Invoice successfully created');
    }

    /**
     * Update invoice
     */
    public function update(PostUpdateRequest $request, Post $post, PostRepository $repository): RedirectResponse
    {
        $repository->update($request, $post);

        return redirect()->route('admin.invoices.index')->with('success', 'Invoice successfully updated!');
    }

    /**
     * Delete post
     */
    public function destroy(Post $post, PostRepository $repository): RedirectResponse
    {
        $repository->destroy($post);

        return back()->with('success', 'Post successfully deleted!');
    }

    /**
     * Build delete
     */
    public function bulkDelete(Request $request, PostRepository $repository): RedirectResponse
    {
        $repository->bulkDelete($request->ids);

        return back()->with('success', 'Invoice successfully deleted!');
    }

    /**
     * Invoice status toggle
     */
    public function statusToggle(Request $request, PostRepository $repository): RedirectResponse
    {
        $repository->statusToggle($request->id);

        return back()->with('success', 'Invoice status has been changed!');
    }
}
