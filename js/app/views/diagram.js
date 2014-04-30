App.Canvas = Ember.View.extend({
	// Propriétés
	tagName: 'canvas', // Construit une balise canvas
	attributeBindings: ['width', 'height'],
	// Minimum width and height
	width: 1000,
	height: 600,
	drawClass: function(classe) {
		var classe = "test";
		var attribut = '';
		var methode = '';
		 var form = "<div id='draggable2' class='ui-widget-content draggableStyle'><table height=100% width=100% border=1><tr><td>"+classe+"</td></tr><tr><td>"+attribut+"</td></tr><tr><td>"+methode+"</td></tr></table></div>";
		 $(".draggable").append(form);
		 $("#draggable2").draggable({ containment: "#canvasContainer", scroll: false });
	},
	didInsertElement: function(){
		var classe = "test";
		var attribut = '';
		var methode = '';
		 var form = "<div id='draggable1' class='ui-widget-content draggableStyle'><table height=100% width=100% border=1><tr><td>"+classe+"</td></tr><tr><td>"+attribut+"</td></tr><tr><td>"+methode+"</td></tr></table></div>";
		 $( ".draggable" ).append(form);
		 $( "#draggable1" ).draggable({ containment: "#canvasContainer", scroll: false });
		 this.drawClass();
	},
	eventManager: Ember.Object.create({
		doubleClick: function(event, view) {
		  console.log("Double click");
		}
	})
});


App.Diagram = Ember.View.extend({
	// Propriétés
	dataTemplate: 'diagram',
	// Minimum width and height
	width: 1000,
	height: 600,
	// Méthodes
		
	// Evenements
	didInsertElement: function(){
		console.log("here");
	},

	eventManager: Ember.Object.create({
		doubleClick: function(event, view) {
		  console.log("Double click");
		}
	})
});
