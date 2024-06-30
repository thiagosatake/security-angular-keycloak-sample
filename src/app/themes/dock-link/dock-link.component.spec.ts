import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockLinkComponent } from './dock-link.component';

describe('DockLinkComponent', () => {
  let component: DockLinkComponent;
  let fixture: ComponentFixture<DockLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
