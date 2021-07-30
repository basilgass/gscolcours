<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExercisesTable extends Migration {
	public function up() {
		Schema::create( 'exercises', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId( 'article_id')->constrained()->onDelete('cascade');
			$table->string( 'title' )->default('');
			$table->text( 'body' );

			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'exercises' );
	}
}