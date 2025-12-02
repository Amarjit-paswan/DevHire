<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Add Skills in skill table
        DB::table('skills')->insert([
            ['name' => 'JavaScript'],
            ['name' => 'React'],
            ['name' => 'PHP'],
            ['name' => 'Laravel'],
            ['name' => 'MySql'],
            ['name' => 'Node.js'],
            ['name' => 'MongoDB'],
        ]);
    }
}
