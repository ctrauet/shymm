$(document).ready(function(){
    $("body").hide();
    $("body").fadeIn(1000);
});


$.getJSON("https://api.airtable.com/v0/appbd7eQPE8MGwj1F/musics?api_key=keywjwrnrrJFtjKhu",
function(data) {
   console.log(data);
   $.each(data.records, function (key, val) {
       console.log(val.fields.title);
       $('<li>'+val.fields.title+'</li>').appendTo('#musiques');
       $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
}); 

}
);