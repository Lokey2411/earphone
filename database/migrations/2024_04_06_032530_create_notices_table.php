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
        Schema::create('notices', function (Blueprint $table) {
            $table->id();
            $table->string('title')->notNullable();
            $table->text('content')->notNullable();
            $table->unsignedBigInteger('departmentId')->notNullable();
            $table->foreign('departmentId')->references('id')->on('departments')->onDelete('cascade');
            $table->time('schedule')->notNullable();
            $table->time('expiredTime')->notNullable();
            $table->unsignedBigInteger('template')->notNullable();
            $table->foreign('template')->references('id')->on('notice_templates')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notices');
    }
};