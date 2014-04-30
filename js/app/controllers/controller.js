
App.ApplicationController = Ember.Controller.extend(
{
	needs: ['Projects','ProjectsOpen', 'EditerEntite'],
	
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
	createDDCButtons: [Ember.Object.create({title: 'Création d un diagramme de classe', clicked: "creationDC"})],

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
	if(!nom.trim() || nom == "" || nom == " " || nom == "	")
	{
		this.set('projectName', '');
		alert("nom de projet incorrect");
   		return Bootstrap.ModalManager.close('createProjectModal');
	}

	// Create the new projet model
	var project = this.store.createRecord('Project', {
        projectName: nom
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
    


//sauvegarder un projet
	sauvegardeProjet: function()
	{
		if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
      			return Bootstrap.ModalManager.close('saveProjectModal');
		}
		var modelCourant = this.get('model');
		modelCourant.save();
		var projetCourant = modelCourant.get("currentProject");
		projetCourant.save();

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
     			this.set('newType', '');
      			return Bootstrap.ModalManager.close('createEntitModal');
		}

	var nom = this.get('newName'); //recuperation de la valeur du champ newName
	var type = this.get('newType'); //recuperation

	if(!nom.trim() || nom == "" || nom == " " || nom == "	")
	{
		this.set('newName', '');
      		this.set('newType', '');
		alert("nom d'entité incorrect");
   		return Bootstrap.ModalManager.close('createEntitModal');
	}

      var nom = this.get('newName'); //recuperation de la valeur du champ newName
      var type = this.get('newType'); //recuperation

      // Create the new entité model
      var entit = this.store.createRecord('Entity', {
        entityName: nom,
	entityType: type
      });

    	entit.save();

      // Clear text field
      	this.set('newName', '');
      	this.set('newType', '');
	this.get('model').get("currentProject").get('entitiesList').pushObject(entit);	
	this.get('model').get("currentProject").save();
	alert("Entité créée");
      	return Bootstrap.ModalManager.close('createEntitModal');
    },

//creation de diagramme de classe:

 creationDC: function() 
    {

	if(this.get('model').get('currentProject') === null)
		{
			alert("Aucun projet n'est ouvert");
			this.set('newName', '');
      			return Bootstrap.ModalManager.close('createDDCModal');
		}

	var nom = this.get('newName');

	if(!nom.trim() || nom == "" || nom == " " || nom == "	")
	{
		this.set('newName', '');
		alert("nom de diagramme incorrect");
   		return Bootstrap.ModalManager.close('createDDCModal');
	}

	var dc = this.store.createRecord('ClassDiagram', {
        diagramName: nom
      });

	this.set('newName', '');

	var modelCourant = this.get('model');
	var projetCourant = modelCourant.get("currentProject");

	projetCourant.get('diagrammeDeClasse').pushObject(dc);
	alert("Diagramme créé");
      	return Bootstrap.ModalManager.close('createDDCModal');
    },	
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
		createModalSuppProject: function() {
		this.set('content',this.store.find('Project'));
		var self = this;
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
				self.set('projectName', config.get('currentProject').get('projectName'));
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
			this.objectAtContent(i).get('content').deleteRecord();
			this.objectAtContent(i).get('content').save();
			}
		}
		
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
			}
		);
		if(cpt == 0) alert("Aucun projet selectionné");
		else alert("Projet(s) supprimé(s)");
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


//////////////////////////////////////////////////controleurs de suppression d'entité
App.DeleteEntitController = Ember.ArrayController.extend
({
	needs: ['Application'],
	itemController: 'entit',
	suppEntitButtons: [Ember.Object.create({title: 'Supprimer', clicked: "supprimerEntit"})],
	projectName: '',
	
	actions:
	{
		createModalSuppEntit: function() {
		this.set('content',this.store.find('Entity'));
		var self = this;
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
				self.set('entitiesList', config.get('currentProject').get('entitiesList'));
			}
		);
		Bootstrap.ModalManager.open('suppEntitModal', 'Supprimer une entite', '???', this.suppEntitButtons,this);
		},

		supprimerEntit: function()
		{
		var application = this.get('controllers.Application');
		var cpt = 0;
		
		for(var i=0;i<this.get('content').get('length');i++)
		{
			if (this.objectAtContent(i).isSelected)
			{
				cpt++;
				this.get('entitiesList').remove(this.objectAtContent(i));
			}
		}
		
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
			}
		);
		if(cpt == 0) alert("Aucune entitée selectionnée");
		else alert("Entite(s) supprimée(s)");
    	  	return Bootstrap.ModalManager.close('suppEntitModal');
		}

	},
});

App.EntitController = Ember.ObjectController.extend
({	
	isSelected: false
});

//////////////////////////////////////////////////controleurs de suppression de diagrammes
App.DeleteDiagController = Ember.ArrayController.extend
({
	needs: ['Application'],
	itemController: 'diag',
	suppDiagButtons: [Ember.Object.create({title: 'Supprimer', clicked: "supprimerDiag"})],
	projectName: '',
	
	actions:
	{
		createModalSuppDiag: function() {
		this.set('content',this.store.find('Diagram'));
		var self = this;
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
				self.set('diagrammeDeClasse', config.get('currentProject').get('diagrammeDeClasse'));
			}
		);
		Bootstrap.ModalManager.open('suppDiagModal', 'Supprimer un diagramme', '???', this.suppDiagButtons,this);
		},

		supprimerDiag: function()
		{
		var application = this.get('controllers.Application');
					
		for(var i=0;i<this.get('content').get('length');i++)
		{
			if (this.objectAtContent(i).isSelected)
			{
				this.get('diagrammeDeClasse').remove(this.objectAtContent(i));
			}
		}
		
		this.store.find('Config').then(
			function(configs) {
				var config = configs.get('firstObject');
			}
		);
		alert("Diagramme(s) supprimé(s)");
    	  	return Bootstrap.ModalManager.close('suppDiagModal');
		}

	},
});

App.DiagController = Ember.ObjectController.extend
({	
	isSelected: false
});

///////////////////////////////////////////Controleur edition d'entitée

App.EditerEntiteController = Ember.ArrayController.extend
({
	itemController: 'entitedit',
	editerEntiteButtons: [Ember.Object.create({title: 'Editer', clicked: "editerEntite"})],
	actions:
	{
		createModalEditerEntite: function(entite) {
			console.log("test0");
			//console.log(entite);

			this.get('content').pushObject(entite);
			var self = this;
			/*this.store.find('Config').then(
				function(configs) {
					var config = configs.get('firstObject');
					//self.set('diagrammeDeClasse', config.get('currentProject').get('diagrammeDeClasse'));
				}
			);*/
			Bootstrap.ModalManager.open('editerEntiteModal', 'Editer une entité', 'editentity', this.editerEntiteButtons,this);
		},

		addField: function()
		{
			this.get('content').pushObject({name: 'entité '});
		
		},

		editerEntite: function()
		{
			var application = this.get('controllers.Application');
			
				/////////////////
				//recuperation///
				/////////////////
		
			alert("Entitée(s) supprimée(s)");
    	  		return Bootstrap.ModalManager.close('editerEntiteModal');
		},
		onClose: function(name) 
		{
			var entityDel = this.get('content').findBy('name', name);
			if (entityDel != null) 
			{
				this.get('content').removeObject(entityDel);
			}
		}

	}
});

App.EntiteditController = Ember.ObjectController.extend
({	
	isSelected: false
});
