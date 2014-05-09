App.Canvas = Ember.View.extend({
	// Propriétés
	tagName: 'canvas', // Construit une balise canvas
	attributeBindings: ['width', 'height'],
	// Minimum width and height
	width: 1000,
	height: 600,
	drawClass: function(entity) {
		var type = entity.entityType;
		var classe = entity.entityName;
		var attribut = '';
		var methode = '';
		var form = "<div style='border-style:none;' id='draggable" + entity.id + "' class='ui-widget-content ui-draggable draggableStyle'><table border='1' style='border-color:#000;' height=100% width=100% ><tr><td>"+classe+"</td></tr><tr><td>"+attribut+"</td></tr><tr><td>"+methode+"</td></tr></table></div>";
		$(".draggable").append(form);
		$("#draggable" + entity.id).draggable({ 
			containment: ".canvasContainer",
			scroll: false 
		});
		$( "#draggable" + entity.id).css({
			top: entity.entityRender.y,
			left: entity.entityRender.x
		});
		var self = this;
		$("#draggable" + entity.id).draggable({
			drag: function(event, ui) {
				self.redrawAllRelations();
			},
			start: function() {
				self.handleStartDrag(this);
			},
			stop: function() {
				self.handleStopDrag(this);
			}
		});
	},
	redrawAllRelations: function() {
		var canvas = $("canvas")[0];
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var w = canvas.width;
		canvas.width = 1;
		canvas.width = w;
		
		var entities = this.get("content");
		for (var i = 0; i < entities.length; i++) {
			this.drawRelations(ctx, entities[i]);
		}
	},
	drawRelations: function(ctx, entity) {		
		var relations = entity.relationsList;
		for (var i = 0; i < relations.length; i++) {
			this.drawRelation(ctx, "#draggable" + entity.id, "#draggable" + relations[i].entityTarget);
		}
	},
	drawRelation: function(ctx, source, target) {
		source = $(source);
		target = $(target);
		
		//this.drawLine(this.getPosition(source, target));
		this.drawLineArrow(ctx, this.getPosition(source, target));
	},
	didInsertElement: function(){
		var canvas = $("canvas")[0];
		var ctx = canvas.getContext('2d');
		var entities = this.get("content");
		console.log(entities.get("length"));
		for (var i = 0; i < entities.length; i++) {
			this.drawClass(entities[i]);
		}
		for (var i = 0; i < entities.length; i++) {
			this.drawRelations(ctx, entities[i]);
		}
	},
	getPosition: function(sourceElement, targetElement) {
		var sourceX = sourceElement.offset().left + sourceElement.width() / 2;
		var sourceY = sourceElement.offset().top + sourceElement.height() / 2;

		var targetX = targetElement.offset().left + sourceElement.width() / 2;
		var targetY = targetElement.offset().top + sourceElement.height() / 2;
		
		return {x1: sourceX, y1: sourceY, x2: targetX, y2: targetY};
	},
	drawLine: function(pos) {		

		var canvas = $('canvas');

		//you need to draw relative to the canvas not the page
		var canvasOffsetX = canvas.offset().left;
		var canvasOffsetY = canvas.offset().top;

		var context = canvas[0].getContext('2d');

		//draw line
		context.beginPath();
		context.moveTo(pos.x1 - canvasOffsetX, pos.y1 - canvasOffsetY);
		context.lineTo(pos.x2 - canvasOffsetX, pos.y2 - canvasOffsetY);
		context.closePath();
		//ink line
		context.lineWidth = 2;
		context.strokeStyle = "#000"; //black
		context.stroke();
	},
	drawFilledPolygon: function(ctx, shape) {
		ctx.beginPath();
		ctx.moveTo(shape[0][0],shape[0][1]);

		for(p in shape) {
			if (p > 0) ctx.lineTo(shape[p][0],shape[p][1]);
		}

		ctx.lineTo(shape[0][0],shape[0][1]);
		ctx.fill();
	},
	drawLineArrow: function(ctx, pos) {
		var canvas = $('canvas');

		//you need to draw relative to the canvas not the page
		var canvasOffsetX = canvas.offset().left;
		var canvasOffsetY = canvas.offset().top;
		
		var x1 = pos.x1 - canvasOffsetX;
		var y1 = pos.y1 - canvasOffsetY;
		var x2 = pos.x2 - canvasOffsetX;
		var y2 = pos.y2 - canvasOffsetY;
		var arrow = [
			[ 2, 0 ],
			[ -10, -4 ],
			[ -10, 4]
		];
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		var ang = Math.atan2(y2 - y1, x2 - x1);
		this.drawFilledPolygon(ctx, this.translateShape(this.rotateShape(arrow, ang), x2, y2));
	},
	translateShape: function(shape,x,y) {
		var rv = [];
		for(var p = 0; p < shape.length; p++) {
			rv.push([ shape[p][0] + x, shape[p][1] + y ]);
		}
		return rv;
	},
	rotateShape: function(shape, ang) {
		var rv = [];
		for(var p = 0; p < shape.length; p++) {
			rv.push(this.rotatePoint(ang, shape[p][0], shape[p][1]));
		}
		return rv;
	},
	rotatePoint: function(ang, x, y) {
		return [
			(x * Math.cos(ang)) - (y * Math.sin(ang)),
			(x * Math.sin(ang)) + (y * Math.cos(ang))
		];
	},
	coordinates: function(element) {
		element = $(element);
		console.log(element);
		var top = element.position().top;
		var left = element.position().left;
		return {x: left ,y: top};
		//console.log('X: ' + left + ' ' + 'Y: ' + top);
	},
	handleStartDrag: function(draggable) {
		$(draggable).css('z-index', 1000);
		$(draggable).css('border', 'solid 1px blue');
		//console.log(draggable);
		//entity.entityRender.x = this.coordinates(draggable);
	},
	handleStopDrag: function(draggable) {
		$(draggable).css('z-index', 0);
		$(draggable).css('border-style', 'none');
		//entity.entityRender.x = this.coordinates(draggable);
	},
	eventManager: Ember.Object.create({
		doubleClick: function(event, view) {
		  console.log("Double click");
		}
	})
});

