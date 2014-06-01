/*global requirejs*/
requirejs.config({
    baseUrl: '/',
    paths: {
        bootstrap: 'vendor/bootstrap/bootstrap.min',
        jquery: 'vendor/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});
