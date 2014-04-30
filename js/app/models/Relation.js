App.Relation = DS.Model.extend({
	entityTarget: DS.belongsTo('Entity'),
	source: DS.belongsTo('Entity'),
	name: DS.attr('string'),
	type: DS.attr('number')
	
});