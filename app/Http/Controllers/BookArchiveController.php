<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookArchiveController extends Controller
{

	public function all()
	{
		return response()->json([
			'books' => $this->user()->books()->withTrashed()->get(),
		]);
	}

	public function index()
	{
		return view('book.archive.index');
	}

    public function destroy(Book $book)
    {
    	$book->delete();

    	return response()->json(['book' => $book]); 
    }
}
