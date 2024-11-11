<?php

namespace Database\Seeders;

use App\Models\Description;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $types = ["description", "suggestion","optional","size_helper"];
        for ($i = 0; $i < 10; $i++) {
            $faker = Faker::create();
            Description::create([
                "title" => $faker->sentence(10),
                "details" => $faker->sentence(10),
                "productId" => 1,
                "type" => $types[$faker->numberBetween(0,3)],
            ]);
        }
    }
}