App.Actor = DS.Model.extend({
	actorName: DS.attr('string'),
	x: DS.attr('number'),
	y: DS.attr('nubmer'),
	sequenceDiagram: DS.belongsTo('SequenceDiagram')
});