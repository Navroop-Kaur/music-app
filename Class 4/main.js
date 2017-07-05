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



function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}



//     var songList = ['Phir Bhi Tum Ko Chahugi','Cheap Thrills',
// 'Shape Of You', 'Humsafar', 'The Black Magic']; 
// var artistList = ['Shardha KApoor', 'Sia', 'Ed Sheeran', 'Akhil Sachdeva', 'Little Mix']; 
// var albumList = ['Half Girlfriend','This Is Action','Divide','Badrinath ki Dulhania', 'Get Weird'];
// var durationList = ['3:53','3:46','3:56','4:28','3:45'];

var songs = [{
        'name': 'Phir Bhi Tum Ko Chahugi',
        'artist': 'Shardha Kapoor',
        'album': 'Half Girlfriend',
        'duration': '3:53',
       'fileName': 'song1.mp3',
       'image': 'song1.jpg'
    },
     {
        'name': 'Cheap Thrills',
        'artist': 'Sia',
        'album': 'This Is Action',
        'duration': '3:46',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'
    },
      {
        'name': 'Shape Of You',
        'artist': 'Ed Sheeran',
        'album': 'Divide',
        'duration': '3:56',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'
    },
      {
        'name': 'Humsafar',
        'artist': 'Akhil Sachdeva',
        'album': 'Badrinath Ki Dulhania',
        'duration': '4:28',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'
    },
     {
        'name': 'Black Magic',
        'artist': 'Little Mix',
        'album': 'Get Weird',
        'duration': '3:45',
        'fileName': 'song5.mp3',
        'image': 'song5.jpg'
    }]

    var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3'];

window.onload = function() {

   changeCurrentSongDetails(songs[0]);


   for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i)
       }

updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}



for (var i = 0; i < fileNames.length ; i++) {
    addSongNameClickEvent(fileNames[i],i+1)
}  


function addSongNameClickEvent(songObj,position) {
    var songName = songObj.fileName; // New Variable
    var id = '#song' + (position+1);
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
changeCurrentSongDetails(songObj); // Function Call
}
});
}


// for(var i =0; i < songList.length;i++) {
//         var name = '#song' + (i+1);
//         var song = $(name);
//         song.find('.song-name').text(songList[i]);
//         song.find('.song-artist').text(artistList[i]);
//         song.find('.song-album').text(albumList[i]); // Added
//         song.find('.song-length').text(durationList[i]); // Added
//     }




