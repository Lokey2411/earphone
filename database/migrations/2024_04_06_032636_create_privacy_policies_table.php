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
        Schema::create('privacy_policies', function (Blueprint $table) {
            $table->string("title")->primary();
            $table->text("description");
            $table->string("parentPrivacy");
            $table->string("detailButtonText")->default("Xem ngay");
            $table->foreign("parentPrivacy")->references("title")->on("privacy_policies")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('privacy_policies');
    }
};