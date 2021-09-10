<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIllustrationsTable extends Migration {
	public function up() {
		Schema::create( 'illustrations', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->string('url');
			$table->string('description');
			$table->string('type');
			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'illustrations' );
	}
}