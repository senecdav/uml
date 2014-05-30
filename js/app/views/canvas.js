App.Object.Drawable = Ember.Object.extend({
	draw: function(context) {
		// Draw
	}
});

App.Object.Font = Ember.Object.extend({
	family: 'Arial',
	size: 30,
	style: 'normal',
	variant: 'normal',
	weight: 'normal',
	color: 'black',
	getFont: function() {
		return this.style +
			" " +
			this.variant +
			" " +
			this.weight + 
			" " +
			this.size + 
			"px " +
			this.family; 
	}
});

App.Configuration.DefaultFont = App.Object.Font.create({color: 'black'});

App.Object.CanvasRect = App.Object.Drawable.extend({
	// Propriétés
	x:0,
	y:0,
	width:0,
	height:0,
	lineWidth: 1,
	strokeStyle: 'black',
	fillStyle: 'white',
	fill : false,
	stroke: true,
	// Méthodes
	draw: function(context) {
		//
		var ctx = context;
		ctx.beginPath();
		ctx.rect(this.x, this.width, this.y, this.height);
		if (this.fill) {
			ctx.fillStyle = this.fillStyle;
			ctx.fill();
		}
		if (this.stroke) {
			ctx.lineWidth = this.lineWidth;
			ctx.strokeStyle = this.strokeStyle;
			ctx.stroke();
		}
	},
	isVisible: function() {
		return stroke || fill;
	},
	toString: function(){
		return JSON.stringify(this);
	}
});

App.Object.WritableCanvasRect = App.Object.CanvasRect.extend({
	// Propriétés
	font: App.Configuration.DefaultFont,
	textAlign: 'center',
	text: '',
	init: function() {
		// Si on passe null, le texte est remis a la valeur par défaut
		if (!this.text) {
			this.text = '';
		}
		this._super(this.x, this.y, this.width, this.height);
	},
	// Méthodes
	updateTextSize: function(ctx) {
		var metrics = ctx.measureText(this.text);
		if (this.maxTextWidth > metrics.width) {
			splitWord(ctx, this.maxTextWidth);
		}
		this.maxWidth = undefined; // On ne recalcule plus
	},
	splitWord: function(ctx, maxWidth) {
        var posA = 0;
        var posZ = this.text.length - 1;
		while (posZ != 0) {              
			var width = ctx.measureText(this.text.substr(posA, posZ)).width;                
			if (width < maxWidth) {
				break;
			}
			posZ--;
		}
		
    },
	draw: function(context) {
		// Créer le rectangle
		this._super(context);
		//
		var ctx = context;
					console.log("here");
		// Taille du texte
		if (this.text.length != 0 && this.maxTextWidth) {
			this.updateTextSize(ctx);
		}
		// Font
		ctx.font = this.font.getFont();
		ctx.textAlign = this.textAlign;
		ctx.fillStyle = this.font.get('color');
		ctx.fillText(this.text, this.x, this.y);
	}
});

App.Object.Class = App.Object.Drawable.extend({
	entityRender: null,
	minWidth: 0,
	maxWidth: 0,
	// Méthodes
	draw: function(context) {
		this.drawEntityHeader(context);
	},
	drawEntityHeader: function(context) {
		var entity = this.entityRender.get("entity");
		if (entity) {
			var name = entity.get("entityName");
			var type = entity.get("entityType");
			context.draw(
				App.Object.WritableCanvasRect.create({
					x: this.entityRender.get("x"),
					y: this.entityRender.get("y"),
					width: this.width,
					height: this.height,
					text: '<<' + type + '>>',
					maxTextWidth: this.width
				})
			);
			context.draw(
				App.Object.WritableCanvasRect.create({
					x: this.entityRender.get("x"),
					y: this.entityRender.get("y") - 10,
					width: this.width,
					height: this.height,
					text: name,
					maxTextWidth: this.width
				})
			);
		}
	},
	drawEntityAttributes: function(context) {
		var entity = entityRender.get("entity");
		if (entity) {
			for (var attribute in entity.get("attributesList")) {
				if (attribute && attribute.get("isVisible")) {
					context.draw(
						App.Object.WritableCanvasRect.create({
							x: entityRender.get("x"),
							y: entityRender.get("y") - 10,
							width: this.width,
							height: this.height,
							text: name,
							maxTextWidth: this.width
						})
					);
				}
			}
		}
	}, 
	drawEntityOperations: function(context) {
		
	}
});

App.Object.CanvasContext = Ember.Object.extend({
	context: null,
	draw: function(drawableObject) {
		if (this.context && (drawableObject instanceof App.Object.Drawable)) {
			drawableObject.draw(this.context);
		}
	}
});

App.Canvas = Ember.View.extend({
	// Propriétés
	tagName: 'canvas', // Construit une balise canvas
	attributeBindings: ['width', 'height'],
	// Minimum width and height
	width: 800,
	height: 600,
	// Méthodes (Propriétés)
	context: function(key,value){
		var element = this.get('element');
		if (element == undefined) {
			console.log("Erreur, impossible de trouver le canevas");
			return null;
		}
		var context = element.getContext('2d');
		return App.Object.CanvasContext.create({context: context});
	}.property(),
	// Méthodes
	createDiagram: function() {
		// Create here
	},
	draw: function() {
		/*var ctx = this.get('context');
		// Draws here
		
		ctx.beginPath();
		ctx.rect(188, 50, 200, 100);
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'black';
		ctx.stroke();*/
		
		var rect = App.Object.CanvasRect.create({
			x: 188,
			y: 200,
			width: 50,
			height: 100,
			lineWidth: 2,
			stroke: true
		});		
		
		rect.draw(this.get('context').get('context'));
		
		/*var entity = Ember.Object.create({
			entityName: "test",
			entityType: "type"
		});
		var render = Ember.Object.create({
			entity: entity
		});
		var classe = App.Object.Class.create({
			x: 100,
			y: 100,
			width: 100,
			height: 100,
			entityRender: render	
		});
		classe.draw(this.get('context'));*/
	},
	// Evenements
	didInsertElement: function(){
		this.createDiagram();
		this.draw();
	},

	eventManager: Ember.Object.create({
		  /*
		   * Code evenement (ev.js)
		   */
		doubleClick: function(event, view) {
		  console.log("Double click");
		}
	})
});
