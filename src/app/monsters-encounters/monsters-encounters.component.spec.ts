import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersEncountersComponent } from './monsters-encounters.component';

describe('MonstersEncountersComponent', () => {
  let component: MonstersEncountersComponent;
  let fixture: ComponentFixture<MonstersEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersEncountersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstersEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
