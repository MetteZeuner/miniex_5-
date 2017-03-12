var t; //declaring the variable for the text. 
var mystic = false; 
var sexy = false; 
var girl = false;
var mysticbutton; //declaring the variable for the "mystify" button. 
var sexybutton; // declaring the variable for the "sexify" button. 
var originalbutton; //declaring the variable for the "original" button.
var feministbutton; //declaring the variable for the "feminist" button. 
var originalSound; //declaring the variable for the song playing at the 'original' text. 
var mysticSound; // declaring the variable for the song playing at the "mystify" text.
var sexySound; //declaring the variable for the song playing at the "sexify" text. 
var women;  //declaring the variable for the song playing at the "feminist" text. 
var tolkienFont; //the text font for the original text.
var sexyFont; // text font for the "sexify" text.
var scaryFont; // text font for the "mystify" text. 
var girlyFont; // text font for the "feminist" text. 




function preload(){
tolkienFont = loadFont("assets/text.ttf"); //preload the original textfont. 
sexyFont = loadFont("assets/sexy.TTF"); //preload the sexify textfont. 
scaryFont = loadFont("assets/scary.ttf"); //preload the mystify textfont. 
girlyFont = loadFont("assets/girly.ttf"); //preload the feminist textfont. 
originalSound = loadSound("sound/shire.mp3"); //preload the original music.
mysticSound = loadSound("sound/xfiles.mp3"); //preload the mystify music. 
sexySound = loadSound("sound/sexy.mp3"); //preload the sexify music.
women = loadSound("sound/girls.mp3"); //preload the feminist music. 

}

 

function setup(){
createCanvas(800, 500);
originalSound.play(); //play the original music. 
}

function draw(){
    
background(0, 107, 60);
textFont(tolkienFont); 

mysticbutton = createButton("Mystify"); //creating the mystify button. 
mysticbutton.position(20, 30);
mysticbutton.mousePressed(mysterious); //when the mystify button is pressed call the mysterious function. 

originalbutton = createButton ("Original"); //creating the original button. 
originalbutton.position(20, 10);
originalbutton.mousePressed (original); //when the original button is pressed call the original function. 
    
sexybutton = createButton ("Sexify"); //creating the sexify button. 
sexybutton.position(20, 50);
sexybutton.mousePressed(sexytime);//when the sexify button is pressed call the sexytime function. 

feministbutton = createButton ("Feminist (just for fun)"); //creating the feminist button. 
feministbutton.position(20, 70); 
feministbutton.mousePressed(feminist); //when feminist button is pressed call the feminist function. 

    
if(mystic){ //when the button "mystify" is pressed, it turn the variable "mystic" to ture and therefore changes the variable "t" to another text (mystify text).
t = "Bilbo was very weird and very mysterious, and had been the freak of the shire for sixty years, ever since his remarkable knife collection and unexpected bloodstains. The bodybags he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with bodies. And if that was not enough for fame, there was also his prolonged strangeness to speculate at. Time wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same as fifty. At ninety-nine they began to call him weirdo; but psychopath would have been nearer the mark. There were some that shook their heads and thought this was too much of a creepy thing; it seemed disturbing that anyone should possess (apparently) perpetual murder characteristics as well as reputedly inexhaustible amounts of chloroform. ";

background(0); //changes the background to black if "mystic" is true. 
textFont(scaryFont); //changes the text font to the "mystify" text font if "mystic" is true. 


}else{ //if the variable "mystic" is false, show this text instead. Since variable "mystic" starts out as false, this text is shown when opening the program at first. 

t = "Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure. And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same as at fifty. At ninety-nine they began to call him well-preserved; but unchanged would have been nearer the mark. There were some that shook their heads and thought this was too much of a good thing; it seemed unfair that anyone should possess (apparently) perpetual youth as well as (reputedly) inexhaustible wealth."; 

}
    

if(sexy){//when the button "sexify" is pressed, it turns the variable "sexy" to true and therefore changes the variable "t" to another text (sexify text). 
    
t = "Bilbo was very seductive and sensual, and had been the womanizer of the Shire for sixty years, ever since his remarkable complements and unexpected dancemoves. The women he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with panties. And if that was not enough for fame, there was also his prolonged lady-magnetism to marvel at. Time wore on, but is seemed to have little effect on Mr. Baggins. At ninety he was much the same as fifty. At nine-nine they began to call him well-preserved; but unchanged would have been nearer the mark. There were some that shook their heads and thought this was too much of a sexy thing; it seemed unfair that anyone should possess (apparently) perpetual sexiness as well as reputedly inexhaustible charm.";

background (134, 1, 17); //changes the background to red if "sexy" is true. 
textFont(sexyFont); //changes the text font to the "sexify" text font if "sexy" is true. 
}
    
if(girl){ //when the button "feminist" is pressed, it turns the variable "girl" to true and therefore changes the variable "t" to another text (feminst text); 
t = "Bilba was very independent and very independent, and had been the wonder of the Shire for sixty years, ever since her remarkable knowledge and unexpected brain. The equality she had brought back from her travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with male chauvinists. And if that was not enough for fame, there was also her prolonged independence to marvel at. Time wore on, but it seemed to have little effect on Mrs. Baggins. At ninety she was much the same as at fifty. At ninety-nine they began to call her manhater; but feminist would have been nearer the mark. There were some that shook their heads and thought this was too much of a political thing; it seemed unfair that anyone should possess (apparently) perpetual PMS as well as (reputedly) inexhaustible girlpower.";

background (241, 156, 187); //changes the background to pink if "girl" is true. 
textFont(girlyFont); //changes the text font to the "feminist" textfont if "girl" is true. 
}

    
 
fill(255);
if(sexy || girl){
    textSize(13); // i needed to change some of the text fonts to different sizes because they had different sizes than the others when implemented at textsize 10.  
}else{
    textSize(10);
}
text(t, 100, 100, 300, 310);     
    
}

function mysterious(){
originalSound.pause();
mystic = true;
sexy = false;
girl = false;
mysticSound.play();
sexySound.stop();
women.stop();
}

function original(){ //this function makes sure that when the "original" button is pressed the text changes to the "mystify" textfont, all other music stops, and the 'mystify' music plays. 
mystic = false;
sexy = false; 
girl = false;
originalSound.play();
mysticSound.stop();
sexySound.stop();
women.stop();
}

function sexytime(){ //this function makes sure that when the "sexify" button is pressed the text changes to the "sexify" textfont, all other music stops and the "sexify" music plays. 

sexy = true; 
mystic = false;
girl = false; 
sexySound.play();
originalSound.pause();
mysticSound.stop();
women.stop();
}

function feminist(){ //this function makes sure that when the "feminist" button is pressed the text changes to the "feminist" textfont, all other music stops and the "feminist" music plays. 
girl = true; 
sexy = false;
mystic = false;
women.play();
sexySound.stop();
originalSound.pause();
mysticSound.stop();
}




