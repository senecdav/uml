App.AttributeType = DS.Model.extend({
	
	findAllTypes: function(projet) {
		var tableau = new Array();
		var i;
		for (i = 0;i<projet.entitiesList.length;i++){
			tableau[i] = projet.entitiesList[i].entityName;
		}
		tableau[i++]="int";
		tableau[i++]="char";
		tableau[i++]="float";
		tableau[i++]="double";
		tableau[i++]="byte";
		tableau[i++]="boolean";
		tableau[i++]="long";
		tableau[i++]="short";
		return tableau;
	},
	
});
