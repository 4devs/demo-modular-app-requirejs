/*global define*/
define(['dictionary', 'storage'], function (dictionary, storage) {
    'use strict';

    var translator = {
            namespace: 'i18n',
            trans: function (message, params) {
                var langTranslations = dictionary.getDictionary(this.getLanguage());

                params = params || {};
                message = (langTranslations && langTranslations[message]) || message;

                return message.replace('/%([\\w-_]+)%/g', function (wholeMatch, match) {
                    return params[match] === undefined ? match : params[match];
                });
            },
            setLanguage: function (language) {
                return storage.set('language', language, this.namespace);
            },
            getLanguage: function () {
                return storage.get('language', this.namespace) || 'en';
            }
        };

    return {
        trans: function (message, params) {
            return translator.trans(message, params);
        },
        setLanguage: function (language) {
            return translator.setLanguage(language);
        },
        getLanguage: function () {
            return translator.getLanguage();
        }
    };
});
