/** 
 * Contient l'initialisation de l'application.
 **/

// Création de l'application
window.App = Ember.Application.create({LOG_TRANSITIONS: true});
App.ApplicationAdapter = DS.LSAdapter;

DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(
                record.constructor, relationship);

        if (relationshipType === 'manyToNone'
                || relationshipType === 'manyToMany'
                || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
});

// Namespaces
App.Object = Ember.Namespace.create();
App.Configuration = Ember.Namespace.create();


/**********************************************
 **********************************************
 * A FAIRE :
 * - Créer les attributs et methodes des entites de la meme maniere que 
 * pour l'entite 1 (entity1Ember). FAIT
 * - Voir le problème d'affichage des entites pour le diagramme de classe
 * (cf creation du diagramme de classe 1). Necessite la sauvegarde des entités
 * - Ajoute un nombre convenable d'entité au diagramme de classe sans
 * le faire buguer.
 * Note : Corriger l'affichage des diagrammes lorsqu'ils dépassent la 
 * taille par défaut.
 **********************************************
*/

var jeuDeTest = function(store) {
		
	// Vide le localStorage pour le test
	//localStorage.clear();
		
	/*************************************************
	******************* ATTRIBUT ***********************
	**************************************************/	
		
	var attribute1 = {
		attributeName : "Data",
		attributType : "String",
		attributeValue : "",
		visibility : "private",
		isVisible  : true,
		isStatic   : false,
		multiplicityMin : 1,
		multiplicityMax : 10

	};
	
	var attribute1Ember = store.createRecord('attribute', attribute1);
	
	var attribute2 = {
		attributeName : "Length",
		attributeValue : "",
		attributType : "Integer",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute2Ember = store.createRecord('attribute', attribute2);
	
	var attribute3 = {
		attributeName : "DATA",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   : false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute3Ember = store.createRecord('attribute', attribute3);
	
	var attribute4 = {
		attributeName : "Target",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute4Ember = store.createRecord('attribute', attribute4);
	
	var attribute5 = {
		attributeName : "publicID",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute5Ember = store.createRecord('attribute', attribute5);
	
	var attribute6 = {
		attributeName : "SystemID",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute6Ember = store.createRecord('attribute', attribute6);
	
	var attribute7 = {
		attributeName : "Lengh",
		attributeValue : "",
		attributType : "Integer",		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute7Ember = store.createRecord('attribute', attribute7);
	
	var attribute8 = {
		attributeName : "name",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute8Ember = store.createRecord('attribute', attribute8);
	
	var attribute9 = {
		attributeName : "ownerElement",
		attributeValue : "",
		attributType : "Element",		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute9Ember = store.createRecord('attribute', attribute9);
	
	var attribute10 = {
		attributeName : "Specified",
		attributeValue : "",
		attributType : "boolean",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute10Ember = store.createRecord('attribute', attribute10);
	
	var attribute11 = {
		attributeName : "value",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute11Ember = store.createRecord('attribute', attribute11);
	
	var attribute12 = {
		attributeName : "attributes",
		attributeValue : "",
		attributType : "NamedNodeMap",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute12Ember = store.createRecord('attribute', attribute12);
	
	var attribute13 = {
		attributeName : "childNode",
		attributeValue : "",
		attributType : "NodeList",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute13Ember = store.createRecord('attribute', attribute13);
	
	var attribute14 = {
		attributeName : "firstChild",
		attributeValue : "",
		attributType : "Node",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute14Ember = store.createRecord('attribute', attribute14);
	
	var attribute15 = {
		attributeName : "lastChild",
		attributeValue : "",
		attributType : "Node",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute15Ember = store.createRecord('attribute', attribute15);
	
	var attribute16 = {
		attributeName : "Implementation",
		attributeValue : "",
		attributType : "DomImplementation",		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute16Ember = store.createRecord('attribute', attribute16);
	
	var attribute17 = {
		attributeName : "LocalName",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute17Ember = store.createRecord('attribute', attribute17);
	
	var attribute18 = {
		attributeName : "namespaceURL",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute18Ember = store.createRecord('attribute', attribute18);
	
	var attribute19 = {
		attributeName : "Implementation",
		attributeValue : "",
		attributType : "DomImplementation",		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute19Ember = store.createRecord('attribute', attribute19);
	
	var attribute20 = {
		attributeName : "nextSibling",
		attributeValue : "",
		attributType : "Node",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute20Ember = store.createRecord('attribute', attribute20);
	
	var attribute21 = {
		attributeName : "Nodename",
		attributeValue : "",
		attributType : "String",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute21Ember = store.createRecord('attribute', attribute21);
	
	var attribute22 = {
		attributeName : "Nodetype",
		attributeValue : "",
		attributType : "ShortInt",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute22Ember = store.createRecord('attribute', attribute22);
	
	var attribute23 = {
		attributeName : "Nodevalue",		attributeValue : "",
		attributType : "String",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute23Ember = store.createRecord('attribute', attribute23);
	
	var attribute24 = {
		attributeName : "ownerDocument",
		attributeValue : "",
		attributType : "Document",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute24Ember = store.createRecord('attribute', attribute24);
	
	var attribute25 = {

		attributeName : "parentNode",
		attributeValue : "",
		attributType : "Node",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute25Ember = store.createRecord('attribute', attribute25);
	
	var attribute26 = {
		attributeName : "prefix",
		attributeValue : "",
		attributType : "String",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute26Ember = store.createRecord('attribute', attribute26);
	
	var attribute27 = {
		attributeName : "PreviousSibling",
		attributeValue : "",
		attributType : "Node",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute27Ember = store.createRecord('attribute', attribute27);
	
	var attribute28 = {
		attributeName : "entities",
		attributeValue : "",
		attributType : "NamedNodeMap",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	
	var attribute28Ember = store.createRecord('attribute', attribute28);
	
	var attribute29 = {
		attributeName : "internalSubset",
		attributeValue : "",
		attributType : "String",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};

	var attribute29Ember = store.createRecord('attribute', attribute29);

	var attribute30 = {
		attributeName : "name",
		attributeValue : "",
		attributType : "String",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute30Ember = store.createRecord('attribute', attribute30);
	
	var attribute31 = {
		attributeName : "notations",
		attributeValue : "",
		attributType : "NamedNodeMap",
		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute31Ember = store.createRecord('attribute', attribute31);
	
	var attribute32 = {
		attributeName : "publicID",
		attributeValue : "",
		attributType : "String",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute32Ember = store.createRecord('attribute', attribute32);
	
	var attribute33 = {
		attributeName : "systemID",
		attributeValue : "",
		attributType : "DomImplementation",		visibility : "private",
		isVisible  : true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute33Ember = store.createRecord('attribute', attribute33);
	
	var attribute34 = {
		attributeName : "doctype",
		attributeValue : "",
		attributType : "DocumentType",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute34Ember = store.createRecord('attribute', attribute34);
	
	
	var attribute35 = {
		attributeName : "documentElement",
		attributeValue : "",
		attributType : "Element",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	
	var attribute35Ember = store.createRecord('attribute', attribute35);
	
	var attribute36 = {

		attributeName : "Implementation",
		attributeValue : "",
		attributType : "DOMImplementation",
		visibility : "private",
		isVisible  :true,
		isStatic   :false,
		multiplicityMin : 1,
		multiplicityMax : 5

	};
	var attribute36Ember = store.createRecord('attribute', attribute36);

	/*************************************************
	******************* METHODE ***********************
	**************************************************/

	var methode = new Array(62);
				
	methode[1] = {
		methodName: 'appendData',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[2] = {
		methodName: 'deleteData',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[3] = {
		methodName: 'GetData',
		methodReturnType: "string",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};

	methode[4] = {

		methodName: 'GetLenght',
		methodReturnType: "Integer",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[5] = {

		methodName: 'InsertData',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[6] = {

		methodName: 'replaceData',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[7] = {

		methodName: 'Setdata',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[8] = {

		methodName: 'Setlenght',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[9] = {

		methodName: 'substringData',
		methodReturnType: "string",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[10] = {

		methodName: 'SplitText',
		methodReturnType: "Text",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[11] = {

		methodName: 'appendChild',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[12] = {

		methodName: 'cloneNode',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[13] = {

		methodName: 'hasAttributes',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[14] = {

		methodName: 'hasChildNodes',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[15] = {

		methodName: 'insertBefore',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[16] = {

		methodName: 'isSupprotted',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[17] = {

		methodName: 'normalize',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[18] = {

		methodName: 'normalize1',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[19] = {

		methodName: 'removeChild',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[20] = {

		methodName: 'replaceChild',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[21] = {

		methodName: 'getAttribute',
		methodReturnType: "string",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[22] = {

		methodName: 'getAttributeNode',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[23] = {

		methodName: 'getAttributeNodeNS',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[24] = {

		methodName: 'getAttributeNS',
		methodReturnType: "string",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};

	methode[25] = {

		methodName: 'getElementsByTagName',
		methodReturnType: "NodeList",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[26] = {

		methodName: 'getElementsByTagNameNS',
		methodReturnType: "NodeList",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[27] = {

		methodName: 'hasAttribute',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[28] = {

		methodName: 'hasAttributeNS',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[28] = {

		methodName: 'removeAttribute',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[30] = {

		methodName: 'removeAttributeNode',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[31] = {

		methodName: 'removeAttributeNS',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[32] = {

		methodName: 'setAttribute',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[33] = {

		methodName: 'setAttributeNode',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[34] = {

		methodName: 'setAttributeNodeNS',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[35] = {

		methodName: 'setAttributeNS',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[36] = {

		methodName: 'createAttribute',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[37] = {

		methodName: 'createAttributeNS',
		methodReturnType: "Attr",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[38] = {

		methodName: 'createCDATASection',
		methodReturnType: "CDATASection",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[39] = {

		methodName: 'createComment',
		methodReturnType: "Comment",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[40] = {

		methodName: 'createDocument',
		methodReturnType: "Document",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[41] = {

		methodName: 'createDocumentFragment',
		methodReturnType: "DocumentFragment",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[42] = {

		methodName: 'createDocumentType',
		methodReturnType: "DocumentType",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[43] = {

		methodName: 'createElement',
		methodReturnType: "Element",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[44] = {

		methodName: 'createElementNS',
		methodReturnType: "Element",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[45] = {

		methodName: 'createEntityReference',
		methodReturnType: "EntityReference",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[46] = {

		methodName: 'createProcessingInstruction',
		methodReturnType: "ProcessingInstuction",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[47] = {

		methodName: 'createTextNode',
		methodReturnType: "TextNode",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[48] = {

		methodName: 'getElementById',
		methodReturnType: "Element",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[49] = {

		methodName: 'getElementsByTagName',
		methodReturnType: "",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[50] = {

		methodName: 'getElementsByTagNameNS',
		methodReturnType: "NodeList",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[51] = {

		methodName: 'hasFeature',
		methodReturnType: "boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[52] = {

		methodName: 'ImportNode',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[53] = {

		methodName: 'getNamedItemNS',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[54] = {

		methodName: 'removeNamedItem',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[55] = {

		methodName: 'removeNamedItemNS',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[56] = {

		methodName: 'setNamedItemNS',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[57]= {

		methodName: 'createDocument',
		methodReturnType: "Document",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[58] = {

		methodName: 'createDocumentType',
		methodReturnType: "DocumentType",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[59] = {

		methodName: 'hasFeature',
		methodReturnType: "Boolean",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[60] = {

		methodName: 'GetLenght',
		methodReturnType: "Long",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	methode[61]= {

		methodName: 'Item',
		methodReturnType: "Node",
		visibility: "public",
		isAbstract: false,
		isVisible: true,
		isStatic: false,
	};
	
	var methode1Ember = store.createRecord('Method', methode[1]);
	var methode2Ember = store.createRecord('Method', methode[2]);
	var methode3Ember = store.createRecord('Method', methode[3]);
	var methode4Ember = store.createRecord('Method', methode[4]);
	var methode5Ember = store.createRecord('Method', methode[5]);
	var methode6Ember = store.createRecord('Method', methode[6]);
	var methode7Ember = store.createRecord('Method', methode[7]);
	var methode8Ember = store.createRecord('Method', methode[8]);
	var methode9Ember = store.createRecord('Method', methode[9]);
	var methode10Ember = store.createRecord('Method', methode[10]);
	var methode11Ember = store.createRecord('Method', methode[11]);
	var methode12Ember = store.createRecord('Method', methode[12]);
	var methode13Ember = store.createRecord('Method', methode[13]);
	var methode14Ember = store.createRecord('Method', methode[14]);
	var methode15Ember = store.createRecord('Method', methode[15]);
	var methode16Ember = store.createRecord('Method', methode[16]);
	var methode17Ember = store.createRecord('Method', methode[17]);
	var methode18Ember = store.createRecord('Method', methode[18]);
	var methode19Ember = store.createRecord('Method', methode[19]);
	var methode20Ember = store.createRecord('Method', methode[20]);
	var methode21Ember = store.createRecord('Method', methode[21]);
	var methode22Ember = store.createRecord('Method', methode[22]);
	var methode23Ember = store.createRecord('Method', methode[23]);
	var methode24Ember = store.createRecord('Method', methode[24]);
	var methode25Ember = store.createRecord('Method', methode[25]);
	var methode26Ember = store.createRecord('Method', methode[26]);
	var methode27Ember = store.createRecord('Method', methode[27]);
	var methode28Ember = store.createRecord('Method', methode[28]);
	var methode29Ember = store.createRecord('Method', methode[29]);
	var methode30Ember = store.createRecord('Method', methode[30]);
	var methode31Ember = store.createRecord('Method', methode[31]);
	var methode32Ember = store.createRecord('Method', methode[32]);
	var methode33Ember = store.createRecord('Method', methode[33]);
	var methode34Ember = store.createRecord('Method', methode[34]);
	var methode35Ember = store.createRecord('Method', methode[35]);
	var methode36Ember = store.createRecord('Method', methode[36]);
	var methode37Ember = store.createRecord('Method', methode[37]);
	var methode38Ember = store.createRecord('Method', methode[38]);
	var methode39Ember = store.createRecord('Method', methode[39]);
	var methode40Ember = store.createRecord('Method', methode[40]);
	var methode41Ember = store.createRecord('Method', methode[41]);
	var methode42Ember = store.createRecord('Method', methode[42]);
	var methode43Ember = store.createRecord('Method', methode[43]);
	var methode44Ember = store.createRecord('Method', methode[44]);
	var methode45Ember = store.createRecord('Method', methode[45]);
	var methode46Ember = store.createRecord('Method', methode[46]);
	var methode47Ember = store.createRecord('Method', methode[47]);
	var methode48Ember = store.createRecord('Method', methode[48]);
	var methode49Ember = store.createRecord('Method', methode[49]);
	var methode50Ember = store.createRecord('Method', methode[50]);
	var methode51Ember = store.createRecord('Method', methode[51]);
	var methode52Ember = store.createRecord('Method', methode[52]);
	var methode53Ember = store.createRecord('Method', methode[53]);
	var methode54Ember = store.createRecord('Method', methode[54]);
	var methode55Ember = store.createRecord('Method', methode[55]);
	var methode56Ember = store.createRecord('Method', methode[56]);
	var methode57Ember = store.createRecord('Method', methode[57]);
	var methode58Ember = store.createRecord('Method', methode[58]);
	var methode59Ember = store.createRecord('Method', methode[59]);
	var methode60Ember = store.createRecord('Method', methode[60]);
	var methode61Ember = store.createRecord('Method', methode[61]);
	
	/*************************************************
	******************* ENTITE ***********************
	**************************************************/
	
	var entity1 = {
		entityName : "CharacterData",
		entityType: "class",
		attributeList: [
			attribute1Ember,
			attribute2Ember
		],
		methodsList : [
			methode1Ember, 
			methode2Ember,
			methode3Ember,
			methode4Ember,
			methode5Ember,
			methode6Ember,
			methode7Ember,
			methode8Ember,
			methode9Ember
		],
		relationsList: [
			/*relation2,
			relation3*/
		]
	};
	
	var entity1Ember = store.createRecord('Entity', entity1);
	
	entity1Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute1Ember);
			attributes.addObject(attribute2Ember);
		}
	);
	
	entity1Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode1Ember);
			methods.addObject(methode2Ember);
			methods.addObject(methode3Ember);
			methods.addObject(methode4Ember);
			methods.addObject(methode5Ember);
			methods.addObject(methode6Ember);
			methods.addObject(methode7Ember);
			methods.addObject(methode8Ember);
			methods.addObject(methode9Ember);
		}
	);


	var entity2 = {
		entityName : "Text",
		entityType: "class",
		attributeList: [],
		methodsList : [
			methode10Ember
		],
		relationsList: [
			/*relation2,
			relation4*/
		]
	};
	
	
	var entity2Ember = store.createRecord('Entity', entity2);
	
	entity2Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode10Ember);
		}
	);
	
	var entity3 = {
		entityName : "Comment",
		entityType: "class",
		attributeList: [],
		methodsList : [],
		relationsList: [
			/*relation3*/
		]
	};
	
	var entity3Ember = store.createRecord('Entity', entity3);
	
	var entity4 = {
		entityName : "CDATASection",
		entityType: "class",
		attributeList: [],
		methodsList : [],
		relationsList: [
			/*relation4*/
		]
	};
	
	var entity4Ember = store.createRecord('Entity', entity4);
	
	var entity5 = {
		entityName : "Entity",
		entityType: "class",
		attributeList: [
			attribute3Ember,
			attribute4Ember,
			attribute5Ember
		],
		methodsList : [],
		relationsList: [
			/*relation5*/
		]
	};
	
	var entity5Ember = store.createRecord('Entity', entity5);
	
	entity5Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute3Ember);
			attributes.addObject(attribute4Ember);
			attributes.addObject(attribute5Ember);
		}
	);
	
	var entity6 = {
		entityName : "EntityReference",
		entityType: "class",
		attributeList: [],
		methodsList : [],
		relationsList: [
			/*relation6*/
		]
	};
	
	var entity6Ember = store.createRecord('Entity', entity6);
	
	var entity7 = {
		entityName : "Attr",
		entityType: "class",
		attributeList: [
			attribute6Ember,
			attribute7Ember,
			attribute8Ember,
			attribute9Ember
		],
		methodsList : [],
		relationsList: [
			/*relation8*/
		]
	};
	
	var entity7Ember = store.createRecord('Entity', entity7);
	
	entity7Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute6Ember);
			attributes.addObject(attribute7Ember);
			attributes.addObject(attribute8Ember);
			attributes.addObject(attribute9Ember);
		}
	);
	
	var entity8 = {
		entityName : "DocumentFragment",
		entityType: "class",
		attributeList: [],
		methodsList : [],
		relationsList: [
			/*relation7*/
		]
	};
	
	var entity8Ember = store.createRecord('Entity', entity8);
	
	var entity9 = {
		entityName : "ProcessingInstruciton",
		entityType: "class",
		attributeList: [
			attribute10Ember, 
			attribute11Ember
		],
		methodsList : [
		],
		relationsList: [
			/*relation9*/
		]
	};
	
	var entity9Ember = store.createRecord('Entity', entity9);
	
	entity9Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute10Ember);
			attributes.addObject(attribute11Ember);
		}
	);
	
	var entity10 = {
		entityName : "Notation",
		entityType: "class",
		attributeList: [
			attribute12Ember,
			attribute13Ember
		],
		methodsList : [],
		relationsList: [
			/*relation10*/
		]
	};
	
	var entity10Ember = store.createRecord('Entity', entity10);
	
	entity10Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute12Ember);
			attributes.addObject(attribute13Ember);
		}
	);
	
	var entity11 = {
		entityName : "NodeList",
		entityType: "class",
		attributeList: [
			attribute14Ember
		],
		methodsList : [
			methode11Ember,
			methode12Ember
		],
		relationsList: [
			/*relation11*/
		]
	};
	
	var entity11Ember = store.createRecord('Entity', entity11);
	
	entity11Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute14Ember);
		}
	);
	
	entity11Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode11Ember);
			methods.addObject(methode12Ember);
		}
	);
	
	var entity12 = {
		entityName : "DOMImpementation",
		entityType: "class",
		attributeList: [],
		methodsList : [
			methode13Ember,
			methode14Ember,
			methode15Ember
		],
		relationsList: [
			/*relation12*/
		]
	};
	
	var entity12Ember = store.createRecord('Entity', entity12);
	
	entity12Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode13Ember);
			methods.addObject(methode14Ember);
			methods.addObject(methode15Ember);
		}
	);
	
	var entity13 = {
		entityName : "NamedNodeMap",
		entityType: "class",
		attributeList: [],
		methodsList : [
			methode16Ember,
			methode17Ember,
			methode18Ember,
			methode19Ember
		],
		relationsList: []
	};
	
	var entity13Ember = store.createRecord('Entity', entity13);
	
	entity13Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode16Ember);
			methods.addObject(methode17Ember);
			methods.addObject(methode18Ember);
			methods.addObject(methode19Ember);
		}
	);
	
	var entity14 = {
		entityName : "Document",
		entityType: "class",
		attributeList: [
			attribute15Ember,
			attribute16Ember,
			attribute17Ember
		],
		methodsList : [
			methode20Ember,
			methode21Ember,
			methode22Ember,
			methode23Ember,
			methode24Ember,
			methode25Ember,
			methode26Ember,
			methode27Ember,
			methode28Ember,
			methode29Ember,
			methode30Ember,
			methode31Ember,
			methode32Ember,
			methode33Ember,
			methode34Ember,
			methode35Ember,
			methode36Ember
		],
		relationsList: [
			/*relation13,
			relation16,
			relation17*/
		]
	};
	
	var entity14Ember = store.createRecord('Entity', entity14);
	
	entity14Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute15Ember);
			attributes.addObject(attribute16Ember);
			attributes.addObject(attribute17Ember);
		}
	);
	
	entity14Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode20Ember);
			methods.addObject(methode21Ember);
			methods.addObject(methode22Ember);
			methods.addObject(methode23Ember);
			methods.addObject(methode24Ember);
			methods.addObject(methode25Ember);
			methods.addObject(methode26Ember);
			methods.addObject(methode27Ember);
			methods.addObject(methode28Ember);
			methods.addObject(methode29Ember);
			methods.addObject(methode30Ember);
			methods.addObject(methode31Ember);
			methods.addObject(methode32Ember);
			methods.addObject(methode33Ember);
			methods.addObject(methode34Ember);
			methods.addObject(methode35Ember);
			methods.addObject(methode36Ember);
		}
	);
	
	var entity15 = {
		entityName : "DocumentType",
		entityType: "class",
		attributeList: [
			attribute18Ember,
			attribute19Ember,
			attribute20Ember,
			attribute21Ember,
			attribute22Ember,
			attribute23Ember
		],
		methodsList : [],
		relationsList: [
			/*relation14*/
		]
	};
	
	var entity15Ember = store.createRecord('Entity', entity15);

	entity15Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute18Ember);
			attributes.addObject(attribute19Ember);
			attributes.addObject(attribute20Ember);
			attributes.addObject(attribute21Ember);
			attributes.addObject(attribute22Ember);
			attributes.addObject(attribute23Ember);
		}
	);
	
	var entity16 = {
		entityName : "Element",
		entityType: "class",
		attributeList: [
			attribute24Ember
		],
		methodsList : [
			methode37Ember,
			methode38Ember,
			methode39Ember,
			methode40Ember,
			methode41Ember,
			methode42Ember,
			methode43Ember,
			methode44Ember,
			methode45Ember,
			methode46Ember,
			methode47Ember,
			methode48Ember,
			methode49Ember,
			methode50Ember,
			methode51Ember
		],
		relationsList: [
			/*relation17*/
		]
	};
	
	var entity16Ember = store.createRecord('Entity', entity16);
	
	entity16Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute24Ember);
			
		}
	);
	
	entity16Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode37Ember);
			methods.addObject(methode38Ember);
			methods.addObject(methode39Ember);
			methods.addObject(methode40Ember);
			methods.addObject(methode41Ember);
			methods.addObject(methode42Ember);
			methods.addObject(methode43Ember);
			methods.addObject(methode44Ember);
			methods.addObject(methode45Ember);
			methods.addObject(methode46Ember);
			methods.addObject(methode47Ember);
			methods.addObject(methode48Ember);
			methods.addObject(methode49Ember);
			methods.addObject(methode50Ember);
			methods.addObject(methode51Ember);
		}
	);
	
	var entity17 = {

		entityName : "Node",
		entityType: "class",
		attributeList: [
			attribute25Ember,
			attribute26Ember,
			attribute27Ember,
			attribute28Ember,
			attribute29Ember,
			attribute30Ember,
			attribute31Ember,
			attribute32Ember,
			attribute33Ember,
			attribute34Ember,
			attribute35Ember,
			attribute36Ember
		],
		methodsList : [
			methode52Ember,
			methode53Ember,
			methode54Ember,
			methode55Ember,
			methode56Ember,
			methode57Ember,
			methode58Ember,
			methode59Ember,
			methode60Ember,
			methode61Ember
		],
		relationsList: [
			/*relation1,
			relation5,
			relation6,
			relation7,
			relation8,
			relation9,
			relation11,
			relation13,
			relation14,
			relation15*/
		]
	};

	var entity17Ember = store.createRecord('Entity', entity17);
	
	entity17Ember.get('attributesList').then(
		function(attributes) {
			attributes.addObject(attribute25Ember);
			attributes.addObject(attribute26Ember);
			attributes.addObject(attribute27Ember);
			attributes.addObject(attribute28Ember);
			attributes.addObject(attribute29Ember);
			attributes.addObject(attribute30Ember);	
			attributes.addObject(attribute31Ember);
			attributes.addObject(attribute32Ember);
			attributes.addObject(attribute33Ember);
			attributes.addObject(attribute34Ember);
			attributes.addObject(attribute35Ember);
			attributes.addObject(attribute36Ember);
			
			
		}
	);
	
	entity17Ember.get('methodsList').then(
		function(methods) {
			methods.addObject(methode52Ember);
			methods.addObject(methode53Ember);
			methods.addObject(methode54Ember);
			methods.addObject(methode55Ember);
			methods.addObject(methode56Ember);
			methods.addObject(methode57Ember);
			methods.addObject(methode58Ember);
			methods.addObject(methode59Ember);
			methods.addObject(methode60Ember);
			methods.addObject(methode61Ember);
		}
	);
	
	/*************************************************
	******************* RELATION ***********************
	**************************************************/
	
	var relation1 = {
		entityTarget: "Node",
		source: "CharacterData",
		name: "",
		type: 1
	};

	var relation2 = {
		entityTarget: "CharacterData",
		source: "Text",
		name: "",
		type: 1
	};

	var relation3 = {
		entityTarget: "CharacterData",
		source: "Comment",
		name: "",
		type: 1
	};
	
	var relation4 = {
		entityTarget: "Text",
		source: "CDATASection",
		name: "",
		type: 1
	};
	
	var relation5 = {
		entityTarget: "Node",
		source: "Entity",
		name: "",
		type: 1
	};
	
	var relation6 = {
		entityTarget: "Node",
		source: "EntityReference",
		name: "",
		type: 1
	};
	
	var relation7 = {
		entityTarget: "Node",
		source: "DocumentFragment",
		name: "",
		type: 1
	};
	
	var relation8 = {
		entityTarget: "Node",
		source: "Attr",
		name: "",
		type: 1
	};
	
	var relation9 = {
		entityTarget: "Node",
		source: "ProcessingInstruction",
		name: "",
		type: 1
	};
	
	var relation10 = {
		entityTarget: "Node",
		source: "Notation",
		name: "",
		type: 1
	};
	
	var relation11 = {
		entityTarget: "Node",
		source: "NodeList",
		name: "",
		type: 1
	};
	
	var relation12 = {
		entityTarget: "Document",
		source: "DOMImplementation",
		name: "",
		type: 1
	};
	
	var relation13 = {
		entityTarget: "Node",
		source: "Document",
		name: "",
		type: 1
	};
	
	var relation14 = {
		entityTarget: "Node",
		source: "Element",
		name: "",
		type: 1
	};
	
	var relation15 = {
		entityTarget: "Node",
		source: "DocumentType",
		name: "",
		type: 1
	};
	
	var relation16 ={
		entityTarget: "DocumentType",
		source: "Document",
		name: "",
		type: 1
	};
	
	var relation17 = {
		entityTarget: "Document",
		source: "Element",
		name: "",
		type: 1
	};
	
	/*************************************************
	******************* DIAGRAMME ***********************
	**************************************************/
	
	var diagramClass1 = {
		diagramName: "W3C-DOM",
		style: "none"
		/*entitiesList: [
		]*/
	}
	
	var diagramClass1Ember = store.createRecord('ClassDiagram', diagramClass1);
	
	// LA LISTE DES ENTITES DU DIAGRAMME NE S'AFFICHE PAS !!! (ajout d'une entite a un diagramme)
	diagramClass1Ember.get('entitiesList').then(
		function(entities) {
			entities.addObject(entity1Ember);
			entities.addObject(entity2Ember);
			entities.addObject(entity3Ember);
			entities.addObject(entity4Ember);
			entities.addObject(entity5Ember);
		}
	);
	
	
	/*************************************************
	******************* PROJET ***********************
	**************************************************/
	
	// projet1
	var projet1 = {
		projectName: "Premier Projet",
		style: "none",
		creationDate: 'Fri, 30 May 2014 08:07:17 GMT',
		entitiesList: []
			/*entity1Ember, 
			entity2Ember
		]*/
		//diagrammeDeClasse: [diagramClass1,diagramClass2]
	};
	
	var projet1Ember = store.createRecord('Project', projet1);
	
	projet1Ember.get('diagrammeDeClasse').then(
		function(diagrammes) {
			diagrammes.addObject(diagramClass1Ember);
		}
	);
	
	projet1Ember.get('entitiesList').then(
		function(entities) {
			entities.addObject(entity1Ember);
			entities.addObject(entity2Ember);
			entities.addObject(entity3Ember);
			entities.addObject(entity4Ember);
			entities.addObject(entity5Ember);
			entities.addObject(entity6Ember);
			entities.addObject(entity7Ember);
			entities.addObject(entity8Ember);
			entities.addObject(entity9Ember);
			entities.addObject(entity10Ember);
			entities.addObject(entity11Ember);
			entities.addObject(entity12Ember);
			entities.addObject(entity13Ember);
			entities.addObject(entity14Ember);
			entities.addObject(entity15Ember);
			entities.addObject(entity16Ember);
			entities.addObject(entity17Ember);
		}
	);
	
	
	//projet 2
	var projet2 = {
		projectName: "Modeleur UML",
		style: "none",
		creationDate: 'Fri, 2 Jun 2003 10:25:32 GMT',
		entitiesList: []
			/*entity1Ember, 
			entity2Ember
		]*/
		//diagrammeDeClasse: [diagramClass1,diagramClass2]
	};
	
	var projet2Ember = store.createRecord('Project', projet2);
	
	//projet 3
	var projet3 = {
		projectName: "Xenakis",
		style: "none",
		creationDate: 'Tue, 31 Dec 2011 15:38:36 GMT',
		entitiesList: []
			/*entity1Ember, 
			entity2Ember
		]*/
		//diagrammeDeClasse: [diagramClass1,diagramClass2]
	};
	
	var projet3Ember = store.createRecord('Project', projet3);
	
	
	//projet 4
	var projet4 = {
		projectName: "AMAP",
		style: "none",
		creationDate: 'Wed, 01 Mar 1991 02:45:47 GMT',
		entitiesList: []
			/*entity1Ember, 
			entity2Ember
		]*/
		//diagrammeDeClasse: [diagramClass1,diagramClass2]
	};
	
	var projet4Ember = store.createRecord('Project', projet4);
	
	//projet 5
	var projet5 = {
		projectName: "Tzolkin",
		style: "none",
		creationDate: 'Mon, 17 Nov 2013 21:58:04 GMT',
		entitiesList: []
			/*entity1Ember, 
			entity2Ember
		]*/
		//diagrammeDeClasse: [diagramClass1,diagramClass2]
	};
	
	var projet5Ember = store.createRecord('Project', projet5);
	/*************************************************
	******************* CONFIG ***********************
	**************************************************/
	
	var config = {
		language: "fr",
		style: "none",
		currentProject: projet1Ember
	};
	
	var configEmber = store.createRecord('Config', config);
	
	// Sauvegarde
	
	/*configEmber.saveConfig();
	projet1Ember.saveProject();
	diagramClass1Ember.saveClassDiagram();
	entity1Ember.saveEntity();
	entity2Ember.save();
	
	entity1Ember.save();*/
	
};


