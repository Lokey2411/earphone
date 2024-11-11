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
        Schema::create('login_codes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('departmentId');
            $table->foreign('departmentId')->references('id')->on('departments')->onDelete('cascade');
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
            $table->dateTime('login_time')->useCurrent();
            $table->time('maintain_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('login_codes');
    }
};