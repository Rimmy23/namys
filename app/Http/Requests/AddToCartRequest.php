<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddToCartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_type' => 'required|in:candle,decoration',
            'product_id' => 'required|exists:' . $this->getTableName(),
            'quantity' => 'required|integer|min:1|max:15',
        ];
    }

    private function getTableName()
    {
        return $this->input('product_type') === 'candle' ? 'candles' : 'decorations';
    }
}
