<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Exercise
 *
 * @property int $id
 * @property int $article_id
 * @property string $body
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Article $article
 * @property-read mixed $text_color
 * @property-read mixed $url
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Question[] $questions
 * @property-read int|null $questions_count
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise query()
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereArticleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Exercise whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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