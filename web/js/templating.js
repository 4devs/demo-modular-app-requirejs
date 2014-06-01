/*global define*/
define(['mustache'], function (mustache) {
    'use strict';

    return {
        render: function (template, params) {
            return mustache.render(template, params);
        }
    };
});
