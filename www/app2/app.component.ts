import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'ng2-component',
    template: `
        <h1>HELLO WORLD</h1>
        <div>WTF! Angular Upgrade FTW!</div>
    `
})

export class Ng2Component{
    constructor(private service: AppService){
        this.service.getHelloWorld();
    }
}