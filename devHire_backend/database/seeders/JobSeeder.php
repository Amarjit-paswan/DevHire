<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Add dummy job data in job table
        DB::table('jobs')->insert([
          
        [
            'title' => 'Frontend Developer',
            'description' => 'Build responsive user interfaces with React and TypeScript.',
            'company' => 'Acme Corp',
            'job_type' => 'Part-time',
            'salary' => 75000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Backend Developer',
            'description' => 'Design and implement RESTful APIs using Laravel.',
            'company' => 'DevHire',
            'job_type' => 'Full-time',
            'salary' => 90000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Full Stack Engineer',
            'description' => 'Work across the stack with React and Laravel.',
            'company' => 'Startup Inc',
            'job_type' => 'Part-time',
            'salary' => 110000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        ]);
    }
}
