$('#submit-btn').on('click', submitFunc);

function submitFunc(event) {
	event.preventDefault();
	$('.bgimg').remove();
	$('<img>')
	.attr( { 
		src: 'https://maps.googleapis.com/maps/api/streetview?size=640x640&location=<street>,<city>'.replace('<street>', street.value).replace('<city>', city.value), 
		class: 'bgimg' } )
	.appendTo('body');
	$('li').remove();
/*	var str = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=<city>&sort=newest&api-key=42ecfd3c08e3afa3fdc05929fa024094:7:72309226'.replace('<city>', city.value);
	$.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=<city>&sort=newest&api-key=42ecfd3c08e3afa3fdc05929fa024094:7:72309226".replace('<city>', city.value), function (data) {
			var arr = data.response.docs;
			arr.forEach(function (el) {
				$('<li><a href="<link>"><headArticle></a><p><snippet></p></li>'.replace('<link>', el.web_url).replace('<headArticle>', el.headline.main).replace('<snippet>', el.snippet)).appendTo($("#nytimesArticlesList"));
			});
	});*/
	var str = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
	var queryParams = {
		'q': city.value,
		'sort': 'newest',
		'api-key': '42ecfd3c08e3afa3fdc05929fa024094:7:72309226'
	}
	$.getJSON(str, queryParams, function (data) {
			var arr = data.response.docs;
			arr.forEach(function (el) {
				$('<li><a href="<link>"><headArticle></a><p><snippet></p></li>'.replace('<link>', el.web_url).replace('<headArticle>', el.headline.main).replace('<snippet>', el.snippet)).appendTo($("#nytimesArticlesList"));
			});
	});
}
