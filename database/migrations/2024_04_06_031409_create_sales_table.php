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
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('productId')->unsigned();
            $table->foreign('productId')->references('id')->on('products')->onDelete('cascade');
            $table->bigInteger('departmentId')->unsigned();
            $table->foreign('departmentId')->references('id')->on('departments')->onDelete('cascade');
            $table->bigInteger('userId')->unsigned();
            $table->foreign('userId')->references('id')->on('users');
            $table->integer('discount')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};