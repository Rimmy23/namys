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
        Schema::create('decorations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class, 'user_id');
            $table->string('image_deco_main', 255)->nullable();
            $table->string('image_deco_first', 255)->nullable();
            $table->string('image_deco_second', 255)->nullable();
            $table->string('nameDeco', 255);
            $table->longText('productDescribeDeco', 1000);
            $table->text('parameterDeco', 1000);
            $table->unsignedSmallInteger('priceDeco');
            $table->unsignedSmallInteger('amountDeco');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('decorations');
    }
};
