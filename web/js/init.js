/*global requirejs*/
requirejs.config({
    baseUrl: '/',
    paths: {
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        jquery: 'vendor/jquery',
        i18n: 'js/i18n',
        storage: 'js/storage',
        templating: 'js/templating',
        localStorage: 'js/localStorage',
        mustache: 'vendor/mustache',
        text: 'vendor/text',
        dictionary: 'js/dictionary'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'mustache': {
            exports: 'mustache'
        }
    }
});
