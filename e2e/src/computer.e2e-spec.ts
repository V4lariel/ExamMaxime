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
    element.all(by.css('btnMore')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/computer');
    });
    element.all(by.css('#btnAddComputer')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/add');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
