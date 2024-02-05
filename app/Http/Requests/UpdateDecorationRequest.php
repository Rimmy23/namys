<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDecorationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $decoration = $this->route('decoration');

        if ($this->user()->id !== $decoration->user_id) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'exists:users,id',
            'nameDeco' => 'required|string|max:1000',
            'image_deco_main' => 'required|string',
            'image_deco_first' => 'required|string',
            'image_deco_second' => 'required|string',
            'productDescribeDeco' => 'required|string',
            'parameterDeco' => 'required|string',
            'priceDeco' => 'required|numeric',
            'amountDeco' => 'required|numeric',
        ];
    }
}
