import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'hero-detail',
    template: `
        <div>WTF! Angular Upgrade FTW!</div>
    `
})

export class HeroDetailComponent{
    /*constructor(private service: AppService){
        this.service.getHelloWorld();
    }*/
}