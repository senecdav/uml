App.EntityRender = DS.Model.extend({
	x: DS.attr('number'),
	y: DS.hasMany('number'),
	style: DS.hasMany('string'),
	entity: DS.belongsTo('Entity')

});
	
