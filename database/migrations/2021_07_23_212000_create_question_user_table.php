<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionUserTable extends Migration {
	public function up() {
		Schema::create( 'question_user', function ( Blueprint $table ) {
			$table->foreignId('user_id')->constrained()->onDelete('cascade');
			$table->foreignId('question_id')->constrained()->onDelete('cascade');
			$table->string('answer');
			$table->boolean('correct');
			$table->integer('attempts')->default(0);
			$table->timestamps();

			$table->primary(['user_id', 'question_id']);
		} );
	}

	public function down() {
		Schema::dropIfExists( 'question_user' );
	}
}