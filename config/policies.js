/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': true,
  "user/login": 'can-login',
  "user/profile": 'jwt-auth',
  "pages/create": 'token-auth',
  "pages/detail": 'token-auth',
  "token/revoke": 'jwt-auth',
  "teams/detail": 'token-auth',
  "paths/sync": 'token-auth',
  "paths/find": 'token-auth',
  "definitions/import": 'token-auth',
  "definitions/find": 'token-auth',
  "definitions/metadata": 'token-auth',
  // "pages/export": 'token-auth',

};
