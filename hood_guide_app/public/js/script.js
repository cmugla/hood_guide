$(document).ready(function() {

  console.log("you're the best")

  /* SAVING TO USER PROFILE */

  let $saveArticleBtn = $('.save.article');
  let $saveEventBtn   = $('.save.event');

  $saveArticleBtn.click(saveArticle);
  $saveEventBtn.click(saveEvent);

  function saveArticle() {
    let article       = $(this).closest('section')
    let articleTitle  = article.children('h1').text();
    let articleDesc   = article.children('p').text();
    let articleLink   = article.children('a').attr('href');

    console.log(articleTitle)

    $.ajax({
      url: '/user/save-article',
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

  function saveEvent() {
    let event       = $(this).closest('section');
    let eventTitle  = event.children('h1').text();
    let eventDesc   = event.children('p').text();
    let eventLink   = event.children('a').attr('href');

    console.log(eventTitle, eventDesc, eventLink)

    $.ajax({
      url: '/user/save-event',
      type: 'GET',
      dataType: 'json',
      data: {
        'eventTitle'  : eventTitle,
        'eventDesc'   : eventDesc,
        'eventLink'   : eventLink
      },
      success: function(data) {
        console.log(data)
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  /* MODALS */

  let $loginLink    = $('.loginLink');
  let $newUserLink  = $('.newLink');

  $loginLink.click(toggleLogin);
  $newUserLink.click(toggleNew);

  function toggleLogin() {
    console.log("clicked")
  }

  function toggleNew() {
    console.log("clicked")
  }


});
