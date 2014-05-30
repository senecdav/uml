
App.ApplicationController = Ember.Controller.extend(
{
	needs: ['Projects','ProjectsOpen', 'EditerEntite', 'AjoutEntit'],
	
	config: function() {
		var self = this; // Lien vers la route
		return this.store.find('Config').then(
			function(configs) {
				console.log("It works \\o/");
				if (configs.length > 0) {
					return configs.objetAtContent(0);
				} else {
					var config = self.store.createRecord('Config', {currentProject: null});
					return config;
				}
			}, 
			function(reason) {
				console.log("Erreur lors de l'acces au localStorage : " + reason);
			}
		);
	},

    projects: function() {
      return this.store.find('Project'); 
    }.property('projects'),



	createProjectButtons: [Ember.Object.create({title: 'Creer Projet', clicked: 'creationProjet'})],
	saveProjectButtons: [Ember.Object.create({title: 'Sauvegarder', clicked: "sauvegardeProjet"})],
	createEntitButtons: [Ember.Object.create({title: 'Creer Entité', clicked: "creationEntite"})],
	createDDCButtons: [Ember.Object.create({title: 'Création d\'un diagramme de classe', clicked: "creationDC"})],

	entityType: App.EntityType.toArray(),
	selectedEntityType: '',

	toDelete: [],

	/*hasCurrentProject: function() {
		 return this.get('model').get('currentProject') != null;
	 }.property('hasCurrentProject'),*/


  actions: 
  {
	//@property {string} The name of the modal, required later to close the modal (see submitManual function above)
      //@property {string} The title of the modal.
      //@property {string} The template name to render within the modal body, a View class may also be specified.
      //@property {array} Array of Button meta data
      //@property {object} The controller instance that instantiate the modal.

	createModalCreateProject: function() {Bootstrap.ModalManager.open('createProjectModal', 'Creer un projet', 'create_project', this.createProjectButtons, this);},
	createModalSaveProject: function() {Bootstrap.ModalManager.open('saveProjectModal', 'Sauvegarder un projet', 'save_project', this.saveProjectButtons, this);},
	createModalCreateEntit: function() {Bootstrap.ModalManager.open('createEntitModal', 'Creer une entité', 'create_entity', this.createEntitButtons, this);},
	createModalCreateDDC: function() {Bootstrap.ModalManager.open('createDDCModal', 'Creer un diagramme de classe', 'create_diag', this.createDDCButtons, this);},


//créer un projet
    creationProjet: function() 
    {
	var nom = this.get('projectName'); //recuperation de la valeur du champ projectName
	if(!nom || !nom.trim() || nom.length > 50 )
	{
		this.set('projectName', '');
		alert("nom de projet incorrect");
   		return Bootstrap.ModalManager.close('createProjectModal');
	}

	// Create the new projet model
	var project = this.store.createRecord('Project', {
        projectName: nom,
	creationDate: new Date()
      });
	
	this.get("model").set("currentProject", project);
	
	// Clear text field
    this.set('projectName', '');

	this.get("model").save();
	var projetCourant = this.get("model").get("currentProject");
	projetCourant.save();
		
	alert("Projet créer");
    return Bootstrap.ModalManager.close('createProjectModal');
    },
    
//quitter le projet
    closeProject: function() 

    {
	if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
		}

	this.get('model').set('currentProject',null);
	this.get("model").save();
	alert("Projet quitter");
    },

//sauvegarder un projet
	sauvegardeProjet: function()
	{
		if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
      			return Bootstrap.ModalManager.close('saveProjectModal');
		}
		var modelCourant = this.get('model');
		modelCourant.saveConfig();
		var projetCourant = modelCourant.get("currentProject");
		//projetCourant.save();
		
		for (var i = 0; i < this.toDelete.get('length'); i++) {
			this.toDelete[i].saveObject(true);
			/*this.toDelete[i].get('attributesList').then(
				function(attrs) {
					for (var j = 0; j < attrs.get('length'); j++) {
						attrs.objectAtContent(j).destroyRecord();
					}
					this.toDelete.clear();
				}
			);*/
		}
		this.toDelete.clear();

		alert("Projet sauvegarder");
      		return Bootstrap.ModalManager.close('saveProjectModal');
			
	},

//crée une entité

    creationEntite: function() 
    {
	if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
			this.set('newName', '');
      			return Bootstrap.ModalManager.close('createEntitModal');
		}

	var nom = this.get('newName'); //recuperation de la valeur du champ newName
	var type = this.get('selectedEntityType'); //recuperation

	if(!nom ||!nom.trim() || nom.length > 50 )
	{
		this.set('newName', '');
		alert("nom d'entité incorrect");
   		return Bootstrap.ModalManager.close('createEntitModal');
	}

      var nom = this.get('newName'); //recuperation de la valeur du champ newName
      var type = this.get('selectedEntityType'); //recuperation

      // Create the new entité model
      var entit = this.store.createRecord('Entity', {
        entityName: nom,
	entityType: type
      });

    	//entit.save();

      // Clear text field
      	this.set('newName', '');
	this.set('selectedEntityType', '');
	this.get('model').get("currentProject").get('entitiesList').pushObject(entit);
	this.get('model').saveConfig();	
	//this.get('model').get("currentProject").save();
	alert("Entité créée");
      	return Bootstrap.ModalManager.close('createEntitModal');
    },

