App.Diagram = DS.Model.extend({
	diagramName: DS.attr('string'),
	style: DS.attr('string'),
	projet: DS.belongsTo('Project'),
	isCurrent: DS.attr('boolean'),
});
