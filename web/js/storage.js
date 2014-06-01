/*global define*/
define(['localStorage'], function (localStorage) {
    'use strict';

    var storage = {
            get: function (id, namespace) {
                return localStorage.getItem(this.getNamespacedKey(id, namespace));
            },
            set: function (id, data, namespace) {
                return localStorage.setItem(this.getNamespacedKey(id, namespace), data);
            },
            clear: function (namespace) {
                return namespace ? this.clearNamespace(namespace) : localStorage.clear();
            },
            clearNamespace: function (namespace) {
                var index,
                    keys = localStorage.getAllKeys();

                for (index = 0; index < keys.length; index += 1) {
                    this.remove(keys[index], namespace);
                }
            },
            remove: function (id, namespace) {
                return localStorage.removeItem(this.getNamespacedKey(id, namespace));
            },
            getAll: function (namespace) {
                var index,
                    values = [],
                    currentKey,
                    allKeys = localStorage.getAllKeys();

                for (index in allKeys) {
                    if (allKeys.hasOwnProperty(index)) {
                        currentKey = allKeys[index];

                        if ((namespace && currentKey.search(namespace) === 0) || !namespace) {
                            values.push(localStorage.getItem(currentKey));
                        }
                    }
                }

                return values;
            },
            getNamespacedKey: function (key, namespace) {
                return String(namespace) + ':' + key;
            }
        };

    return {
        get: function (id, namespace) {
            return storage.get(id, namespace);
        },
        getAll: function (namespace) {
            return storage.getAll(namespace);
        },
        set: function (id, data, namespace) {
            return storage.set(id, data, namespace);
        },
        clear: function (namespace) {
            return storage.clear(namespace);
        },
        remove: function (id, namespace) {
            return storage.remove(id, namespace);
        }
    };
});