//creation de diagramme de classe:

 creationDC: function() 
    {

	if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
			this.set('diagramName', '');
      			return Bootstrap.ModalManager.close('createDDCModal');
		}

	var nom = this.get('diagramName');
	this.set('diagramName', '');

	if(!nom || !nom.trim()|| nom.length > 50)
	{
		alert("nom de diagramme incorrect");
   		return Bootstrap.ModalManager.close('createDDCModal');
	}

	var dc = this.store.createRecord('ClassDiagram', {
        diagramName: nom
      });
	
	dc.save();
	
	var modelCourant = this.get('model');
	var projetCourant = modelCourant.get("currentProject");

	projetCourant.get('diagrammeDeClasse').pushObject(dc);
	this.get('model').saveConfig();
	alert("Diagramme créé");
      	return Bootstrap.ModalManager.close('createDDCModal');
    },	
    
  reload: function()
  	{
  		location.reload();
  	},
//Suppression d'entité'
  removeEntityFromProject: function(entity){
  		if(entity === null) {
  			return;
  		}

		this.get('model').get('currentProject').get('entitiesList').removeObject(entity);
		this.get('model').get('currentProject').save();
		this.get('model').save();
		/*entity.deleteRecord();
		entity.save();*/

	},
  
  //Suppression de diagramme
  removeDiagramFromProject: function(diagram){
  		if(diagram === null) {
  			return;
  		}

  		this.get('model').get('currentProject').get('diagrammeDeClasse').removeObject(diagram);
		this.get('model').get('currentProject').save();
		this.get('model').save();
		diagram.deleteRecord();
		diagram.save();
  },
  
  setCurrentDiagram: function(diagram){
	  	if(diagram === null) {
	  			return;
	  		}
	  	
	  	var diag = this.get('model').get('currentProject').get('diagrammeDeClasse');
	  	
	  	for (var i = 0; i < diag.get("length"); i++) {
	  		diag.set('isCurrent', false);
	  	}
	  	
	  	diagram.set('isCurrent', true);
  	}
}
});

//////////////////////////////////////////////////controleurs de suppression de projet
App.ProjectsController = Ember.ArrayController.extend
({
	needs: ['Application'],
	itemController: 'project',
	suppProjectButtons: [Ember.Object.create({title: 'Supprimer', clicked: "supprimerProjet"})],
	projectName: '',

	actions:
	{
		createModalSuppProject: function() 
		{
		this.set('content',this.store.find('Project'));
		var self = this;
		this.store.find('Config').then(
			function(configs) 
			{
				var config = configs.get('firstObject');
				if(config.get('currentProject') != null) 
				{
					self.set('projectName', config.get('currentProject').get('projectName'));
				}
			}
		);

		Bootstrap.ModalManager.open('suppProjectModal', 'Supprimer un projet', 'delete_project', this.suppProjectButtons,this);

		},

	supprimerProjet: function()
	{
		
		var application = this.get('controllers.Application');
		var cpt = 0;
	
		for(var i=0;i<this.get('content').get('length');i++)
		{
			if (this.objectAtContent(i).isSelected)
			{
				cpt++;
				if(this.get('projectName') === this.objectAtContent(i).get('projectName'))
				{
					alert("Vous ne pouvez pas supprimer le projet ouvert");
					return Bootstrap.ModalManager.close('suppProjectModal');
				}
				var projet = this.objectAtContent(i).get('content');
				projet.deleteRecord();
				projet.saveProject(true);
			}
		}
		
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
			}
		);
		if(cpt == 0) { alert("Aucun projet selectionné");}
		else {
		alert("Projet(s) supprimé(s)");
		}
    	  	return Bootstrap.ModalManager.close('suppProjectModal');
	}

	},
});

