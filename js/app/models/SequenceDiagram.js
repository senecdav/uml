//Ceci est une tentative d'h�ritrage.

App.SequenceDiagram = App.Diagram.extend({
	entitiesList: DS.hasMany('Entity'),
	actor: DS.hasMany('Actor')
	
});
