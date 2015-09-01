if(!db){var db=[];}

function check(){
if(answer=db[location.href.split("/").pop()] ){
x=$("a").filter(function() {return $(this).text() == answer;}).attr('rel')
ExternalGame.submitAnswer(x);
}else{
ExternalGame.submitAnswer(Math.floor(Math.random()*(4)));	
}
}
      
function mainLoop () {
   setTimeout(function () {
		create();   
		check();   
		mainLoop();                             
   }, 2000)
}
mainLoop(); 
	
ca="";
na="";nb="";
function create(){
na=nb;
nb=location.href.split("/").pop();
ca=$("div #incorrect").text().split("= ")[1];
if((ca!=undefined)&&($("div:contains('"+na+"')").length<1)){ 
db[na]=ca;}
}// JavaScript Document

$('h2:contains("Recent")').click(function(e) {
var fileContent = "data:text/plain;charset=utf-8,db=[];\n";	
for(var key in db){
fileContent +="db["+key+"]=\""+db[key]+"\";"+"\n";
}
var encodedUri = encodeURI(fileContent);
window.open(encodedUri);    
});


