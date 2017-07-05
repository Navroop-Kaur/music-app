    //a funtion to play and pause song is created...here class are added and removed when a song is played or pause
    function toggleSong() { 
var song = document.querySelector('audio');
if(song.paused == true) { //if song is paused it will return value true nd song will stop nd class will change from play to pause
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');  //if song is played it will change class from pause to play
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
} 
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

<!--current time functio-->
function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}


function addSongNameClickEvent(songName,position) {
    var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
}
});
}

    $('.welcome-screen button').on('click', function() {  //this is a welcome screen function which works on click
        var name = $('#name-input').val();
        if (name.length > 2) { //value should be greater than 2 characters only then nxt screen will display otherwise user will get a error
            var message = "Welcome, " + name; //welcome and user name will display as message on screen if input given by user is correct
            $('.main .user-name').text(message); 
            $('.welcome-screen').addClass('hidden');  //when condition of name is satisfied it will hide welcome screen nd diplay main screen
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error'); //if name input is incorrect it will display error
        }
    });
    $('.play-icon').on('click', function() {// song will be played and paused on clicking the play icon
        toggleSong();//fuction to play and pause song is used
    });
    $('body').on('keypress', function(event) { //song will be played or paused by pressing a key on keyboard
                if (event.keyCode == 32) { //key 32is spacebar
                   toggleSong();// function to play and pause song
                }
            });


window.onload = function() {
   $('#song1 .song-name').text(songList[0]);
$('#song2 .song-name').text(songList[1]);
$('#song3 .song-name').text(songList[2]);
$('#song4 .song-name').text(songList[3]);
$('#song5 .song-name').text(songList[4]);
updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}
var songList = ['Phir Bhi Tum Ko Chahugi','Cheap Thrills',
'Shape Of You', 'Humsafar', 'The Black Magic']; 
// $('#song1 .song-name').text(songList[0]);
//     $('#song2 .song-name').text(songList[1]);
//     $('#song3 .song-name').text(songList[2]);
//     $('#song4 .song-name').text(songList[3]);
//     $('#song5 .song-name').text(songList[4]);



var artistList = ['Shardha KApoor', 'Sia', 'Ed Sheeran', 'Akhil Sachdeva', 'Little Mix']; 
// $('#song1 .song-artist').text(artistList[0]);
//     $('#song2 .song-artist').text(artistList[1]);
//     $('#song3 .song-artist').text(artistList[2]);
//     $('#song4 .song-artist').text(artistList[3]);
//     $('#song5 .song-artist').text(artistList[4]);

for(var i =0; i < songList.length;i++) {
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(songList[i]);
        song.find('.song-artist').text(artistList[i]);
    }
    var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3'];
// addSongNameClickEvent(fileNames[0],1);
// addSongNameClickEvent(fileNames[1],2);
// addSongNameClickEvent(fileNames[2],3);
// addSongNameClickEvent(fileNames[3],4);
// addSongNameClickEvent(fileNames[4],5);
for (var i = 0; i < fileNames.length ; i++) {
    addSongNameClickEvent(fileNames[i],i+1)
}  


// $('#song1').click(function() {
// var audio = document.querySelector('audio');
// var currentSong = audio.src;
// if(currentSong.search(fileNames[0]) != -1)
// {
// toggleSong();
// }
// else {
// audio.src = fileNames[0];
// toggleSong();
// }
// });

// $('#song2').click(function() {
// var audio = document.querySelector('audio');
// var currentSong = audio.src;
// if(currentSong.search(fileNames[1]) != -1)
// {
// toggleSong();
// }
// else {
// audio.src = fileNames[1];
// toggleSong();
// }
// });

// $('#song3').click(function() {
// var audio = document.querySelector('audio');
// var currentSong = audio.src;
// if(currentSong.search(fileNames[2]) != -1)
// {
// toggleSong();
// }
// else {
// audio.src = fileNames[2];
// toggleSong();
// }
// });

// $('#song4').click(function() {
// var audio = document.querySelector('audio');
// var currentSong = audio.src;
// if(currentSong.search(fileNames[3]) != -1)
// {
// toggleSong();
// }
// else {
// audio.src = fileNames[3];
// toggleSong();
// }
// });
// $('#song5').click(function() {
// var audio = document.querySelector('audio');
// var currentSong = audio.src;
// if(currentSong.search(fileNames[4]) != -1)
// {
// toggleSong();
// }
// else {
// audio.src = fileNames[4];
// toggleSong();
// }
// });




    