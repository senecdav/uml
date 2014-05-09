var attr = DS.attr;

App.Entity = DS.Model.extend({
	entityName: attr('string'),
	entityType: attr('string'),
	attributesList: DS.hasMany('Attribute', {async: true}),
	methodsList: DS.hasMany('Method', {async: true}),
	relationsList: DS.hasMany('Entity', {async: true}),
	projet: DS.belongsTo('Project'),
	entityRender: DS.belongsTo('entityRender'),
	
	saveObject: function(isDeleted) {
		this.saveEntity(isDeleted);
	},
	
	saveEntity: function(isDeleted) {

		/*this.get('attributesList').then(
			function(attributes) {
				for(var i = 0; i < attributes.get('length'); i++){
					if (isDeleted) {
						attributes.objectAtContent(i).deleteRecord();
					}
					attributes.objectAtContent(i).saveAttribute();
				}
			}
		);
		
		this.get('methodsList').then(
			function(methods) {
				for(var i = 0; i < methods.get('length'); i++){
					if (isDeleted) {
						methods.objectAtContent(i).deleteRecord();
					}
					methods.objectAtContent(i).saveMethod();
				}
			}
		);
		
		this.get('relationsList').then(
			function(relations) {
				for(var i = 0; i < relations.get('length'); i++){
					if (isDeleted) {
						relations.objectAtContent(i).deleteRecord();
					}
					relations.objectAtContent(i).saveRelation();
				}
			}
		);*/
		
		var attributes = this.get('attributesList');
			for(var i = 0; i < attributes.get('length'); i++){
				if (isDeleted) {
					attributes.objectAtContent(i).deleteRecord();
				}
				attributes.objectAtContent(i).saveAttribute();
			}
			
		var methods = this.get('methodsList');
			for(var i = 0; i < methods.get('length'); i++){
				if (isDeleted) {
						methods.objectAtContent(i).deleteRecord();
				}
				methods.objectAtContent(i).saveMethod();
			}
			
		var relations = this.get('relationsList');
			for(var i = 0; i < relations.get('length'); i++){
				if (isDeleted) {
					relations.objectAtContent(i).deleteRecord();
				}
				relations.objectAtContent(i).saveRelation();
			}

		this.save().then(function(){
  	
		}, function() {
 			
		});
		
	}
	
});
