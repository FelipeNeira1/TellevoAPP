import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CompCuentaComponent } from './comp-cuenta.component';

describe('CompCuentaComponent', () => {
  let component: CompCuentaComponent;
  let fixture: ComponentFixture<CompCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCuentaComponent ],
      imports: [IonicModule.forRoot()],
      providers: [Router],
    }).compileComponents();

    fixture = TestBed.createComponent(CompCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
