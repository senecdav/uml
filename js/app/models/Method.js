App.Method = DS.Model.extend({
	methodName: DS.attr('string'),
	methodReturnType: DS.attr('string'),
	visibility: DS.attr('string'),
	isAbstract: DS.attr('boolean'),
	isVisible: DS.attr('boolean'),
	isStatic: DS.attr('boolean'),
	override: DS.attr('Method'),
	overload: DS.attr('Method'),
	entity: DS.belongsTo('Entity'),
	parameters: DS.hasMany('Parameter')

});
	
	