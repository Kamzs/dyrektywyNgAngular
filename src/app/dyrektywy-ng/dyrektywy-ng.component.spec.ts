import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyrektywyNGComponent } from './dyrektywy-ng.component';

describe('DyrektywyNGComponent', () => {
  let component: DyrektywyNGComponent;
  let fixture: ComponentFixture<DyrektywyNGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyrektywyNGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyrektywyNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
