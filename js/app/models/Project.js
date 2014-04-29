App.Project = DS.Model.extend({
	projectName: DS.attr('string'),
	style: DS.attr('string'),
	creationDate: DS.attr('date'),
	entitiesList: DS.hasMany('Entity'),
	diagrammeDeClasse: DS.hasMany('ClassDiagram'),
	config: DS.belongsTo('Config'),
	
	addEntity: function(entite) {
		//var taille = entitiesList.get('length');
		//entitiesList[taille]=entite;
		entitiesList.pushObject(entite);
		App.store.commit();
	},
	
	/*removeEntity: function(entite) {
		var index = entitiesList.indexOf(entite);
		entitiesList.splice(index,1);
	},
	
	removeEntity: function(index) {
		entitiesList.splice(index,1);
	},*/
	
	removeEntity: function(nom) {
	var compteur =0;
		for(compteur;compteur < entitiesList.get('length'); compteur++) {
			if(entitiesList[compteur].entityName == nom){
				entitiesList.splice(index,1);
			}
		}
	},
	
	getEntity: function(index) {
		return entitiesList[index];
	},
	
	addDiagram: function(diagramme) {
		var taille = diagramsList.get('length');
		diagramsList[taille]=diagramme;
	},
	
	removeDiagram: function(diagramme) {
		var index = diagramsList.indexOf(diagramme);
		diagramsList.splice(index,1);
	},
	
	getDiagram: function(index) {
		return diagramsList[index];
	}
	
	
	
});
