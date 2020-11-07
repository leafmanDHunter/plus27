<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['bail', 'required'],
            'isbn' => ['bail', 'required'],
            'publisher' => ['bail', 'required'],
            'page_numbers' => ['bail', 'required'],

        ];
    }

    public function validated() : array
    {
        return $this->only(['title', 'isbn', 'publisher', 'page_numbers']);
    }
}
