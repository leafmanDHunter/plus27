<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookArchiveController extends Controller
{

	public function all()
	{
		return response()->json([
			'books' => $this->user()->books()->onlyTrashed()->latest()->get(),
		]);
	}

	public function index()
	{
		// $this->user()->books()->withTrashed()->get()->dd();
		
		return view('book.archive.index');
	}


	public function update($book) 
	{
		$book = Book::withTrashed()->find($book);
		$book->restore();



		return response()->json(['book' => $book]);
	}

    public function destroy(Book $book)
    {
    	$book->delete();

    	return response()->json(['book' => $book]); 
    }
}
