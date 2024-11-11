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
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('cartId')->unsigned();
            $table->foreign('cartId')->references('id')->on('carts');
            $table->unsignedBigInteger('shipperId');
            $table->foreign('shipperId')->references('id')->on('employees');
            $table->date('shipDate');
            $table->string('status', 255);
            $table->float('shipFee')->unsigned()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};