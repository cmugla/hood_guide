$(document).ready(function() {

  console.log("you're the bext")

  // click event
  // ajax call to route
    // set data key to "new thing" and its value will be the object
    // in function, access that object with req.query["new thing"]


  let $saveArticleBtn = $('.save.article');
  let $saveEventBtn   = $('.save.event');


  $saveArticleBtn.click(saveArticle)

  function saveArticle() {

    let article       = $(this).closest('section')
    let articleTitle  = article.children('h1').text();
    let articleDesc   = article.children('p').text();
    let articleLink   = article.children('a').attr('href');

    console.log(articleTitle)

    $.ajax({
      url: '/user/save',
      type: 'GET',
      dataType: 'json',
      data: {
        'articleTitle'  : articleTitle,
        'articleDesc'   : articleDesc,
        'articleLink'   : articleLink
      },
      success: function(data) {
        console.log(data)
      },
      error: function(err) {
        console.log(err)
      }
    })

  }


});
