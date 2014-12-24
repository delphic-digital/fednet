;(function(DELPHIC, $) {

	hljs.initHighlightingOnLoad();

	var index,
	    store,
	    data = $.getJSON(basePath+'searchIndex.json');

	var debounce = function (fn) {
    var timeout
    return function () {
      var args = Array.prototype.slice.call(arguments),
          ctx = this

      clearTimeout(timeout)
      timeout = setTimeout(function () {
        fn.apply(ctx, args)
      }, 100)
    }
  }


	data.then(function(data){
	//	console.log(data)
		store = data.store
		// create index
		index = lunr.Index.load(data.index);
	});

	var $backbtn = $('<a class="search-results__back">Back</a>').click(function(){
		$('.js-search-results').empty();
		$('article.search-results').hide();
		$('article.content').show();
		$('.site-search__input').val('');
	})

	$('article.content').after(
			$('<article class="search-results">')
			.append('<h1>Search Results</h1>')
			.append($backbtn)
			.append('<div class="js-search-results">')
			.hide()
		);


	$('.site-search__input').keyup(function(){
		if ($(this).val() < 2) return;
		var query = $(this).val(),
		    results = index.search(query);

		data.then(function(data) {
			$('article.content').hide()

				$('.search-results').show()
				$('.js-search-results')
					.empty()
					.append(
						results.length ?
						results.map(function(result){
							var el = $('<div class="search-results__item">')
							    .append($('<a class="search-results__title">')
							    	      .attr('href', basePath+result.ref)
							    	      .text(store[result.ref].title))
					        .append('<div class="search-results__link-text">'+basePath+result.ref+'</div>')
					        .append('<div class="search-results__excerpt">'+store[result.ref].excerpt+'</div>')
							return el;
						}) : $('<div class="search-result__item"><strong>No results found</strong></div>')
					);
		});
	})


} (DELPHIC = window.DELPHIC || {}, jQuery));