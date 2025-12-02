<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    //Fetch skills
    public function fetchSkill(){

        //Fetch all skill from database
        $skills = Skill::all();

        //Return a safe JSON response structure
        return response()->json([
            'status' => true,
            'skills' => $skills
        ],200);
    }
}
