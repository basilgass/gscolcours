<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionUsersTable extends Migration {
	public function up() {
		Schema::create( 'question_users', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->unsignedBigInteger('user_id');
			$table->unsignedBigInteger('question_id');
			$table->string('answer');
			$table->boolean('correct');
			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'question_users' );
	}
}