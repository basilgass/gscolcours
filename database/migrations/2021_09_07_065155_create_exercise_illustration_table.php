<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExerciseIllustrationTable extends Migration {
	public function up() {
		Schema::create( 'exercise_illustration', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId('exercise_id')->constrained()->onDelete('cascade');
			$table->foreignId('illustration_id')->constrained()->onDelete('cascade');
			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'exercise_illustration' );
	}
}