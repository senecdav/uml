App.Parameter = DS.Model.extend({
	name: DS.attr('string'),
	direction: DS.attr('string'),
	type: DS.attr('Entity'),
	method: DS.belongsTo('Method'),
	
	saveParameter: function() {

		this.save().then(function(){
  	
		}, function() {
 			
		});
		
	}

});
	
