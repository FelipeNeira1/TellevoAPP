import { browser, element, by } from 'protractor';

describe('Home Page', () => {
    beforeEach(() => {
    browser.get('/home');
    });
    it('El primer tab de home sera Viajes con el mensaje de bienvenida', () => {
    expect(element(by.css('.Bienvenida h1')).getText()).toContain('home/viajes');
    });
});
