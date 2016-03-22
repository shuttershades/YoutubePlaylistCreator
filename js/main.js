function getSongs()
{
	var songs = [];
	var data = $("#playlistSongs").val().split("\n");
	console.log(data);
	
	for(var i = 0; i < data.length; i++)
		if(i % 2 == 0 && data[i].length > 0)
			songs.push(data[i]);
	
	console.log(songs);
	alert(songs.length);
	return songs;
}

function addSongsToPlaylist(songs)
{
	var songInc = 1;
	
	var addSongs = function(beg, end, songs)
	{
		for(var i = beg; i < end; i++)
			getVideoId(songs[i], addToPlaylist);
		
		beg = end;
		
		if(beg === songs.length)
			return;
		
		end += songInc;
		
		if(end > songs.length)
			end = songs.length;
		
		window.setTimeout(function()
		{
			addSongs(beg, end, songs);
		}, 1000);
	};
	
	addSongs(0, songInc, songs);
}

function create()
{
	numberOfSongs = 0;
	var songs = getSongs();
	createPlaylist(function()
	{
		addSongsToPlaylist(songs);
	});
}