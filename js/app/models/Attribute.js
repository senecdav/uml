App.Attribute = DS.Model.extend({
	attributeName: DS.attr('string'),
	attributeType: DS.attr('string'),
	attributeValue: DS.attr('string'),
	visibility: DS.attr('string'),
	isVisible: DS.attr('boolean'),
	isStatic: DS.attr('boolean'),
	multiplicityMin: DS.attr('number'),
	multiplicityMax: DS.attr('number'),
	entity: DS.belongsTo('Entity')
	
});
	
	