<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCandleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $candle = $this->route('candle');

        if ($this->user()->id !== $candle->user_id) {
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
            'nameCandle' => 'required|string|max:1000',
            'image_candle_main' => 'required|string',
            'image_candle_first' => 'required|string',
            'image_candle_second' => 'required|string',
            'productDescribeCandle' => 'required|string',
            'parameterCandle' => 'required|string',
            'priceCandle' => 'required|numeric',
            'amountCandle' => 'required|numeric',
        ];
    }
}
