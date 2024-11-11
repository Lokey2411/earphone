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
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("departmentId")->unsigned()->notNullable();
            $table->foreign("departmentId")->references("id")->on("departments")->onDelete("cascade");
            $table->text("description")->notNullable();
            $table->text("address")->notNullable();
            $table->string("hotline", 20)->notNullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};