<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Decoration extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'image_deco_main',
        'image_deco_first',
        'image_deco_second',
        'nameDeco',
        'productDescribeDeco',
        'parameterDeco',
        'priceDeco',
        'amountDeco',
    ];
}
