var articles = [];

function Article (opts) {
  // 1/7/16

  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  // 1/7/16

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.attr('data-category', this.category);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('h1').html(this.title);
  //$newArticle.find('publishedOn',this.publishedOn);
  $newArticle.find('a').text(this.author);

  $newArticle.find('a').attr('href',this.authorUrl);



  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');

  // 1/7/16 removing class of function or className specific??? or anon fx?

  $newArticle.removeClass('template');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
