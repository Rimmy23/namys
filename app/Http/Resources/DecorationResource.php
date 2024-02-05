<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class DecorationResource extends JsonResource
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
            'nameDeco' => $this->nameDeco,
            'productDescribeDeco' => $this->productDescribeDeco,
            'parameterDeco' => $this->parameterDeco,
            'image_url0' => $this->image_deco_main ? URL::to($this->image_deco_main) : null,
            'image_url1' => $this->image_deco_first ? URL::to($this->image_deco_first) : null,
            'image_url2' => $this->image_deco_second ? URL::to($this->image_deco_second) : null,
            'priceDeco' => $this->priceDeco,
            'amountDeco' => $this->amountDeco,
        ];
    }
}
