/*global define, localStorage*/
define(function () {
    'use strict';

    var storage = {
            getItem: function (id) {
                var item;

                try {
                    item = JSON.parse(localStorage.getItem(id));
                } catch (error) {
                    item = localStorage.getItem(id);
                }

                return item;
            },
            setItem: function (id, data) {
                return localStorage.setItem(id, typeof data === 'object' ? JSON.stringify(data) : data);
            },
            clear: function () {
                return localStorage.clear();
            },
            removeItem: function (id) {
                return localStorage.removeItem(id);
            },
            getAllKeys: function () {
                return Object.keys(localStorage);
            }
        };

    return {
        getItem: function (id) {
            return storage.getItem(id);
        },
        getAllKeys: function () {
            return storage.getAllKeys();
        },
        setItem: function (id, data) {
            return storage.setItem(id, data);
        },
        clear: function () {
            return storage.clear();
        },
        removeItem: function (id) {
            return storage.removeItem(id);
        }
    };
});
