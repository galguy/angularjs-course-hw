"use strict";

//library modules
//import $ from 'jquery';
import angular from 'angular';
import ngMaterial from 'angular-material';

//app modules
import {dataMdl} from './modules/DataComponents/data.cmp.mdl';


//import {MainCtrl} from './MainCtrl.ctrl';

export let hwApp = angular.module('hwApp',[
    'ngMaterial',
    dataMdl.name
]);
