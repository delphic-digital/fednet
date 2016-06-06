
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

  });

})(jQuery, hljs);
