<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Question
 *
 * @property int $id
 * @property int $exercise_id
 * @property string $body
 * @property string $answer
 * @property string $checker
 * @property string $checker_options
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Exercise $exercise
 * @method static \Illuminate\Database\Eloquent\Builder|Question newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Question query()
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereAnswer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereChecker($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereCheckerOptions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereExerciseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Question whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Question extends Model {

	protected $guarded=[];

	public function exercise(): \Illuminate\Database\Eloquent\Relations\BelongsTo {
		return $this->belongsTo( Exercise::class);
	}

	public function users(): \Illuminate\Database\Eloquent\Relations\BelongsToMany {
		return $this->belongsToMany(User::class);
	}
}