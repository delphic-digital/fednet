
;(function ($, hljs) {

  "use strict";

  var current_category;

  $(document).ready(function () {

    // Enable Highlighting and other
    // things when there is content
    if ($(".content").length) {

      // Syntax highlighting
     // hljs.initHighlightingOnLoad();
      $('code').each(function(i, block) {
       hljs.highlightBlock(block);
      });

      // FitVids
      fitvids(".content");
    }

    // Deal with Home Categories
    if ($(".home-categories").length) {
      $(".home-categories").masonry({
        columnWidth        : ".col",
        itemSelector       : ".col",
        transitionDuration : 0
      });
    }

    //delphic-digital:cafc7d30d1415b8574f49befabcd3c07cabc252f

     var dd = new Gh3.User("delphic-digital")
     var fednet = new Gh3.Repository("fednet", dd);
     fednet.fetchBranches(function (err, res) {
       var v2 = fednet.getBranchByName("v2");
        v2.fetchContents(function (err, res) {
         var contents = v2.getDirByName('content');

          contents.fetchContents(function (err, res) {
           var slug = $('.page.active a').attr('href');
            //var slug = '/code-standards/general-standards'
            var splitSlug = slug.split('/')

            //console.log(splitSlug.length)

            if(splitSlug.length>2){
              var catSlug = splitSlug[1];
              var pageSlug = splitSlug[2];
              //console.log(catSlug, pageSlug)



              var pages = contents.getDirByName(catSlug);
               pages.fetchContents(function (err, res) {
                 var page = pages.getFileByName(pageSlug + ".md");
                 page.fetchCommits(function (err, res) {
                  var lastCommit = page.getLastCommit();
                  var timeAgo = moment(lastCommit.author.date).fromNow();

                  $('.last-updated').html('Updated by '+lastCommit.author.name+', '+timeAgo+ ' '+'<a href="https://github.com/delphic-digital/fednet/commit/'+lastCommit.sha+'">'+lastCommit.sha+'</a>')
                 })
               })

            }else{
              var page = contents.getFileByName(slug.substring(1)+".md");
             page.fetchCommits(function (err, res) {
              var lastCommit = page.getLastCommit();
              var timeAgo = moment(lastCommit.author.date).fromNow()

                  $('.last-updated').html('Updated by '+lastCommit.author.name+', '+timeAgo+ ' '+'<a href="https://github.com/delphic-digital/fednet/commit/'+lastCommit.sha+'">'+lastCommit.sha+'</a>')
             })
            }

          })
        })

     })


  });

})(jQuery, hljs);