App.ProjectController = Ember.ObjectController.extend
({	
	isSelected: false
});


///////////////////////////////////////////Controleurs d'ouverture projets
App.ProjectsOpenController = Ember.ArrayController.extend
({
	needs: ['Application'],

	itemController: 'project',
	openProjectButtons: [Ember.Object.create({title: 'Ouvrir projet', clicked: "ouvrirProjet"})],

	actions:
	{
		createModalOpenProject: function() 
		{
		this.set('content',this.store.find('Project'));
		Bootstrap.ModalManager.open('openProjectModal', 'Ouvrir un projet', 'open_project', this.openProjectButtons, this);
		},

	ouvrirProjet: function()
	{
		var cptProjets = 0;
		var positionProjet = 0;
		for(var i=0;i<this.get('content').get('length');i++)
		{
			if (this.objectAtContent(i).isSelected)
			{
				cptProjets++;
				positionProjet = i;
			}
		}	
		if(cptProjets == 1)
		{

			var project = this.objectAtContent(positionProjet).get('content');
			var application = this.get('controllers.Application');
			
			this.store.find('Config').then(
				function(configs) {
					var config = configs.get('firstObject');
					config.set("currentProject", project);
					config.save();
				}
			);
			
			alert("Projet ouvert");
			return Bootstrap.ModalManager.close('openProjectModal');
		}
		else
		{
			alert("Erreur lors de l'ouverture : plusieurs fichiers ont été choisis, ou aucun");
    	  		return Bootstrap.ModalManager.close('openProjectModal');
		}	
	}
},
});


///////////////////////////////////////////Controleur edition d'entitée

App.EditerEntiteController = Ember.ArrayController.extend
({
	itemController: 'entitedit',
	needs: ['Application'],
	editerEntiteButtons: [Ember.Object.create({title: 'Editer', clicked: "editerEntite"})],
	nameEntit: "",
	entityType: App.EntityType.toArray(),
	selectedEntityType: '',
	methods: [],
	attributs: [],
	entiteEdit: null,	

	actions:
	{
		createModalEditerEntite: function(entite) 
		{
			this.attributs.clear();
			this.methods.clear();	
			
			this.set('nameEntit', entite.get('entityName'));
			this.set('selectedEntityType', entite.get('entityType'));
			var attrs = entite.get('attributesList');
			var methode = entite.get('methodsList');
			var self = this;
			attrs.then(
				function(attrs) {
					for (var i = 0;i < attrs.get('length');i++) {
						self.get('attributs').pushObject(attrs.objectAtContent(i));
					}
				}
			);	
			
			methode.then(
				function(methode) {
					for (var i = 0;i < methode.get('length');i++) {
						self.get('methods').pushObject(methode.objectAtContent(i));
					}
				}
			);	

			this.set('entiteEdit', entite);
			
			Bootstrap.ModalManager.open('editerEntiteModal', 'Editer une entité', 'editentity', this.editerEntiteButtons,this);
		},

		addFieldAttributs: function()
		{
			var attr = this.store.createRecord('Attribute', 
				{ attributeName : "attribut"});
			this.get('attributs').pushObject(attr);
		},

		addFieldMethods: function()
		{
			//this.get('methods').pushObject({name: 'methode '});
			var meth = this.store.createRecord('Method',
				{ methodName :"methode"});
			this.get('methods').pushObject(meth);
		},

		editerEntite: function()
		{
			var application = this.get('controllers.Application');
			this.get('entiteEdit').get('attributesList').clear();
			this.get('entiteEdit').get('methodsList').clear() ;

			//nom et type ajouter à l'objet
			if(this.nameEntit && this.nameEntit.trim())
			{
				this.get('entiteEdit').set('entityName', this.nameEntit);
			}
			this.get('entiteEdit').set('entityType', this.selectedEntityType);

			//attributs
			for(var i = 0;i < this.attributs.get('length');i++)
			{
				/*var attr = this.store.createRecord('Attribute', 
				{
				attributeName: this.attributs[i].get("attributeName"),
				attributeType: this.attributs[i].get("attributeType"),
				attributeValue: this.attributs[i].get("attributeValue"),
				visibility: this.attributs[i].get("visibility"),
				//isVisible: 
				isStatic: this.attributs[i].get("isStatic"),
				multiplicityMin: this.attributs[i].get("multiplicityMin"),
				multiplicityMax: this.attributs[i].get("multiplicityMax")				
			      });*/
			      this.attributs[i].save();
				//attr.save();
				this.get('entiteEdit').get('attributesList').pushObject(this.attributs[i]);
			}							

			//methods
			for(var i = 0;i < this.methods.get('length');i++)
			{
				/*var meth = this.store.createRecord('Method', 
				{
					methodName: this.methods[i].name,
					methodReturnType: this.methods[i].returnType,
					visibility: this.methods[i].visibility
					//isAbstract: DS.attr('boolean')
					//isVisible: DS.attr('boolean')
					//isStatic: DS.attr('boolean')
					//override: DS.attr('Method'),
					//overload: DS.attr('Method'),
					//parameters: DS.hasMany('Parameter')
				});*/
				//meth.save();
				this.methods[i].save();
				this.get('entiteEdit').get('methodsList').pushObject(this.methods[i]);
			}

			this.get('entiteEdit').save();
			alert("Entitée(s) éditée(s)");
    	  		return Bootstrap.ModalManager.close('editerEntiteModal');

		},
		onCloseAttributs: function(name) 
		{
			for(var i = 0;i< this.attributs.get('length');i++)
			{
				if(this.attributs[i].get("attributeName") === name)
				{
					this.attributs.removeObject(this.attributs[i]);
				}
			
			}
		},
		onCloseMethods: function(name) 
		{
			for(var i = 0;i< this.methods.get('length');i++)
			{
				if(this.methods[i].get("methodName") === name)
				{
					this.methods.removeObject(this.methods[i]);
				}
			
			}
		}
	}
});

