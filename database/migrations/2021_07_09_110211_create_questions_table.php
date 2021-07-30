<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration {
	public function up() {
		Schema::create( 'questions', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId('exercise_id')->constrained()->onDelete('cascade');
			$table->integer( 'position' );
			$table->text( 'body' );
			$table->string('answer')->default(null);
			$table->string('checker')->default('');
			$table->string('checker_options')->default('');

			//

			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'questions' );
	}
}