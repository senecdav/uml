App.Canvas = Ember.View.extend({
	// Propriétés
	tagName: 'canvas', // Construit une balise canvas
	attributeBindings: ['width', 'height'],
	// Minimum width and height
	width: 1000,
	height: 600,
	elements: [],
	/*updateEntities: function() {
		var entities = this.get("content");
		for (var i = 0; i < entities.get("length"); i++) {
			console.log("passage");
			var drawnEntity = $("#draggable" + entities.objectAtContent(i).id);
			if (!drawnEntity) {
				//draw
			}
		}
	}.observes("content.@each"),*/
	
	drawClass: function(entity, nbEntity) {
		var type = entity.get("entityType");
		if (type === "class") {
			type = "";
		} else {
			type = "&lt;&lt;"+ type + "&gt;&gt;</br>";
		}
		var classe = entity.get("entityName");
		var attribut = '';
		var methode = '';
		var self = this;
		entity.get("attributesList").then(
			function(attributes) {
				attribut = self.drawAttributes(attributes);
				entity.get("methodsList").then(
					function(methods) {
						methode = self.drawMethods(methods);
						var form = "<div style='border-style:none;' id='draggable" + entity.id + "' class='ui-widget-content ui-draggable draggableStyle'><table border='1' style='border-color:#000;' height=100% width=100% ><tr><td id='header" + entity.id + "'>" + type + classe + "</td></tr><tr><td id='attribute"+entity.id+"' >"+attribut+"</td></tr><tr><td id='method"+entity.id+"' >"+methode+"</td></tr></table></div>";
						
						$(".draggable").append(form);
						$("#draggable" + entity.id).draggable({ 
							containment: "#canvasContainer",
							scroll: false 
						});
						
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
					}
				);
			}
		);
	},
	
	drawAttributes: function(attributes) {
		var attribut = '';
		for (var i = 0; i < attributes.get("length"); i++) {
			attribut += '<div>';
			var currentAtt = attributes.objectAtContent(i);
			var visibility = currentAtt.get("visibility");
			if (visibility == App.Visibility.PRIVATE) {
				attribut += "- ";
			} else if (visibility == App.Visibility.PROTECTED) {
				attribut += "# ";
			} else if (visibility == App.Visibility.PUBLIC) {
				attribut += "+ ";
			} else if (visibility == App.Visibility.PACKAGE) {
				attribut += "~ ";
			}
			if (currentAtt.get("isStatic")) {
				attribut += "<u>";
			}
			attribut += currentAtt.get("attributeName");
			if (currentAtt.get("isStatic")) {
				attribut += "</u>";
			}
			attribut += ":";
			attribut += currentAtt.get("attributeType");
			if (currentAtt.get("multiplicityMin") || currentAtt.get("multiplicityMax")) {
				attribut += "[";
				if (currentAtt.get("multiplicityMin")) {
					attribut += currentAtt.get("multiplicityMin");
					attribut += "..";
				}
				if (currentAtt.get("multiplicityMax")) {
					attribut += currentAtt.get("multiplicityMax");
				} else {
					attribut += "*";
				}
				attribut += "]";
			}
			attribut += "</div>";
		}
		return attribut;
	},
	
	drawMethods: function(methods){
		var methode ='';
		for (var i = 0; i < methods.get("length"); i++) {
			methode+='<div>';
			var currentMet = methods.objectAtContent(i);
			
			if (currentMet.get("isAbstract")) {
				methode += "<em>";
			}
			var visibility = currentMet.get("visibility");
			if (visibility == App.Visibility.PRIVATE) {
				methode += "- ";
			} else if (visibility == App.Visibility.PROTECTED) {
				methode += "# ";
			} else if (visibility == App.Visibility.PUBLIC) {
				methode += "+ ";
			} else if (visibility == App.Visibility.PACKAGE) {
				methode += "~ ";
			}
			if (currentMet.get("isStatic")) {
				methode += "<u>";
			}
			methode += methods.objectAtContent(i).get("methodName");
			if (currentMet.get("isStatic")) {
				methode += "</u>";
			}
			methode += "() ";
			methode += ":";
			methode += currentMet.get("methodReturnType");
			
			
			
			if (currentMet.get("isAbstract")) {
				methode += "</em>";
			}

			methode += "</div>";
			
			
			
		}
		return methode;
	},
	
	redrawHeader: function(entity) {
		//var entity = $("#draggable" + entity.id);
		var header = $("#header" + entity.id);
		header.html("&lt;&lt;"+ entity.get("entityType") + "&gt;&gt;<br/>" + entity.get("entityName"));
	},
	redrawAttributes: function(entity){
		var attributes = $("#attribute"+ entity.id);
		attributes.html(this.drawAttributes(entity.get('attributesList')));
	},
	
	redrawMethods: function(entity){
		var methods = $("#method"+entity.id);
		methods.html(this.drawMethods(entity.get('methodsList')));
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
		var relations = entity.get("relationsList");
		relations.then(
			function(relations) {
				for (var i = 0; i < relations.get("length"); i++) {
					this.drawRelation(ctx, "#draggable" + entity.get("id"), "#draggable" + relations.objectAtContent(i).get("entityTarget"));
				}
			}
		);
	},
	drawRelation: function(ctx, source, target) {
		source = $(source);
		target = $(target);
		
		//this.drawLine(this.getPosition(source, target));
		this.drawLineArrow(ctx, this.getPosition(source, target));
	},
	resize: function(width, height) {
		this.set("width", width);
		this.set("height", height);
		$("#canvasContainer").width(width + 2);
		$("#canvasContainer").height(height + 2);
	},
	didInsertElement: function(){
		var canvas = $("canvas")[0];
		var ctx = canvas.getContext('2d');
		var entities = this.get("content");

		var self = this;
		entities.then(
			function(entities) {
					if (entities.get("length") > 5) {
						self.resize((entities.get("length")-5) * 50 + 1000, (entities.get("length")-5) * 50 + 600);
					}
					/*entities.addArrayObserver(
					self, 
						{
					  	willChange: function(entities, offset, removeCount, addCount){
							console.log("1");
						},
						arrayDidChange: function(entities, offset, removeCount, addCount){
							console.log("2");
						}
					});*/
				for (var i = 0; i < entities.get("length"); i++) {
					var entity = App.CanvasElement.create({canvas: self, content: entities.objectAtContent(i)});
					self.get("elements").pushObject(entity);
					self.drawClass(entity.get("content"), i+1);
				}
				for (var i = 0; i < entities.get("length"); i++) {
					self.drawRelations(ctx, entities.objectAtContent(i));
				}
			}
		);
	},
	redrawEntities: function() {
		
	},
	updateCanvas: function(entity) {
		this.drawClass(entity);
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
		//console.log(element);
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
		 // console.log("Double click");
		}
	})
});

App.CanvasElement = Ember.Object.extend({
	content: null,
	canvas: null,
	
	updateHeader: function() {
		this.get("canvas").redrawHeader(this.get("content"));
	}.observes("content.entityName", "content.entityType"),
	
	updateAttributes: function(){
		this.get("canvas").redrawAttributes(this.get("content"));
	}.observes("content.attributesList.@each"),
	
	
	updateMethodes: function(){
		this.get("canvas").redrawMethods(this.get("content"));
	}.observes("content.methodsList.@each")
});

