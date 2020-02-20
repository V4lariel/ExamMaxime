import { browser, by, element } from 'protractor';

export class ComputerPage {
  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
    let model = element.all(by.id('model'));
    let marque = element.all(by.id('input-radio-Asus'));
    let type = element.all(by.name('type'));
    let category = element.all(by.id('input-radio-Gaming'));
    let pxAchat = element.all(by.id('pxAchat'));
    let pxVente = element.all(by.id('pxVente'));
    let dateEntree = element.all(by.id('dateEntree'));
    model.sendKeys('FX550J');
    marque.click();
    type.sendKeys('Portable');
    category.click();
    pxAchat.sendKeys(1500)
    pxVente.sendKeys(1999.99)
    dateEntree.sendKeys("20.02.2020")
  }

}
