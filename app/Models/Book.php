<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Book extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
    	'title', 'isbn', 'publisher', 'page_numbers'
    ];

    public function author()
    {
    	return $this->belongsTo(User::class, 'author_id');
    }

}
