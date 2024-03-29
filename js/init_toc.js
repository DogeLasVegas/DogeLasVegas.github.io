let markbody = document.getElementById('hexo-blog-encrypt').firstChild;
markbody.className="js-toc-content";

tocbot.init({
  // Where to render the table of contents.
  tocSelector: '#toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3, h4, h5, h6',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});
