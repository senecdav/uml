/** 
 * Contient l'initialisation de l'application.
 **/

// Création de l'application
window.App = Ember.Application.create({LOG_TRANSITIONS: true});
App.ApplicationAdapter = DS.LSAdapter;

DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(
                record.constructor, relationship);

        if (relationshipType === 'manyToNone'
                || relationshipType === 'manyToMany'
                || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
});

// Namespaces
App.Object = Ember.Namespace.create();
App.Configuration = Ember.Namespace.create();

