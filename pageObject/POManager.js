import { test, expect } from '@playwright/test';
import { Login } from './Login.js';

export class POManager{

    constructor(page){
        this.page=page;
        this.loginpage=new Login(this.page);
    }
     gotoLoginPage(){//its a getter because it getting us the properties of a class(here the obj has all property access)
        return this.loginpage;
    }
}