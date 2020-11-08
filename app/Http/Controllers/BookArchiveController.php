<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookArchiveController extends Controller
{
    public function destroy(Book $book)
    {
    	$book->delete();

    	return response()->json(['book' => $book]); 
    }
}
