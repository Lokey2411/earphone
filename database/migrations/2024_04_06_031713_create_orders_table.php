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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("productId")->nullable()->default(null);
            $table->foreign("productId")->references("id")->on("products")->onDelete("set null");
            $table->unsignedBigInteger("cartId");
            $table->foreign("cartId")->references("id")->on("carts")->onDelete("cascade");
            $table->integer("quantity");
            $table->float("price");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};