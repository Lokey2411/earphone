<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        for ($i = 0; $i < 3; $i++) {
            $faker = Faker::create();
            \App\Models\Category::create([
                "title" => $faker->sentence(10),
                "type" => "size",
            ]);
        }
    }
}