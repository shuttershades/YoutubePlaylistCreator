var playlistId = "";

// Create a private playlist.
function createPlaylist(callback) {
	var request = gapi.client.youtube.playlists.insert({
		part: 'snippet,status',
		resource: {
			snippet: {
				title: $("#playlistTitle").val(),
				description: 'A private playlist created with the YouTube API'
			},
			status: {
				privacyStatus: 'private'
			}
		}
	});
	request.execute(function (response) {
		var result = response.result;
		if (result) {
			playlistId = result.id;
			callback();
		} 
		else {
			alert("Error: Couldn't create playlist");
		}
	});
}

// Add a video to a playlist. The "startPos" and "endPos" values let you
// start and stop the video at specific times when the video is played as
// part of the playlist. However, these values are not set in this example.
var numberOfSongs = 0;

function addToPlaylist(id)
{
	var details = 
	{
		videoId: id,
		kind: 'youtube#video'
	};

	var request = gapi.client.youtube.playlistItems.insert({
		part: 'snippet',
		resource: {
			snippet: {
				playlistId: playlistId,
				resourceId: details
			}
		}
	});
	
	request.execute(function (response) {
		console.log(++numberOfSongs);
		console.log(response.result);
	});
}