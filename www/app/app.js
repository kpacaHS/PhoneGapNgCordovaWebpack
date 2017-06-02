'use strict';

import angular from 'angular';
//import { downgradeComponent } from '@angular/upgrade/static';

//import { UpgradeComponent } from '../app2/app.component';

angular.module('app', [])
    .component('appComponent', {
        template: `<div> AngularJS </div>`,
        controller: function AppComponentController($scope, $element, $attrs) {
            
        }
    });/*.directive('ng2Component', 
        downgradeComponent({
            component: UpgradeComponent
        }) as angular.IDirectiveFactory
    );*/