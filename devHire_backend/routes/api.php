<?php

use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;


Route::get('/fetchSkill', [SkillController::class,'fetchSkill'] );

?>
