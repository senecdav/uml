// Liste des routes
App.Router.map(function() {
  this.route("diagram", { path: "/diagram" });
});


// Route par dÃ©faut
App.ApplicationRoute = Em.Route.extend({
    /*activate: function() {
        var translate = Em.I18n.translations;
        Utilities.changePageTitle(translate["app.title"]);
    },
    beforeModel: function() {
        var lang = localStorage.lang;
        var route = this;
        if (lang) {
            return new Em.RSVP.Promise(function(resolve) {
                // Fetch language file
                Em.$.getJSON('js/app/lang/locale_' + lang + ".json").then(function(data){
                    Em.I18n.translations = data; 
                    resolve();
                });
            });
        } else {

        }
    },*/
    model:  function() {
		var self = this; // Lien vers la route
		return this.store.find('Config').then(
			function(configs) {
				if (configs.get('length') > 0) {
					return configs.get('firstObject');
				} else {
					var config = self.store.createRecord('Config', {currentProject: null});
					return config;
				}
			}, 
			function(reason) {
				console.log("Erreur lors de l'acces au localStorage : " + reason);
			}
		);
   } 
});

/*
App.ProjectOpenRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', this.modelFor('Application'));
    this._super(controller, model);
  }
});*/


// Langues
App.LangController = Em.ArrayController.extend({
    init: function() {
        this.set('model', App.Configuration.Langs);
        var lang = App.Configuration.Langs.findBy('shortName', localStorage.lang);
        if (!lang) {
            lang = App.Configuration.DefaultLang;
        }
        this.set('currentLang', lang);
        lang.isDisabled = true;
        this._super();
    },
    currentLang: null,
    actions: {
        selectLang: function(lang){
            var oldLang = App.Configuration.Langs.findBy('shortName', localStorage.lang);
            if (typeof(lang) === undefined) {
                var newLang = App.Configuration.Langs.findBy('shortName', App.Configuration.DefaultLang);
                newLang.isDisabled = true;
                this.set('currentLang', App.Configuration.DefaultLang);
            } else {
                oldLang.isDisabled = false;
                var newLang = App.Configuration.Langs.findBy('shortName', lang);
                newLang.isDisabled = true;
                this.set('currentLang', newLang);
            }
            // Reload page to fetch lang file
            location.reload();
        }
    },
    selectedLang: function() {
        if (!this.currentLang) {
            this.set('currentLang', App.Configuration.DefaultLang);
            App.Configuration.DefaultLang.isDisabled = true;
        }
        return this.currentLang;
    }.property('model.selectedLang'),
    updateLang: function() {
        localStorage.lang = this.currentLang.shortName;
    }.observes('currentLang')
});

