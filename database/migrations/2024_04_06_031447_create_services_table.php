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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('departmentId')->nullable(false);
            $table->foreign('departmentId')->references('id')->on('departments');
            $table->string('title', 200)->nullable(false);
            $table->text('details')->nullable(false);
            $table->string('type', 200)->nullable(false)->default('other');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};