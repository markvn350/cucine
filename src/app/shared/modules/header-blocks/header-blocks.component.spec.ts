import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBlocksComponent } from './header-blocks.component';

describe('HeaderBlocksComponent', () => {
  let component: HeaderBlocksComponent;
  let fixture: ComponentFixture<HeaderBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderBlocksComponent]
    });
    fixture = TestBed.createComponent(HeaderBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
