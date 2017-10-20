$(document).ready(function(){
    $("body").hide();
    $("body").fadeIn(1000);
});


$.getJSON("https://api.airtable.com/v0/appbd7eQPE8MGwj1F/musics?api_key=keywjwrnrrJFtjKhu",
function(data) {
   console.log(data);
   $.each(data.records, function (key, val) {
       $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
});

}
);