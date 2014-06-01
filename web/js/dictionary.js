/*global define*/
define(function () {
    'use strict';

    var dictionary = {}, // here we can later add localized messages
        manager = {
            getDictionary: function (language) {
                return dictionary[language] || {};
            }
        };
    return {
        getDictionary: function (language) {
            return manager.getDictionary(language);
        }
    };
});
