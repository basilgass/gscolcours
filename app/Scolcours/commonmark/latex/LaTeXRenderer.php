<?php


namespace App\Scolcours\commonmark\latex;


	use League\CommonMark\Node\Node;
	use League\CommonMark\Renderer\ChildNodeRendererInterface;
	use League\CommonMark\Renderer\NodeRendererInterface;
	use League\CommonMark\Util\HtmlElement;
	use League\CommonMark\Xml\XmlNodeRendererInterface;

final class LaTeXRenderer implements NodeRendererInterface, XmlNodeRendererInterface
{
	/**
	 * @param LaTeX $node
	 *
	 * {@inheritDoc}
	 *
	 * @psalm-suppress MoreSpecificImplementedParamType
	 */
	public function render(Node $node, ChildNodeRendererInterface $childRenderer): \Stringable
	{
		LaTeX::assertInstanceOf($node);

		return new HtmlElement('div',
			$node->data->get('attributes'),
			$childRenderer->renderNodes($node->children())
		);
	}

	public function getXmlTagName(Node $node): string
	{
		return 'LaTeX';
	}

	/**
	 * {@inheritDoc}
	 */
	public function getXmlAttributes(Node $node): array
	{
		return [];
	}
}