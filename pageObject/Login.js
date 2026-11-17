import { test, expect } from '@playwright/test';
import { ROUTES } from '../tests/utils/routes';
export class Login{
    constructor(page){
        this.page=page;
        this.userEmail=page.getByPlaceholder('email@example.com');
        this.password=page.getByPlaceholder("enter your passsword");
        this.submitBtn=page.getByRole('button',{name:'login'});

    }

    async validLogin(email,password){
        await this.userEmail.fill(email);
        await this.password.fill(password);
       await this.submitBtn.click();

    }

    async loginURL(){
      await  this.page.goto(ROUTES.LOGIN);
    }
}