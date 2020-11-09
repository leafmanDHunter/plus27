<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookArchiveController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
        $this->middleware('can:view,book')->only(['destroy']);

	}

	public function all()
	{
		return response()->json([
			'books' => $this->user()->books()->onlyTrashed()->latest()->get(),
		]);
	}

	public function index()
	{
		
		return view('book.archive.index');
	}


	public function update($book) 
	{
		$book = Book::withTrashed()->find($book);
        
        $this->authorize('view', $book);

		$book->restore();



		return response()->json(['book' => $book]);
	}

    public function destroy(Book $book)
    {
    	$book->delete();

    	return response()->json(['book' => $book]); 
    }
}
