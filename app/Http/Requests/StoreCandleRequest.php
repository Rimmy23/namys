<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCandleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id
        ]);
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
            'nameCandle' => 'required|string|max:1000',
            'image_candle_main' => 'nullable|string',
            'image_candle_first' => 'nullable|string',
            'image_candle_second' => 'nullable|string',
            'productDescribeCandle' => 'required|string',
            'parameterCandle' => 'required|string',
            'priceCandle' => 'required|numeric',
            'amountCandle' => 'required|numeric',
        ];
    }
}
