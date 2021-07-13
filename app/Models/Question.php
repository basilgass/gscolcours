<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model {

	public function exercise() {
		return $this->belongsTo( Exercise::class);
	}
}