import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Content from './content/content';
import Calltoactionbanner from './calltoactionbanner/calltoactionbanner';
import Contentleft from './contentleft/contentleft';
import Contentright from './contentright/contentright';
import Contentmiddle from './contentmiddle/contentmiddle';
import Create from './create/create';
import Login from './login/login';
import Signup from './signup/signup';
import Nightout from './nightout/nightout';
import Index from './index/index';
import Dropzone from './Dropzone/Dropzone';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Content,
  Calltoactionbanner,
  Contentleft,
  Contentright,
  Contentmiddle,
  Create,
  Login,
  Signup,
  Nightout,
  Index,
  Dropzone
])

.name;

export default componentModule;
