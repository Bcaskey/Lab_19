var factories = angular.module('myApp.factories', []);
factories.factory('ContactFactory', [function() {
    var contacts = [
        {
            name: 'Mickey',
            email: 'bigm@disney.com',
            phone: '1 (800) BIG-EARS'
        },
        {
            name: 'Donald',
            email: 'beakman@disney.com',
            phone: '1 (800) QUA-CKER'
        },
        {
            name: 'gooFy',
            email: 'gauwersh@disney.com',
            phone: '1 (800) IFO-RGOT'
        },
        {
            name: 'Woody',
            email: 'thesheriff@disney.com',
            phone: '1 (800) BIG-STAR'
        }
    ];
    
    var f = {};
    f.getAllContacts = function() {
        return contacts;
    }
    
    f.addContact = function(newContact) {
        if (newContact !== "") {
            contacts.push(newContact);
            return contacts;
        }
    }
    
    f.singleContact = function(name) {
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name === name) {
                return contacts[i];
            }
        }
    } 
    
    return f;
   
}]);
