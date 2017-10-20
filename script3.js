$.getJSON("https://api.airtable.com/v0/appJBxSmyHMXbstSJ/musics?pageSize=6&api_key=keyzOxUWBfRnJ4LUA",
function(data) {
console.log(data);
$.each(data.records, function(key,val){
    
$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#toplist');
    
});
}
);