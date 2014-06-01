/*global requirejs*/
requirejs.config({
    baseUrl: '/',
    paths: {
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        jquery: 'vendor/jquery',
        i18n: 'js/i18n',
        storage: 'js/storage',
        templating: 'js/templating'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});
