var currentSongNumber = 1;
var willLoop = 0;
var Playingnumber = 0  ;
var shuffle=0;
var equal = 0;



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
$(".fa-step-forward").click(function(){
  if(Playingnumber == songs.length-1){
    Playingnumber = 0;
    changeSong();
      }
      else {
        console.log(Playingnumber);
        Playingnumber++;

        console.log("hello");
        fancyTimeFormat(166);
        changeSong();
      }
});
function fancyTimeFormat(time) //function used to make time format as min:sec
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


function updateCurrentTime() { //function used to dispaly current song img and details
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);//showing current time of song using function fancyTimeFormat
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);//total duration of time of song using function fancyTimeFormat
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
                var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') { //key 32is spacebar and when spacebar is not prssed in input tag
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

var songs = [{   //using arrays to dispaly all the song details
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


    $('.fa-repeat').on('click',function() { //loop function
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});

$('.fa-random').on('click',function() { //shuffle function
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

function timeJump() {   //play next song
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 6;
}

$('audio').on('ended',function() { //function to shuffle songs
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,5,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 5) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})

function randomExcluded(min, max, excluded) { //function to select songs randomly
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}

// forward click
$('.fwd').click(function (e) {
e.preventDefault();
stopAudio();
var next = $('.songs').next();
if (next.length == 0) {
next = $('.song'== currentsong);
}
initAudio(next);
});
// rewind click
$('.rew').click(function (e) {
e.preventDefault();
stopAudio();
var prev = $('.songs').prev();
if (prev.length == 0) {
prev = $('.songss'-1);
}
initAudio(prev);
});

function changeSong() //we have made a machine jispe 2 buttons diye hai songName and position ke liye
{
var music =  songs[Playingnumber].fileName;
var song = document.querySelector("audio");
song.src = music;
toggleSong();
changeCurrentSongDetails(songs[Playingnumber])
}







window.onload = function() { //functions which work on on load of screen or page

   $('#songs').DataTable({ //turning off paging components of datatables
        paging: false
    });

   changeCurrentSongDetails(songs[0]);//passing value of song i currentsong details function


   for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);    //getting details of all the attributes of song
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i)
       }


       $(".player-progress").click(function(event) {
    var $this = $(this);
    // to get part of width of progress bar clicked
    var widthclicked = event.pageX - $this.offset().left;
    var totalWidth = $this.width(); // can also be cached somewhere in the app if it doesn't change
    // do calculation of the seconds clicked
    var calc = (widthclicked / totalWidth) * 100 ; // get the percent of bar clicked and multiply in by the duration
var song = document.querySelector('audio');
song.currentTime = (song.duration*calc)/100;
updateTimer();
});

updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}



for (var i = 0; i < fileNames.length ; i++) {
    addSongNameClickEvent(fileNames[i],i+1)
}


function addSongNameClickEvent(songObj,position) {  //function which is used to get the name and position of song and playing and pausing song after checking condition
    var songName = songObj.fileName; // New Variable
    var id = '#song' + (position+1);
$(id).click(function() {
  Playingnumber= (position - 1)
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



$(".fa-step-forward").click(function(){

if(Playingnumber == songs.length-1){
console.log("one");
Playingnumber = 0;
changeSong();
}

else {
console.log("two");
console.log(Playingnumber);
  Playingnumber++;
changeSong();
}
})

$(".fa-step-backward").click(function(){

if(Playingnumber == 0){
console.log("one");
Playingnumber = (songs.length-1);
changeSong();
}

else {
console.log("two");
console.log(Playingnumber);
  Playingnumber--;
changeSong();
}
})

function shufflee(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$(".fa-random").click(function(){
$(this).toggleClass("active");
if(shuffle==0)
{
shuffle = 1;
shufflee(songs);
changeCurrentSongDetails(songs[0]);
song =document.querySelector("audio");
song.src = songs[0].fileName;
toggleSong();
Playingnumber=0;

    for (var i = 0; i < songs.length; i++) //Var i zero se 3 tak chalana hai
    {
        var obj = songs[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
        var name = '#song' + (i + 1);
        var song = $(name);
        song.find('.song-name').text(obj.name); //("song1 .songname")
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj, i + 1);
    }
}
else {
  shuffle = 0;
   songs = [{
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
      }
  ]

  changeCurrentSongDetails(songs[0]);
  song =document.querySelector("audio");
  song.src = songs[0].fileName;
toggleSong();
Playingnumber=0;
  for (var i = 0; i < songs.length; i++) //Var i zero se 3 tak chalana hai
  {
      var obj = songs[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
      var name = '#song' + (i + 1);
      var song = $(name);
      song.find('.song-name').text(obj.name); //("song1 .songname")
      song.find('.song-artist').text(obj.artist);
      song.find('.song-album').text(obj.album);
      song.find('.song-length').text(obj.duration);
      addSongNameClickEvent(obj, i + 1);
  }
}
})


$(".fa fa-bars").click(function(){
$(this).toggleClass("active");
if(equal==0)
{
equal=1;
$("svg").css("display","inline-block");
$(".content").css("display","none");
$(".contain").css("display","inline-block");
$(".contain").css("background","black");
}
else{
equal=0;
$("svg").css("display","none");
$(".content").css("display","inline-block");
$(".contain").css("display","none");
}
})
