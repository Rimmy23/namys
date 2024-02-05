<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candle extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'image_candle_main',
        'image_candle_first',
        'image_candle_second',
        'nameCandle',
        'productDescribeCandle',
        'parameterCandle',
        'priceCandle',
        'amountCandle',
    ];
}
