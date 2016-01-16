var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.body = opts.body;
  this.pic = opts.pic;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);
  $newArticle.find('time[pubdate]').attr('title',this.publishedOn);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('a').text(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);

  $newArticle.find('#pic').html('<img src="'+ this.pic+ '"/>');
  //$newArticle.find('#pic').html('<p>test</p>');

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.append('<hr>');
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
