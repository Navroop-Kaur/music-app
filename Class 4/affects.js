var chorus;
var wahwah;
var overdrive;
var tremolo;


function tunaDemo(){
	//create an instance of tuna by passsing the audiocontext we use
	var tuna = new Tuna(context);
	//create a new tuna delay instance

	wahwah = new tuna.WahWah({
		automode : true, //true or false
		baseFrequency : 0.8, //0 to 1
		excursionOctaves : 1, //1 to 6
		sweep : 0.6 ,//0 to 1
		resonance : 70, //1 to 100
		sensitivity :0.5, //-1 to 1
		bypass : 1
	});



	chorus = new tuna.Chorus({
		feedback: 0.78,
		delayTime:70, //this will create a short "stop back" delay
		wetLevel:0.9,
		dryLevel:1,
		cutoff:5000,
		bypass:true
	});



	overdrive = new tuna.Overdrive({
		intensity: 1, //0 to 1
		rate: 8, //0.001 to 8
		stereoPhase:140, //0 to 180
		bypass:1
	});



	tremolo = new tuna.Tremolo({
		intensity : 1, //0 to 1
		rate : 8, //0.001 to 8
		stereoPhase: 140, //0 to 180
		bypass: 1
	});
}




	var context =new AudioContext;
	tunaDemo();
	var song=document.querySelector("audio");
	var source=context.createMediaElementSource(song);



source.connect(wahwah.input);
source.connect(tremolo.input);
source.connect(overdrive.input);
source.connect(chorus.input);
wahwah.connect(context.destination);
overdrive.connect(context.destination);
tremolo.connect(context.destination);
chorus.connect(context.destination);


var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");


var x = 0;
var y = 0;


a.addEventListener("click",function(e){

	if(chorus.bypass){
		chorus.bypass = false;
		console.log("false");
	}
	else{
		chorus.bypass = true;
		console.log("true")
	}
});


b.addEventListener("click",function(e){

	if(wahwah.bypass){
		wahwah.bypass = 0;



		}
	else{
		wahwah.bypass = 1;


	}
});


c.addEventListener("click",function(e){

	if(overdrive.bypass){
		wahwah.bypass = 0;
		}
	else{
		wahwah.bypass = 1;

	}
});


d.addEventListener("click",function(e){

	if(tremolo.bypass){
		wahwah.bypass = 0;
		}
	else{
		wahwah.bypass = 1;

	}
});
