//declare var angular: angular.IAngularStatic;
//import  from 'angular';
import { NgModule, platformRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { Ng2Component } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        Ng2Component
    ],
    entryComponents: [
        Ng2Component
    ],
    bootstrap: [Ng2Component]
})

export class AppModule {
    //constructor(private pf: platformRef){}
    constructor(){}
    /*ngDoBootstrap(){
        //const upgrade = pf.injector.get(UpgradeModule) as UpgradeModule;
        //var appElement = document.getElementById('app');
        //this.upgrade.bootstrap(appElement, ['app'], {strictDi: true});
    }*/
}

//angular = ng1;

/*angular.module('app', [])
    .component('appComponent', {
        template: `<div> AngularJS </div>`,
        controller: function AppComponentController($scope, $element, $attrs) {
            
        }
    }).directive('appDirective', function(){
        return {
            template: '<div>AngularJS Directive on the loose!</div>'
        }
    });/*.directive('ng2Component', 
        downgradeComponent({
            component: Ng2Component
        }) as angular.IDirectiveFactory
    );*/


 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

 platformBrowserDynamic().bootstrapModule(AppModule);