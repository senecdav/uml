App.Config = DS.Model.extend({
	language: DS.attr('string'),
	style: DS.attr('string'),
	currentProject: DS.belongsTo('Project'),
	project: DS.hasMany('Project'),
	
	getLastProject: function(index) {
		return lastProject[index];
	},
	
	addLastProject: function(project) {
		var taille = lastProject.get('length');
		lastProject[taille]=project;
	},
	
	removeProject: function(project) {
		var index = lastProject.indexOf(entite);
		lastProject.splice(index,1);
	}
	
	

});
