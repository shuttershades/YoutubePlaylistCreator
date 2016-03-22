// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
	$('#search-button').attr('disabled', false);
}

// Search for a specified string.
function getVideoId(videoTitle, callback) 
{
	var q = videoTitle;
	var request = gapi.client.youtube.search.list(
	{
		q: q,
		part: 'snippet',
		type: 'video',
		safeSearch: "none",
		maxResults: 1
	});

	request.execute(function (response) {
		console.log("Video ID: " + response.items[0].id.videoId);
		callback(response.items[0].id.videoId);
	});
}