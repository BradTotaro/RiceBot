var t="http://freerice.com/#/famous-paintings/";
var kn=true;
var x=0;
var csvContent = "data:text/plain;charset=utf-8,";

var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
function ans(a , b){
if(location.href == t+a ){ var x=($("a:contains("+b+")").attr('rel')); $("a").attr('rel',x) }
if(location.href == t+a ){ $("a:contains("+b+")").text("Right");}
$("a.question-link").addClass("answer-item");
$("a.question-link").addClass("flt");
if(location.href == t+a ){kn=false;	ExternalGame.submitAnswer(x);console.log(x);}
}
function fin(){
	var a= Math.floor(Math.random()*(4));
	ExternalGame.submitAnswer(a);	
	}
//_______________________Fack__________________________\\         	          
function myLoop () {
   setTimeout(function () {
         myLoop();
		 create();   
		 check();                                
   }, 1750)
}
myLoop(); 
	
function check () {
eval($('h2:contains("Recent")').text().split('FAQs')[1])
ans('582','Pieter Bruegel the Elder');
ans('541','Hans Holbein the Younger');
ans('470','Rembrandt');
ans('428','Vincent van Gogh');
ans('435','Vincent van Gogh');
ans('437','Katsushika Hokusai');
ans('492','Franz Marc');
ans('481','Pierre-Auguste Renoir');
ans('652','Eugene Delacroix');
ans('659','Claude Monet');
ans('806','Judith Leyster');
ans('804','Berthe Morisot');
ans('802','Jacques-Louis David');
ans('824','Qiu Ying');
ans('815','Thomas Cole');
ans('831','Jeon Seon');
ans('793','Honore Daumier');
ans('800','Leutze');
ans('809','James Tissot');
ans('807','Peter Paul Rubens');
ans('797','Camille Pissarro');
ans('818','Dong Yuan');
ans('829','Chen Hongshou');
ans('822','Jean Fouquet');
ans('798','Jean-Baptiste-Simeon Chardin');
ans('814','Jean-Auguste-Dominique Ingres');
ans('799','Jacopo Pontormo');
ans('820','Paolo Veronese');
ans('810','Frans Hals');
ans('759','Yahya ibn Mahmud al-Wasiti');
ans('763','Caravaggio');
ans('682','Dante Gabriel Rossetti');
ans('755','Piero della Francesca');
ans('821','Leutze');
ans('771','Peter Paul Rubens');
ans('777','Jean-Honore Fragonard');
ans('738','Diego Velazquez');
ans('699','Joshua Reynolds');
ans('719','Elisabeth Louise Vigee-Lebrun');
ans('774','Diego Velazquez');
ans('789','Gilbert Stuart');
ans('756','Vincent van Gogh');
ans('781','William Hogarth');
ans('678','Mary Cassatt');
ans('596','Alessandro Botticelli');
ans('673','Mary Cassatt');
ans('761','Gustav Klimt');
ans('773','Honore Daumier');
ans('703','Claude Monet');
ans('679','Paul Gauguin');
ans('751','Mary Cassatt');
ans('506','Leonardo da Vinci');
ans('466','Gustav Klimt');
ans('532','Henri Rousseau');
ans('503','Paul Cezanne');
ans('523','Georges Seurat');
ans('518','Mary Cassatt');
ans('533','J.M.W. Turner');
ans('484','Edgar Degas');
ans('507','Pierre-Auguste Renoir');
ans('521','Jan Vermeer');
ans('542','Sandro Botticelli');
ans('522','Nihil Chand');
ans('502','J.M.W. Turner');
ans('515','El Greco');
ans('480','Franz Marc');
ans('520','Henri de Toulouse-Lautrec');
ans('540','Henri Rousseau');
ans('524','Georges Seurat');
ans('459','El Greco');
ans('478','Jan Vermeer');
ans('499','Claude Monet');
ans('494','El Greco');
ans('483','Jan Vermeer');
ans('476','Gustav Klimt');
ans('535','Edouard Manet');
ans('517','J.M.W. Turner');
ans('536','Leonardo da Vinci');
ans('498','Mary Cassatt');
ans('467','Alessandro Botticelli');
ans('485','Paul Gauguin');
ans('473','Claude Monet');
ans('491','Sandro Botticelli');
ans('462','Raphael');
ans('461','Pierre-Auguste Renoir');
ans('488','Paul Gauguin');
ans('493','J.M.W. Turner');
ans('490','Pierre-Auguste Renoir');
ans('472','Edgar Degas');
ans('496','J.M.W. Turner');
ans('475','Claude Monet');
ans('569','Titian');
ans('560','Pieter Bruegel the Elder');
ans('616','John Constable');
ans('606','Jan Vermeer');
ans('586','Edouard Manet');
ans('612','John Constable');
ans('617','Henri de Toulouse-Lautrec');
ans('603','Caravaggio');
ans('625','Jean-Honore Fragonard');
ans('599','Parmigianino');
ans('508','Hans Holbein the Younger');
ans('566','Albrecht Durer');
ans('538','Hieronymus Bosch');
ans('559','Caravaggio');
ans('575','Claude Monet');
ans('505','Georges Seurat');
ans('556','Caravaggio');
ans('558','Claude Monet');
ans('516','Pieter Bruegel the Elder');
ans('529','Mary Cassatt');
ans('509','Pierre-Auguste Renoir');
ans('580','Edouard Manet');
ans('574','Jan van Eyck');
ans('510','Franz Marc');
ans('501','Pierre-Auguste Renoir');
ans('468','Rembrandt');
ans('474','Franz Marc');
ans('477','Vincent van Gogh');
ans('479','Jan Vermeer');
ans('486','Pierre-Auguste Renoir');
ans('526','Hieronymus Bosch');
ans('489','Edgar Degas');
ans('530','Henri Rousseau');
ans('564','Diego Velazquez');
ans('553','Pieter Bruegel the Elder');
ans('573','Albrecht Durer');
ans('576','Albrecht Durer');
ans('550','Jacques-Louis David');
ans('544','Winslow Homer');
ans('547','Claude Monet');
ans('513','Pierre-Auguste Renoir');
ans('539','Pierre-Auguste Renoir');
ans('512','Caravaggio');
ans('460','Franz Marc');
ans('598','Claude Monet');
ans('588','James McNeill Whistler');
ans('623','Frans Hals');
ans('579','Gustave Courbet');
ans('571','Mary Cassatt');
ans('548','Georges Seurat');
ans('557','Vincent van Gogh');
ans('546','Michelangelo');
ans('644','Odilon Redon');
ans('638','Pierre-Auguste Renoir');
ans('661','Dante Gabriel Rossetti');
ans('563','Berthe Morisot');
ans('545','Henri Rousseau');
ans('584','Paul Cezanne');
ans('582','Raphael');
ans('626','Frederic Remington');
ans('600','Rembrandt');
ans('611','Albrecht Altdorfer');
ans('591','James McNeill Whistler');
ans('609','Paul Cezanne');
ans('614','Caspar David Friedrich');
ans('589','Gustave Courbet');
ans('578','Edouard Manet');
ans('572','Vincent van Gogh');
ans('552','Claude Monet');
ans('577','Jean-Francois Millet');
ans('628','Berthe Morisot');
ans('655','John Constable');
ans('654','Thomas Eakins');
ans('554','Paul Cezanne');
ans('565','Hieronymus Bosch');
ans('620','Thomas Gainsborough');
ans('613','John Constable');
ans('602','Raphael');
ans('663','Peter Paul Rubens');
ans('627','Paul Cezanne');
ans('624','Claude Monet');
ans('622','Jean-Francois Millet');
ans('594','Henri Rousseau');
ans('656','Antoine-Jean Gros');
ans('646','Jean-Baptiste Perroneau');
ans('610','Claude Monet');
ans('618','Jacques-Louis David');
ans('662','Peter Paul Rubens');
ans('643','Paul Cezanne');
ans('668','Giotto di Bondone');
ans('632','Francisco Goya');
ans('604','Edouard Manet');
ans('635','Gustave Courbet');
ans('651','Yahya ibn Mahmud al-Wasiti');
ans('658','Pieter de Hooch');
ans('642','Pieter Bruegel the Elder');
ans('653','Henri Rousseau');
ans('631','John Trumbull');
ans('551','Jacques-Louis David');
ans('601','Jan Vermeer');
ans('621','Hans Holbein the Younger');
ans('590','Eugene Delacroix');
ans('636','Frans Hals');
ans('666','Peter Paul Rubens');
ans('640','Georges Seurat');
ans('664','John Constable');
ans('629','Caspar David Friedrich');
ans('667','Francisco Goya');
ans('570','Caravaggio');
ans('607','Jan van Eyck');
ans('605','Diego Velazquez');
ans('677','Elisabeth Louise Vigee-Lebrun');
ans('670','Edouard Manet');
ans('705','Winslow Homer');
ans('704','Rogier van der Weyden');
ans('568','Mary Cassatt');
ans('657','Eugene Delacroix');
ans('697','Fra Filippo Lippi');
ans('707','John Everett Millais');
ans('680','Egon Schiele');
ans('660','Shen Zhou');
ans('676','Pierre-Auguste Renoir');
ans('709','Pieter de Hooch');
ans('671','Alfred Sisley');
ans('692','Mary Cassatt');
ans('684','Thomas Eakins');
ans('637','Jacques-Louis David');
ans('689','William Blake');
ans('675','Edouard Manet');
ans('700','John Singleton Copley');
ans('583','Winslow Homer');
ans('595','Pierre-Auguste Renoir');
ans('698','Edgar Degas');
ans('690','Edward Hicks');
ans('708','Thomas Cole');
ans('592','Jacques-Louis David');
ans('593','Leonardo da Vinci');
ans('634','Vincent van Gogh');
ans('608','Pieter Bruegel the Elder');
ans('641','Jacques-Louis David');
ans('645','Pieter Bruegel the Elder');
ans('649','Jean-Baptiste Camille Corot');
ans('745','Petrus Christus');
ans('724','Masaccio');
ans('736','Alfred Sisley');
ans('710','Umberto Boccioni');
ans('650','Mihr Ali');
ans('693','Ando Hiroshige');
ans('687','Frans Hals');
ans('701','Winslow Homer');
ans('686','Hans Holbein the Younger');
ans('712','Theodore Gericault');
ans('718','Henri de Toulouse-Lautrec');
ans('727','Andrea Mantegna');
ans('752','Diego Velazquez');
ans('694','Camille Pissarro');
ans('735','Claude Monet');
ans('749','Thomas Eakins');
ans('717','Peter Paul Rubens');
ans('716','Judith Leyster');
ans('750','Eugene Delacroix');
ans('729','Camille Pissarro');
ans('722','Yen Li-pen');
ans('737','Thomas Cole');
ans('688','Jean-Francois Millet');
ans('725','Jean-Baptiste Camille Corot');
ans('734','Judith Leyster');
ans('695','John Singleton Copley');
ans('746','Diego Velazquez');
ans('768','Francisco de Zurbaran');
ans('769','Agnolo Bronzino');
ans('790','Hyacinthe Rigaud');
ans('681','Benjamin West');
ans('669','Rembrandt');
ans('647','Caspar David Friedrich');
ans('683','Francisco Goya');
ans('696','August Macke');
ans('713','Edgar Degas');
ans('785','Frederic Bazille');
ans('775','Asher Brown Durand');
ans('758','Ando Hiroshige');
ans('754','James McNeill Whistler');
ans('757','Artemisia Gentileschi');
ans('672','Raphael');
ans('794','Parmigianino');
ans('791','Vincent van Gogh');
ans('753','Jean-Baptiste-Simeon Chardin');
ans('762','Peter Paul Rubens');
ans('760','Ando Hiroshige');
ans('747','Domenico Ghirlandaio');
ans('720','Thomas Gainsborough');
ans('770','Jean-Baptiste Camille Corot');
ans('782','Alfred Sisley');
ans('787','Antoine Watteau');
ans('784','Gustav Klimt');
ans('783','Antoine Watteau');
ans('764','Henry Fuseli');
ans('792','Anne-Louis Trioson');
ans('630','Diego Velazquez');
ans('808','Raphael');
ans('801','William Hogarth');
ans('723','Paul Gauguin');
ans('721','Winslow Homer');
ans('742','Theodore Gericault');
ans('788','Raphael');
ans('765','Camille Pissarro');
ans('776','John Singleton Copley');
ans('732','Rembrandt');
ans('733','Titian');
ans('726','George Caleb Bingham');
ans('743','Anthony Van Dyck');
ans('786','Victor Meirelles');
ans('796','Paolo Uccello');
ans('795','William Hogarth');
ans('826','Berthe Morisot');
ans('832','Chin Nung');
ans('674','Theodore Gericault');
ans('711','Nicolas Poussin');
ans('728','Paolo Uccello');
ans('730','Caspar David Friedrich');
ans('691','Paul Gauguin');
ans('685','Caspar David Friedrich');
ans('702','Thomas Cole');
ans('739','Giovanni Cimabue');
ans('825','Armand Guillaumin');
ans('827','Guo Xi');
ans('805','Gustave Courbet');
ans('817','John Constable');
ans('741','Konrad Witz');
ans('714','Masaccio');
ans('821','Raphael');
ans('819','August Macke');
ans('823','Camille Pissarro');
ans('813','Louis Le Nain');
ans('828','Gustave Courbet');
ans('504','Georges Seurat');
ans('555','John Constable');
ans('648','Pierre-Auguste Renoir');
ans('633','Paul Gauguin');
ans('706','Berthe Morisot');
ans('744','Jean-Auguste-Dominique Ingres');
ans('740','Edgar Degas');
ans('767','Diego Velazquez');
ans('830','Jean-Baptiste Camille Corot');
ans('812','Jan Steen');
ans('811','Jean-Baptiste Greuze');
ans('803','Francisco de Zurbaran');
ans('816','Camille Pissarro');
ans('779','Antoine Watteau');
ans('772','Armand Guillaumin');
ans('766','Frederic Bazille');
ans('780','Gustave Caillebotte');
ans('748','Albrecht Durer');
ans('665','Peter Paul Rubens');
ans('778','Gustave Caillebotte');
fin();	
}
ca="";
na="";nb="";
function create(){
	na=nb;
	nb=location.href.substring(location.href.length-6).split("/")[1];
	ca=$("div #incorrect").text().split("= ")[1];
	console.log("ans('"+na+"','"+ca+"');");
if((ca !=undefined)&&($("div:contains('"+na+"')").length<1)){$('h2:contains("Recent")').append(("ans('"+na+"','"+ca+"');") +"\n");csvContent +=("ans('"+na+"','"+ca+"');") +"\n";}
}// JavaScript Document
$('h2:contains("Recent")').click(function(e) {
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);    
});


