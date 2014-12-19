hljs.initHighlightingOnLoad();

var searchIndexUrl = '../searchIndex.json';

var index,
    store,
    data = $.getJSON(searchIndexUrl);

data.then(function(data){
	store = data.store,
	// create index
	index = lunr.Index.load(data.index)
});