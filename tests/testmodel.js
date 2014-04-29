

var attList = new Array();
var methodList = new Array();
var relList = new Array();
  var entite = function(nom,type, attList, MethodList, relList){
      this.entitiesName =nom;
      this.entitiesType =type;
      var listeAttributs=attList;
      var listeMethodes=MethodList;
      var relationList=relList;
      
      
      
      this.addAttribute=function(attribut) {
		var taille = listeAttributs.length;
		listeAttributs[taille]=attribut;
	}
	
	this.removeAttribute=function(attribut) {
		var index = listeAttributs.indexOf(attribut);
		listeAttributs.splice(index,1);
	}
	
	this.getAttribute= function(index) {
		return listeAttributs[index];
	}
	
	this.addMethod= function(methode) {
		var taille = listeMethodes.length;
		listeMethodes[taille]=methode;
	}
	
	this.removeMethod=function(methode) {
		var index = listeMethodes.indexOf(methode);
		listeMethodes.splice(index,1);
	}


	
	this.getMethod=function(index) {
		return listeMethodes[index];
	}
	this.getName = function() {
		return  entitiesName;
	}
    this.getAllAttributes =function() {
    	return listeAttributs;
    }
    this.getAllMethodes =function() {
    	return listeMethodes;
    }
}
var entList =new Array()
var ClassDiagram = function(nom,entList){
	this.diagramName=nom;
	var listeEntites=entList;
	this.addEntity = function(entite) {
		var taille = listeEntites.length;
		listeEntites[taille]=entite;
	}
	
	this.removeEntity = function(entite) {
		var index = listeEntites.indexOf(entite);
		listeEntites.splice(index,1);
	}
	
	this.getEntity = function(index) {
		return listeEntites[index];
	}
	this.getAllEntities = function (){
		return listeEntites;
	}


}

var diagramList = new Array();
var Projet = function(nom,entList,diagramList){
   this.nomProjet = nom;
   var listeEntites = entList;
   var listeDiagrammes = diagramList;
    
    this.addEntity = function(entite){

        var taille = listeEntites.length;
		listeEntites[taille]=entite;
	}
	
	this.removeEntity = function(entite) {
		var index = listeEntites.indexOf(entite);
		listeEntites.splice(index,1);
	}
	
	this.getEntity = function(index) {
		return listeEntites[index];
	}
	
	this.addDiagramme = function(diagramme) {
		var taille = listeDiagrammes.length;
		listeDiagrammes[taille]=diagramme;
	}
	
	this.removeDiagramme = function(diagramme) {
		var index = listeDiagrammes.indexOf(diagramme);
		listeDiagrammes.splice(index,1);
	}
	
	this.getDiagramme = function(index) {
		return listeDiagrammes[index];
	}

	this.getAllEntities = function(){
		return listeEntites;
	}
   this.getAllDiagrams = function() {
   	return listeDiagrammes;
   }
}

var Attribut = function(name, type, value, isvisible, isstatic, min,max){
	 this.attributeName = name;
	 this.attributeType = type;
	 this.attributeValue = value;
	 this.isVisible = isvisible;
	 this.isStatic = isstatic ;
	 this.multiplicityMin = min;
	 this.multiplicityMax = max;
}



var Method = function(name, type, isabstract, isvisible, overr, overl){
	 this.methodeName = name;
	 this.MethodeType = type;
	 this.isAbstract = isabstract;
	 this.isVisible = isvisible;
	 this.override = overr ;
	 this.overload = overl;
	
}
var vrai = new Boolean(true);
var faux = new Boolean(false);
var m1 = new Method("getNom","string",faux, vrai, vrai,vrai);
var m2 = new Method("setNom","void",faux,vrai, vrai,vrai);
var m3 = new Method("getPrenom","string",faux,vrai, vrai,vrai);
var m4 = new Method("setPrenom","void",faux,vrai, vrai,vrai);
var m5 = new Method("getNom","string",faux,vrai,vrai,vrai);
var m6 = new Method("MyMethode","string",faux,vrai,vrai,vrai);


var a1 = new Attribut("nom","string","wade",vrai,vrai,1,1);
var a2 = new Attribut("prenom","string","ndongo",vrai,vrai,1,1);
var a3 = new Attribut("adresse","string","rouen",vrai,vrai,1,1);
var a4 = new Attribut("age","int",22,vrai,vrai,1,1);
var a5 = new Attribut("fonction","string","etudiant",vrai,vrai,1,1);
var a6 = new Attribut("ville","string","montpellier",vrai,vrai,1,1);

var att1 =new Array(a1,a2,a3)
var att2 =new Array(a3,a4,a5);
var met1 =new Array(m1,m2,m3);
var met2 =new Array(m3,m4,m5);
var rel1 =new Array("rel1","rel2","rel3");
var rel2 =new Array("rel3","rel4","rel5");

//pour les test dans la classe entité
var entite0 =new entite("e0","type0",att1,met1,rel1);
 
 // pour les tests de la classe diagramme de classe
var entite1 =new entite("e1","type1",att1,met1,rel1);
var entite2 =new entite("e2","type2",att2,met2,rel2);
var entite3 = new entite("e3","type3",att2,met2,rel1);
var e =new Array(entite1,entite2);
var e1= new Array(entite0,entite3);
var e2= new Array(entite2,entite3);  
var diagramClass1 = new ClassDiagram("dia1",e);
var diagramClass2 = new ClassDiagram("dia2",e1);
var diagramClass3 = new ClassDiagram("dia3",e2);
var dList = new Array(diagramClass1,diagramClass2);

//tester les methodes du projet
var project1 = new Projet("myfirstProject",e,dList);
/*var entite1 =new entite("e1","type1",att1,met1,rel1);
var entite2 =new entite("e2","type2",att2,met2,rel2);
var e =new Array(entite1,entite2);
var diagramClass1 = new ClassDiagram("dia1",e);
var myentite = diagramClass1.getEntity(1);
alert(myentite.getName());*/
	