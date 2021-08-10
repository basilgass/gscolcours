<?php


namespace App\Scolcours\commonmark\latex;


use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\ExtensionInterface;

final class LaTeXExtension implements ExtensionInterface {

	public function register( EnvironmentBuilderInterface  $environment ): void {
		$environment->addDelimiterProcessor( new LaTeXinlineDelimiterProcessor() );
		$environment->addRenderer(LaTeX::class, new LaTeXRenderer());
	}

}