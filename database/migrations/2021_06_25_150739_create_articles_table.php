<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration {
	public function up() {
		Schema::create( 'articles', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId('theme_id')->constrained();
			$table->string('slug')->unique();
			$table->string('name');
			$table->text('description');
			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'articles' );
	}
}