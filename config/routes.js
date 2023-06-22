/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'GET /': 'home/index',
    'POST /user/register': 'user/register',
    'GET /user/confirm': 'user/confirm',
    'POST /user/login': 'user/login',
    'POST /api/v1/pages/create': { action: 'pages/create' },
    'POST /api/v1/pages/detail': { action: 'pages/detail' },
    'POST /api/v1/user/profile': { action: 'user/profile' },
    'POST /api/v1/teams/create': { action: 'teams/create' },
    'POST /api/v1/teams/detail': { action: 'teams/detail' },
    'POST /api/v1/token/revoke': { action: 'token/revoke' },
    'POST /api/v1/dictionary/create': { action: 'dictionary/create' },
    'GET /api/v1/dictionary': { action: 'dictionary/index' },
    'POST /api/v1/dictionary/create-many': { action: 'dictionary/create-many' },
    'POST /api/v1/paths/sync': { action: 'paths/sync' },
    'POST /api/v1/paths/find': { action: 'paths/find' },
    'POST /api/v1/definitions/sync': { action: 'definitions/import' },
    'POST /api/v1/definitions/find': { action: 'definitions/find' },
    'POST /api/v1/definitions/metadata': { action: 'definitions/metadata' },
    'GET /api/v1/pages/export': { action: 'pages/export' },
    'POST /api/v1/mock': { action: 'mock/index' },
    'GET /api/v1/mock': { action: 'mock/index' },
};
