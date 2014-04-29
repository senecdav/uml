App.EditEntityView = Ember.View.extend({
	content: [],
	counter: 1,
	actions: {
		addField: function(){
			this.get('content').pushObject({name: 'entité ' + this.counter++});
		}
	},
	onClose: function(name) {
		var entityDel = this.get('content').findBy('name', name);
		if (entityDel != null) {
			this.get('content').removeObject(entityDel);
		}
		console.log(this.get('content').length);
	}
});
