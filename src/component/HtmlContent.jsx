const HtmlContent = ({ encodedHtml }) => {
	return <div dangerouslySetInnerHTML={{ __html: decodeHtml(encodedHtml) }} />;
};
