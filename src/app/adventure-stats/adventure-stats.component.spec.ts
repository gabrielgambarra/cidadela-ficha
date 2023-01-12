import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureStatsComponent } from './adventure-stats.component';

describe('AdventureStatsComponent', () => {
  let component: AdventureStatsComponent;
  let fixture: ComponentFixture<AdventureStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
