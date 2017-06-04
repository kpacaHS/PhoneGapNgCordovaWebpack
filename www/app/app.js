'use strict';

import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { Ng2Component } from '../app2/app.component';

angular.module('app', [])
    .component('appComponent', {
        template: `<div> AngularJS </div>`,
        controller: function AppComponentController($scope, $element, $attrs) {
            
        }
    }).directive('appDirective', function(){
        return {
            template: '<div>AngularJS Directive on the loose!</div>'
        }
    }).directive('ng2Component', 
        downgradeComponent({
            component: Ng2Component
        }) as angular.IDirectiveFactory
    );