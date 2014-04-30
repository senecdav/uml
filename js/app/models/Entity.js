var attr = DS.attr;

App.Entity = DS.Model.extend({
	entityName: attr('string'),
	entityType: attr('string'),
	attributesList: DS.hasMany('Attribute'),
	methodsList: DS.hasMany('Method'),
	relationsList: DS.hasMany('Entity'),
	projet: DS.belongsTo('Project'),
	entityRender: DS.belongsTo('entityRender'),
	
	addAttribute: function(attribut) {
		var taille = attributesList.get('length');
		attributesList[taille]=attribut;
	},
	
	removeAttribute: function(attribut) {
		var index = attributesList.indexOf(attribut);
		attributesList.splice(index,1);
	},
	
	getAttribute: function(index) {
		return attributesList[index];
	},
	
	addMethod: function(methode) {
		var taille = methodsList.get('length');
		methodsList[taille]=methode;
	},
	
	removeMethod: function(methode) {
		var index = methodsList.indexOf(methode);
		methodsList.splice(index,1);
	},
	
	getMethod: function(index) {
		return methodsList[index];
	},
	
	addRelation: function(methode) {
		var taille = relationsList.get('length');
		relationsList[taille]=methode;
	},
	
	removeRelation: function(methode) {
		var index = relationsList.indexOf(methode);
		relationsList.splice(index,1);
	},
	
	getRelation: function(index) {
		return relationsList[index];
	}
	
});
