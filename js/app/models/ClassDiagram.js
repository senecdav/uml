//Ceci est une tentative d'héritrage.

App.ClassDiagram = App.Diagram.extend({
	entitiesList: DS.hasMany('Entity'),

	addEntity: function(entite) {
		var taille = entitiesList.get('length');
		entitiesList[taille]=entite;
	},
	
	removeEntity: function(entite) {
		var index = entitiesList.indexOf(entite);
		entitiesList.splice(index,1);
	},
	
	getEntity: function(index) {
		return entitiesList[index];
	}
	
});
