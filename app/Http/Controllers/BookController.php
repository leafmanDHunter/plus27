<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }

    public function index()
    {
    	return response()->json([
    		'books' => $this->user()->books()->latest()->get(),
    	]);
    }

    public function store(BookRequest $request)
    {
    	$book = $this->user()->books()->create($request->validated());

    	return response()->json(['book' => $book]);
    }

    public function destroy(Book $book) 
    {
    	$book->forceDelete();

    	return response()->json(['book' => $book]);
    }
}
