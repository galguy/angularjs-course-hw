//library modules
//import $ from 'jquery';
import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-ui-grid';

//services
import {userProxyFactory} from '../../services/userProxy.srv';

//directives
import {dataCmpFactory} from './data.cmp';


export let dataMdl = angular.module('dataMdl',[
    'ui.grid'
])
.factory('userProxy',userProxyFactory)
.directive('myViewer',dataCmpFactory);