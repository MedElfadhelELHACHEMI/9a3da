import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Content from './content/content';
import Calltoactionbanner from './calltoactionbanner/calltoactionbanner';
import Contentleft from './contentleft/contentleft';
import Contentright from './contentright/contentright';
import Contentmiddle from './contentmiddle/contentmiddle';
import Create from './create/create';
import Nightout from './nightout/nightout';
import Index from './index/index';
import Dropzone from './Dropzone/Dropzone';
import Drinkslist from './drinkslist/drinkslist';
import Nightoutphotos from './nightoutphotos/nightoutphotos';
import Placelist from './placelist/placelist';
import Rating from './rating/rating';
import Comments from './comments/comments';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Content,
  Calltoactionbanner,
  Contentleft,
  Contentright,
  Contentmiddle,
  Create,
  Nightout,
  Index,
  Dropzone,
  Drinkslist,
  Nightoutphotos,
  Placelist,
  Rating,
  Comments

])

.name;

export default componentModule;
