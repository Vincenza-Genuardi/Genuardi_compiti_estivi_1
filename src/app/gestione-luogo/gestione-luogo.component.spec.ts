import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneLuogoComponent } from './gestione-luogo.component';

describe('GestioneLuogoComponent', () => {
  let component: GestioneLuogoComponent;
  let fixture: ComponentFixture<GestioneLuogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneLuogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneLuogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
