//Ceci est une tentative d'héritrage.

App.ClassDiagram = App.Diagram.extend({
	entitiesList: DS.hasMany('Entity', {async: true}),
	
	saveObject: function(){
		this.saveClassDiagram();
	},
	
	saveClassDiagram: function() {
	
		if(typeof entitiesList != 'undefined'){
			this.get('entitiesList').then(
				function(entities) {
					for(var i = 0; i < entities.get('length'); i++){
						entities.objectAtContent(i).saveEntity();
					}
				}
			);
		}
		/*
		var entities = this.get('entitiesList');
			for(var i = 0; i < entities.get('length'); i++){
				Ember.debug(entities);
				entities.objectAtContent(i).saveAttribute();
			
			}
		*/
		this.save().then(function(){
  	
		}, function() {
 			
		});
		
	}
	
});
