
function include(fileName){
	document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}
include("testmodel.js");




test("tester l'ajout d'un attribut dans une entité", function(){
//var entite0 =new entite("e1","type1",att1,met1,rel1);
    var addedAttribut;
    entite0.addAttribute(a6);
    var expectedValues=entite0.getAllAttributes();
    for(var i= 0; i < expectedValues.length; i++)
{
     if(expectedValues[i]==a6) {addedAttribut=expectedValues[i];}
} 
    ok(expectedValues.indexOf(a6) !== -1, "l'attribut a pas été ajouté" );
    equal(addedAttribut.attributeName, "ville", "le nom est correct");
    equal(addedAttribut.attributeType, "string", "le type est correct");
    equal(addedAttribut.attributeValue, "montpellier", "la valeur est correcte");
    equal(addedAttribut.isVisible, true, "la visibilité est correcte");
    equal(addedAttribut.isStatic, true, "la visibilité static est correcte");
    equal(addedAttribut.multiplicityMin, 1, "la multiplicité minimale est correcte");
    equal(addedAttribut.multiplicityMax, 1, "la multiplicité maximale est correcte");
});


test("tester la suppression d'un attribut dans une entité", function(){
//var entite0 =new entite("e1","type1",att1,met1,rel1);
    entite0.removeAttribute(a6);
    var expectedValues=entite0.getAllAttributes();
    ok(expectedValues.indexOf(a6) == -1, "l'attribut n'a pas été supprimé" );
});


test("tester l'ajout d'une methode dans une entité", function(){
//var entite0 =new entite("e1","type1",att1,met1,rel1);
    var addedMethode;
    entite0.addMethod(m6);
    var expectedValues=entite0.getAllMethodes();
    for(var i= 0; i < expectedValues.length; i++)
{
     if(expectedValues[i] == m6) {
        addedMethode = expectedValues[i];
       }
} 
    ok(expectedValues.indexOf(m6) !== -1, "la méthode a  été ajoutée" );
    equal(addedMethode.methodeName, "MyMethode", "le nom est correct");
    equal(addedMethode.MethodeType, "string", "le type est correct");
    equal(addedMethode.isAbstract, false, "la valeur de isAbstract est correcte");
    equal(addedMethode.isVisible, true, "la visibilité est correcte");
    equal(addedMethode.override, true, "la valeur de override est correcte");
    equal(addedMethode.overload, true, "la valeur de overload est correcte");
    
});

/*
test("tester l'ajout d'une méthode dans une entité", function(){
//var entite0 =new entite("e1","type1",att1,met1,rel1);
    entite0.addMethod("AddedMethode");
    var expectedValues=entite0.getAllMethodes();
    ok(expectedValues.indexOf("AddedMethode") !== -1, "la methode n'a pas été ajoutée" );
});




test("tester l'ajout d'une méthode dans une entité", function(){

    entite0.removeMethod("AddedMethode");
    var expectedValues=entite0.getAllMethodes();
    ok(expectedValues.indexOf("AddedMethode") == -1, "la methode n'a pas été supprimée" );
});
*/


test("tester l'ajout d'une entité dans une classe", function(){

//var diagramClass1 = new ClassDiagram("dia1",e);
    var addedEntity;
    diagramClass1.addEntity(entite3);
    var expectedValues=diagramClass1.getAllEntities();

   
   
    for(var i= 0; i < expectedValues.length; i++)
{
     if(expectedValues[i] == entite3) {
        addedEntity = expectedValues[i];
       }
} 
    ok(expectedValues.indexOf(entite3) !== -1, "l'entité n'a pas été ajouté" );
    equal(addedEntity.entitiesName, "e3", "le nom est correct");
    equal(addedEntity.entitiesType, "type3", "le type est correct");
});


test("tester la suppression d'une entité dans une classe", function(){

    var diagramClass1 = new ClassDiagram("dia1",e);
    diagramClass1.removeEntity(entite3);
    var expectedValues=diagramClass1.getAllEntities();
    ok(expectedValues.indexOf(entite3) == -1, "l'entité n'a pas été supprimée" );
    
});

test("tester l'ajout d'une entité dans un projet", function(){

 var addedEntity;
    project1.addEntity(entite3);
    var expectedValues=diagramClass1.getAllEntities();

   
   
    for(var i= 0; i < expectedValues.length; i++)
{
     if(expectedValues[i] == entite3) {
        addedEntity = expectedValues[i];
       }
} 
    ok(expectedValues.indexOf(entite3) !== -1, "l'entité n'a pas été ajouté" );
    equal(addedEntity.entitiesName, "e3", "le nom est correct");
    equal(addedEntity.entitiesType, "type3", "le type est correct");
    
});

test("tester l'ajout d'un diagramme dans un projet", function(){

//var diagramClass1 = new ClassDiagram("dia1",e);
var addeddiagram;
    project1.addDiagramme(diagramClass3);
    var expectedValues=project1.getAllDiagrams();

    for(var i= 0; i < expectedValues.length; i++)
{
     if(expectedValues[i] == diagramClass3) {
        addeddiagram = expectedValues[i];
       }
} 
    ok(expectedValues.indexOf(diagramClass3) !== -1, "le diagramme n'a pas été ajouté" );
    equal(addeddiagram.diagramName, "dia3", "le nom est correct"); 
});

test("tester la suppression d'une entité dans un projet", function(){

//var diagramClass1 = new ClassDiagram("dia1",e);
    project1.removeEntity(entite3);
    var expectedValues=project1.getAllEntities();
    ok(expectedValues.indexOf(entite3) == -1, "l'entité n'a pas été supprimée" );
    
});

test("tester la suppression d'un diagramme dans un projet", function(){

//var diagramClass1 = new ClassDiagram("dia1",e);
    project1.removeDiagramme(diagramClass3);
    var expectedValues=project1.getAllDiagrams();
    ok(expectedValues.indexOf(diagramClass3) == -1, "le diagramme n'a pas été supprimée" );
    
});
/*test("tester l'ajout d'une entité dans une classe", function(){
var entite1 =new entite("e1","type1",att1,met1,rel1);
var entite2 =new entite("e2","type2",att2,met2,rel2);
var entite3 = new entite("e3","type3",att2,met2,rel1);
var e =new Array(entite1,entite2);
var diagramClass1 = new ClassDiagram("dia1",e);
    diagramClass1.addEntity(entite3);
    var expectedValues=diagramClass1.getAllEntities();
    ok(expectedValues.indexOf(entite3) !== -1, "l'entité n'a pas été ajouté" );
    
});*/
// tests pour le diagramme