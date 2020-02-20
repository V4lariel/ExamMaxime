import {browser, by, element, logging} from 'protractor';
import {ComputerPage} from "./computer.po";
import {Computer} from "../../src/app/models/computer";

describe('Test de l\'ajout d\'un ordinateur', () => {
  let page: ComputerPage;
  let nbLineInit: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('/dashboard');
  });

  it('Vérifier le nombre de ligne dans le tableau et la navigation vers la bonne url', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
      this.nbLineInit = totalRows.length;
    });
    element.all(by.css('#btnMore')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('computer/:id');
    element.all(by.css('#btnAddComputer')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/ajout');
  });

  it('Vérifie la complétion et la validation du formulaire et le retour sur le dashboard', () => {
    browser.get('/ajout');
    page.completeForm();
    element.all(by.id('submitFormComputer')).click();
    page.sleep();
    expect(browser.driver.getCurrentUrl()).toContain('/dashboard');
  });

  it('Vérifie que notre tableau contient bien une ligne de plus', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
      this.nbLineInit += 1;
      expect(totalRows.length).toEqual(this.nbLineInit);
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
