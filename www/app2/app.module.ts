import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { UpgradeComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        UpgradeComponent
    ],
    entryComponents: [
        UpgradeComponent
    ]
})

export class AppModule {
    ngDoBootstrap(){}
}