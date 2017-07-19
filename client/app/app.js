import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngmessages from 'angular-messages';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import satellizer from 'satellizer';

import 'normalize.css';


angular.module('app', [
    uiRouter,
    ngmessages,
    Common,
    Components,
  satellizer
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(($authProvider)=>{
    "ngInject";
    $authProvider.tokenPrefix = '9a3da';
    $authProvider.facebook({
      clientId: '131685653986034',
      name: 'facebook',
      url: '/facebooook',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
    });
    $authProvider.google({
      clientId: '214462186613-ti23keei3q05npva2nbvuv35889jpi22.apps.googleusercontent.com',
      url: '/auth/google',
      redirectUri: window.location.origin,
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      responseType: "token",
    });
  })


  .component('app', AppComponent);