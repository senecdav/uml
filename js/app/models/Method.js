App.Method = DS.Model.extend({
	methodName: DS.attr('string'),
	methodReturnType: DS.attr('string'),
	visibility: DS.attr('string'),
	isAbstract: DS.attr('boolean'),
	isVisible: DS.attr('boolean'),
	isStatic: DS.attr('boolean'),
	//override: DS.attr('Method'),
	//overload: DS.attr('Method'),
	entity: DS.belongsTo('Entity'),
	parameters: DS.hasMany('Parameter', {async: true}),


	saveMethod: function() {
		
		/*if(typeof parameters != 'undefined'){
			this.get('parameters').then(
				function(params) {
					for(var i = 0; i < params.get('length'); i++){
						if (isDeleted) {
							params.objectAtContent(i).deleteRecord();
						}
						params.objectAtContent(i).saveParameter();
					}
				}
			);
		}*/
		
		var params = this.get('parameters');
			for(var i = 0; i < params.get('length'); i++){
				params.objectAtContent(i).saveAttribute();
			}
		

		
		this.save().then(function(){
  	
		}, function() {
 			
		});
		
	}
});
	
	
