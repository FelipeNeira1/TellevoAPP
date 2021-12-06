import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompViajeComponent } from './comp-viaje.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';

describe('CompViajeComponent', () => {
  let component: CompViajeComponent;
  let fixture: ComponentFixture<CompViajeComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompViajeComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule,IonicModule.forRoot()],
      providers: [Storage,{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
    }).compileComponents();

    fixture = TestBed.createComponent(CompViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
