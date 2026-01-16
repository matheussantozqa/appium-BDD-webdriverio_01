import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given('the user is on the main product listing page', async () => {
  await $('~open menu').waitForDisplayed();
});
When(`the user clicks on a product`, async () => {
    await $('android=new UiSelector().className("android.widget.ImageView").instance(4)').click();
});
Then(`the product details screen is displayed`, async () => {
    await expect($('~Add To Cart button')).toBeDisplayed();
});
When(/^the user clicks the "Add To Cart" button$/, async () => {
  await $('~Add To Cart button').click();
});
Then(`the shopping cart icon displays an item count`, async () => {
    await expect($('android=new UiSelector().text("1").instance(0)')).toBeDisplayed();
});
When(`the user opens the shopping cart`, async () => {
    await $('~cart badge').click();
});
Then(/^the "Shopping Cart" screen is displayed$/, async () => {
    await expect($('android=new UiSelector().text("My Cart")')).toBeDisplayed();
});
When(/^the user clicks the "Remove Item" button$/, async () => {
    await $('~remove item').click();
});
Then(/^the "Go Shopping" screen is displayed$/, async () => {
    await expect($('~Go Shopping button')).toBeDisplayed();
});
When(`the user navigates back to the main screen`, async () => {
    await $('~Go Shopping button').click();
});
Then(`the user is on the home page`, async () => {
    await expect($('~open menu')).toBeDisplayed();
});





