import { browser, by, element } from 'protractor';

export class ComputerPage {
  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
    let nom = element.all(by.id('nom'));
    let marque = element.all(by.id('inputRadio-Nike'));
    let type = element.all(by.name('type'));
    let taille = element.all(by.name('taille'));
    nom.sendKeys('test add e2e');
    marque.click();
    type.sendKeys('Sport');
    taille.sendKeys(45.5);
  }

}
