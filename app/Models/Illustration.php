<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Illustration extends Model {

	protected $guarded=[];
	public function exercises() {
		return $this->belongsToMany( Exercise::class);
	}

	public function questions() {
		return $this->belongsToMany( Question::class);
	}

	public function articles() {
		return $this->belongsToMany( Article::class);
	}
}