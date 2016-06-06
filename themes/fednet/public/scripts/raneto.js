
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
            //console.log(contents.getContents())
            var page = contents.getFileByName(slug.substring(1)+".md");
             page.fetchCommits(function (err, res) {
              var lastCommit = page.getLastCommit();
              var time = moment(lastCommit.author.date).format("ddd, MMM Do, h:mm:ss a");

              $('.last-updated').html('Last updated on '+time+' by '+lastCommit.author.name+ ' '+'<a href="https://github.com/delphic-digital/fednet/commit/'+lastCommit.sha+'">'+lastCommit.sha+'</a>')
             })
          })
        })

     })


  });

})(jQuery, hljs);
