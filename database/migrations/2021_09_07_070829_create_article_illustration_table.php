<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticleIllustrationTable extends Migration {
	public function up() {
		Schema::create( 'article_illustration', function ( Blueprint $table ) {
			$table->bigIncrements( 'id' );
			$table->foreignId( 'article_id' )->constrained()->onDelete( 'cascade' );
			$table->foreignId( 'illustration_id' )->constrained()->onDelete( 'cascade' );
			//

			$table->timestamps();
		} );
	}

	public function down() {
		Schema::dropIfExists( 'article_illustration' );
	}
}