import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor(){
        
    }

    getHelloWorld(): void {
        console.log('hello world app service');
    }
}