App.Config = DS.Model.extend({
	language: DS.attr('string'),
	style: DS.attr('string'),
	currentProject: DS.belongsTo('Project'),
	//project: DS.hasMany('Project'),
	
	saveConfig: function() {
		this.get('currentProject').saveProject();
		
		this.save().then(function(){
  	
		}, function() {
 			
		});
		
	}
	

});
