import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCompletionComponent } from './track-completion.component';

describe('TrackCompletionComponent', () => {
  let component: TrackCompletionComponent;
  let fixture: ComponentFixture<TrackCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackCompletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
