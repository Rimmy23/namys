<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class CandleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nameCandle' => $this->nameCandle,
            'productDescribeCandle' => $this->productDescribeCandle,
            'parameterCandle' => $this->parameterCandle,
            'image_url0' => $this->image_candle_main ? URL::to($this->image_candle_main) : null,
            'image_url1' => $this->image_candle_first ? URL::to($this->image_candle_first) : null,
            'image_url2' => $this->image_candle_second ? URL::to($this->image_candle_second) : null,
            'priceCandle' => $this->priceCandle,
            'amountCandle' => $this->amountCandle,
        ];
    }
}
