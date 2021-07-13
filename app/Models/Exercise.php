<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model {

	public function article() {
		return $this->belongsTo( Article::class);
	}
	public function questions() {
		return $this->hasMany( Question::class);
	}

	public function getUrlAttribute() {
		return "/{$this->article->theme->slug}/{$this->article->slug}/exercice/{$this->id}";
	}

	public function getTextColorAttribute(  ) {
		return str_replace( 'bg-', 'text-', $this->article->theme->color);
	}

}