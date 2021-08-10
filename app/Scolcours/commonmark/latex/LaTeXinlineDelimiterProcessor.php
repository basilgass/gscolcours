<?php


namespace App\Scolcours\commonmark\latex;
	use League\CommonMark\Delimiter\DelimiterInterface;
	use League\CommonMark\Delimiter\Processor\DelimiterProcessorInterface;
	use League\CommonMark\Node\Inline\AbstractStringContainer;

final class LaTeXinlineDelimiterProcessor implements DelimiterProcessorInterface
{
	public function getOpeningCharacter(): string
	{
		return '$';
	}

	public function getClosingCharacter(): string
	{
		return '$';
	}

	public function getMinLength(): int
	{
		return 1;
	}

	public function getDelimiterUse(DelimiterInterface $opener, DelimiterInterface $closer): int
	{
		//$min = \min($opener->getLength(), $closer->getLength());
		return 0; //$min >= 1 ? $min : 0;
	}

	public function process(AbstractStringContainer $opener, AbstractStringContainer $closer, int $delimiterUse): void
	{
		$latex = new LaTeX();

		$tmp = $opener->next();
		while ($tmp !== null && $tmp !== $closer) {
			$next = $tmp->next();
			$latex->appendChild($tmp);
			$tmp = $next;
		}

		$opener->insertAfter($latex);
	}
}