App.EntiteditController = Ember.ObjectController.extend
({	
	isSelected: false
});


///////////////////////////////////////////Controleurs d'ajout d entité a un diagramme de classe
App.AjoutEntitController = Ember.ArrayController.extend
({
	needs: ['Application'],

	itemController: 'ajoutentit',
	ajoutEntitButtons: [Ember.Object.create({title: 'Ajouter une entité', clicked: "ajoutEntit"})],
	diagrame: null,
	
	actions:
	{
		createModalAjoutEntit: function(diagram) 
		{
			this.diagrame = diagram;
			var self = this;			

			this.store.find('Config').then(
				function(configs) {
					var config = configs.get('firstObject');
					var currentProject = config.get("currentProject");
					var id = currentProject.get("id");				

					self.store.find('Entity', { projet: id }).then(
						function(entities){
							var entitiesList = diagram.get("entitiesList");
							
							self.set('content',entities);

							//afin de voir les entitees cochées
							/*for(var i=0;i<self.get('content').get('length');i++)
							{
								if(entitiesList.contains(self.get('content').objectAtContent(i)))
								{
									self.objectAtContent(i).isSelected = true;
								}
							}*/
						
						}
					);
				}
			);		

			Bootstrap.ModalManager.open('ajoutEntitModal', 'Ajouter une entité', 'edit_entity_ddc', this.ajoutEntitButtons, this);
		},

	ajoutEntit: function()
	{

		this.diagrame.get('entitiesList').clear();	

		for(var i=0;i<this.get('content').get('length');i++)
		{
			if (this.objectAtContent(i).isSelected && !this.diagrame.get('entitiesList').contains(this.objectAtContent(i)))
			{
				
				var entit = this.get("content").objectAtContent(i);
				this.diagrame.get('entitiesList').pushObject(entit);
			}
			else if(this.diagrame.get('entitiesList').contains(this.objectAtContent(i)))
			{	
				
				var entit = this.get("content").objectAtContent(i);
				this.diagrame.get('entitiesList').removeObject(entit)
			}
		}
		//this.diagrame.get('entitiesList').save();
		this.diagrame.save();	
		alert("Liste d'entité mise à jour");
		return Bootstrap.ModalManager.close('ajoutEntitModal');	
	}
},
});



App.AjoutentitController = Ember.ObjectController.extend
({	
	isSelected: false
});
