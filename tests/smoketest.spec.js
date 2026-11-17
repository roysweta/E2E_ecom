import { test, expect,assert } from '@playwright/test';
import { POManager } from '../pageObject/POManager.js';
import { ROUTES} from './utils/routes.js';


test('check login with valid details', async ({ page }) => {


const pomanager = new POManager(page);
const login=pomanager.gotoLoginPage();
await login.loginURL();
await login.validLogin('john1@email.com','Password1');
await expect(page).toHaveURL(ROUTES.DASHBOARD);


});

