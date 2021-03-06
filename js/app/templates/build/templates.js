Ember.TEMPLATES["_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"footer\">\n  <div class=\"container\">\n    <p class=\"text-muted\">Infos (nb entites, projet sauvé il ya a x minutes, etc...)</p>\n  </div>\n</div>");
  
});

/*Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"head-nav\" class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right user-nav\">\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"> \n                        <span class=\"glyphicon glyphicon-user\"></span> Anonyme<b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Se connecter</a></li>\n                        <li><a href=\"#\">Quitter</a></li>\n                    </ul>\n                </li>\n                \n            </ul>		\n            <ul class=\"nav navbar-nav\">\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        Fichier <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalCreateProject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Nouveau Projet</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalOpenProject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Ouvrir Projet</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sauvegardeProjet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sauvegarder Projet</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sauvegarder Projet dans le serveur</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalSuppProject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Supprimer le Projet</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Actualiser</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Quitter</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        Edition <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalCreateEntit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Créer une entité</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalAddEntit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Ajouter une entité</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalSuppEntitInDDC", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Supprimer une entité DDC</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalSuppEntit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Supprimer une entité</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalCreateDDC", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Créer un diagramme</a></li>\n                        <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createModalSuppDiag", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Supprimer DDC</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Chercher un diagramme</a></li>\n                        <li><a href=\"#\">Chercher un fichier</a></li>\n                        <li><a href=\"#\">Copier</a></li>\n                        <li><a href=\"#\">Couper</a></li>\n                        <li><a href=\"#\">Coller</a></li>\n                        <li><a href=\"#\">Supprimer la selction</a></li>\n                    </ul>\n                </li>\n                <li class=\"dropdown\">\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\n                        Affichage <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">X1</a></li>\n                        <li><a href=\"#\">X2</a></li>\n                        <li><a href=\"#\">X3</a></li>\n                        <li><a href=\"#\">X5</a></li>\n                        <li><a href=\"#\">X6</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"#\">Outils</a></li>\n                <li><a href=\"#\">Aide</a></li>\n            </ul>\n        </div><!--/.nav-collapse animate-collapse -->\n    </div>\n</div>");
  return buffer;
  
});*/

Ember.TEMPLATES["add_entity_class"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

/*Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"cl-wrapper\" style=\"opacity: 1; margin-left: 0px;\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tree", options) : helperMissing.call(depth0, "partial", "tree", options))));
  data.buffer.push("\n    <div class=\"container-fluid\" id=\"pcont\">\n        <!-- TOP NAVBAR -->\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\n        <div class=\"cl-mcont\">		\n            <div class=\"row\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n</div> \n<!--");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("-->");
  return buffer;
  
});*/

Ember.TEMPLATES["create_diag"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"content\">\n    <form role=\"form\">\n        <div class=\"form-group\">\n            <label for=\"name\">Nom du diagramme :</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("diagramName"),
    'maxLength': (50),
    'placeholder': ("Entrez le nom du diagramme")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'maxLength': "INTEGER",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'maxLength': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            ");
  /*data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'viewName': ("diagramTypeSelect"),
    'contentBinding': ("diagramType"),
    'prompt': ("Choisissez un type de diagramme"),
    'selectionBinding': ("selectedDiagramType"),
    'class': ("form-control")
  },hashTypes:{'viewName': "STRING",'contentBinding': "STRING",'prompt': "STRING",'selectionBinding': "STRING",'class': "STRING"},hashContexts:{'viewName': depth0,'contentBinding': depth0,'prompt': depth0,'selectionBinding': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));*/
  data.buffer.push("\n        </div>\n    </form>\n</div>");
  return buffer;
  
});

/*Ember.TEMPLATES["create_entity"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"content\">\n    <form role=\"form\">\n        <div class=\"form-group\">\n            <label for=\"name\">Nom de l'entité :</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("newName"),
    'maxLength': (50),
    'placeholder': ("Entrez le nom de l'entité")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'maxLength': "INTEGER",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'maxLength': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label for=\"type\">Type :</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("newType"),
    'maxLength': (50),
    'placeholder': ("Entrez le type de l'entité")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'maxLength': "INTEGER",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'maxLength': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label for=\"attr\">Attributs :</label>\n                \n        </div>\n        <div class=\"form-group\">\n            <label for=\"meth\">Méthodes :</label>\n                \n        </div>\n    </form>\n</div>");
  return buffer;
  
});*/

