<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return view('welcome');
});

// fetch skill 
Route::get('/fetchSkill', [JobController::class,'fetchJobs'] );

//fetch jobs

