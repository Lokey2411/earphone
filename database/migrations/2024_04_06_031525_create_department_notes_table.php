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
        Schema::create('department_notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('departmentId');
            $table->foreign('departmentId')->references('id')->on('departments')->onDelete('cascade');
            $table->text('message')->notNullable();
            $table->string('attachFile', 1000)->nullable();
            $table->text('schedule')->notNullable();
            $table->text('contacts')->notNullable();
            $table->text('map')->notNullable();
            $table->text('otherMessage')->nullable();
            $table->text('jobs')->notNullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('department_notes');
    }
};