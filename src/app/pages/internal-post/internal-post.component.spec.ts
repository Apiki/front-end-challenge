import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPostComponent } from './internal-post.component';

describe('InternalPostComponent', () => {
  let component: InternalPostComponent;
  let fixture: ComponentFixture<InternalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
