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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('departmentId')->unsigned()->nullable(false);
            $table->foreign('departmentId')->references('id')->on('departments');
            $table->integer('level')->unsigned()->nullable(false)->default(1);
            $table->foreign('level')->references('level')->on('levels');
            $table->bigInteger('userId')->unsigned()->index()->nullable(false);
            $table->text('name')->nullable(false);
            $table->text('email')->nullable(false);
            $table->string('phoneNumber', 20)->nullable(false);
            $table->text('avatar')->nullable(false);
            $table->datetime('start_date')->nullable(false)->useCurrent();
            $table->string('position', 200)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};