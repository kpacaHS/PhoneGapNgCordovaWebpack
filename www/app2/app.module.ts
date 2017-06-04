//declare var angular: angular.IAngularStatic;
//import angular from 'angular';
//import { NgModule, platformRef} from '@angular/core';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { Ng2Component } from './app.component';
import { AppService } from './app.service';

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
    //bootstrap: [Ng2Component],
    //providers: [AppService]
})

export class AppModule {
    constructor(private upgrade: UpgradeModule){}
    //constructor(private pf: platformRef){}
    //constructor(){}
    ngDoBootstrap(){
        var appElement = document.getElementById('app');
        this.upgrade.bootstrap(appElement, ['app']);
    }
}

//angular = ng1;

angular.module('app', [])
    .component('appComponent', {
        template: `<div> AngularJS </div>`,
        controller: function AppComponentController($scope, $element, $attrs) {
            
        }
    }).directive('appDirective', function(){
        return {
            template: '<div>AngularJS Directive on the loose!</div>'
        }
    });/*.directive('testComponent', 
        downgradeComponent({
            component: Ng2Component
        }) as angular.IDirectiveFactory
    );*/


 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

 /*platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
     const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
     var appElement = document.getElementById('app');
     upgrade.bootstrap(appElement, ['app']);
 });*/
 platformBrowserDynamic().bootstrapModule(AppModule);