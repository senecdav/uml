App.Project = DS.Model.extend({
	projectName: DS.attr('string'),
	style: DS.attr('string'),
	creationDate: DS.attr('date'),
	entitiesList: DS.hasMany('Entity', {async: true}),
	diagrammeDeClasse: DS.hasMany('ClassDiagram', {async: true}),
	config: DS.belongsTo('Config'),
	
	saveProject: function(isDeleted) {
	
		/*if(typeof entitiesList != undefined){
			this.get('entitiesList').then(
				function(entities) {
					for(var i = 0; i < entities.get('length'); i++){
						if (isDeleted) {
							entities.objectAtContent(i).deleteRecord();
						}
						entities.objectAtContent(i).saveEntity();
					}
				}
			);
		}
		
		if(typeof diagrammeDeClasse != undefined){
			this.get('diagrammeDeClasse').then(
				function(diagrams) {
					for(var i = 0; i < diagrams.get('length'); i++){
						if (isDeleted) {
							diagrams.objectAtContent(i).deleteRecord();
						}
						diagrams.objectAtContent(i).saveClassDiagram();
					}
				}
			);
		}*/

		var diagrammes = this.get('diagrammeDeClasse');
			for(var i = 0; i < diagrammes.get('length'); i++){
				if (isDeleted) {
						diagrammes.objectAtContent(i).deleteRecord();
				}
				diagrammes.objectAtContent(i).saveClassDiagram();
			}
			
		var entities = this.get('entitiesList');
			for(var i = 0; i < entities.get('length'); i++){
				if (isDeleted) {
						entities.objectAtContent(i).deleteRecord();
				}
				entities.objectAtContent(i).saveEntity();
			}
	
		this.save().then(function(){
  	
		}, function() {
 	
		});
		
	}
	
	
});
