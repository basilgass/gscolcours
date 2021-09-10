<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIllustrationQuestionTable extends Migration {
	public function up() {
		Schema::create( 'illustration_question', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId('question_id')->constrained()->onDelete('cascade');
			$table->foreignId('illustration_id')->constrained()->onDelete('cascade');
			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'illustration_question' );
	}
}