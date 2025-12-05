<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    //
    protected $fillable = ['id','title','description','job_type','salary','created_at'];

    //Fetch jobs with skills
    public function jobWithSkill(){
        return $this->belongsToMany(Skill::class,'job_skills', 'job_id', 'skill_id');
    }
}
