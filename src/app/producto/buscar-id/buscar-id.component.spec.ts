import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIdComponent } from './buscar-id.component';

describe('BuscarIdComponent', () => {
  let component: BuscarIdComponent;
  let fixture: ComponentFixture<BuscarIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
