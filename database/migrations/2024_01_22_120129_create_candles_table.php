<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('candles', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class, 'user_id');
            $table->string('image_candle_main', 255)->nullable();
            $table->string('image_candle_first', 255)->nullable();
            $table->string('image_candle_second', 255)->nullable();
            $table->string('nameCandle', 255);
            $table->longText('productDescribeCandle', 1000);
            $table->text('parameterCandle', 1000);
            $table->unsignedSmallInteger('priceCandle');
            $table->unsignedSmallInteger('amountCandle');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candles');
    }
};
