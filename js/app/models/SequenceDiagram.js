//Ceci est une tentative d'héritrage.

App.SequenceDiagram = App.Diagram.extend({
	entitiesList: DS.hasMany('Entity'),
	actor: DS.hasMany('Actor')
	
});
