import { browser, element, by } from 'protractor';

describe('Login Page', () => {
    beforeEach(() => {
        browser.get('/');
    });
    it('La pagina Login se mostrara por defecto', () => {
        expect(element(by.css('.ion-padding-vertical')).getText()).toContain('login');
    });
    it('El botón del de recuperar contraseña funciona', () => {
        expect(element(by.buttonText('Ingresar')).click());
    });
});
