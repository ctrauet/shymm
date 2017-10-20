$(document).ready(function(){
$("").toggle(10000);
});

$.getJSON("https://api.airtable.com/v0/appJBxSmyHMXbstSJ/musics?api_key=keyzOxUWBfRnJ4LUA",
function(data) 
{console.log(data);
   $.each(data.records, function (key, val) 
    {console.log(val.fields.title);
       $('<class>'+val.fields.title+'</class>').appendTo('#musiques');
       $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
    }); 

});