Ember.TEMPLATES["create_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"content\">\n    <form role=\"form\">\n        <div class=\"form-group\">\n            <label for=\"projectName\">Nom du projet :</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("projectName"),
    'maxLength': (50),
    'placeholder': ("Entrez le nom du projet")
  },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'maxLength': "INTEGER",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'maxLength': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n    </form>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["delete_entity"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <p>\n                        Dependance1<br/>\n                        Dependance2<br/>\n                    </p>\n                    ");
  }

  data.buffer.push("<div class=\"content\">\n    <table class=\"no-border hover\">\n        <thead class=\"no-border\">\n            <tr>\n                <th style=\"width:80%;\">Nom</th>\n                <th>Supprimer</th>\n            </tr>\n        </thead>\n        <tbody class=\"no-border-y\">\n             }}\n            <tr>\n                <td>                \n                    ");
  stack1 = (helper = helpers['bs-panel'] || (depth0 && depth0['bs-panel']),options={hash:{
    'heading': ("test"),
    'collapsible': (true),
    'dismiss': (false),
    'open': (false)
  },hashTypes:{'heading': "STRING",'collapsible': "BOOLEAN",'dismiss': "BOOLEAN",'open': "BOOLEAN"},hashContexts:{'heading': depth0,'collapsible': depth0,'dismiss': depth0,'open': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-panel", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </td>\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isSelected")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                </td>\n            </tr>\n             }}\n        </tbody>\n    </table>						\n</div>");
  return buffer;
  
});

/*Ember.TEMPLATES["delete_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <tr>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "projectName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isSelected")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n            </tr>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"content\">\n    <table class=\"no-border hover\">\n        <thead class=\"no-border\">\n            <tr>\n                <th style=\"width:50%;\">Nom</th>\n                <th>Date</th>\n                <th>Supprimer</th>\n            </tr>\n        </thead>\n        <tbody class=\"no-border-y\">\n            ");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("project")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>						\n</div>\n");
  return buffer;
  
});*/

Ember.TEMPLATES["lang"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" \n        ");
  stack1 = helpers.unless.call(depth0, "isDisabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li>\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectLang", "shortName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "longName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            </li>\n        ");
  return buffer;
  }

  data.buffer.push("<li class=\"dropdown\">\n    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> \n        <span class=\"glyphicon glyphicon-globe\"></span> <!-- icon -->\n        ");
  stack1 = helpers._triageMustache.call(depth0, "selectedLang.longName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <b class=\"caret\"></b> <!-- icon -->\n    </a>\n    <ul class=\"dropdown-menu\">\n        <!-- <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectLang", "en", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">English</a></li> -->\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</li>");
  return buffer;
  
});

/*Ember.TEMPLATES["open_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <tr ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectProject", "project", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isSelected:selectrow")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "projectName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n            </tr>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"content\">\n    <table class=\"no-border hover\">\n        <thead class=\"no-border\">\n            <tr>\n                <th style=\"width:50%;\">Nom</th>\n                <th>Date</th>\n            </tr>\n        </thead>\n        <tbody class=\"no-border-y\">\n            ");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("projectList")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>						\n</div>");
  return buffer;
  
});*/

Ember.TEMPLATES["remove_diagram"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <tr>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "diagram.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  stack1 = helpers._triageMustache.call(depth0, "diagram.type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                <td>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isSelected")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n            </tr>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"content\">\n    <table class=\"no-border hover\">\n        <thead class=\"no-border\">\n            <tr>\n                <th style=\"width:50%;\">Nom</th>\n                <th>Type</th>\n                <th>Supprimer</th>\n            </tr>\n        </thead>\n        <tbody class=\"no-border-y\">\n            ");
  stack1 = helpers.each.call(depth0, "diagram", "in", "project", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tbody>\n    </table>						\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["remove_entity_class"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["save_project"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<h4 class=\"alert-heading\">Le fichier existe déjà</h4>\n<p>Voulez vous écrasez le fichier ?</p>\n<p>\n<button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sauvegarderProjet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Sauvegarder</button>\n</p>");
  return buffer;
  
});
