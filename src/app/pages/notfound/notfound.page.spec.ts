import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NotfoundPage } from './notfound.page';

describe('NotfoundPage', () => {
  let component: NotfoundPage;
  let fixture: ComponentFixture<NotfoundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundPage ],
      imports: [IonicModule.forRoot()],
      providers: [UrlSerializer],
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
