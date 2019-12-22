import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyrektywyNgIfComponent } from './dyrektywy-ng-if.component';

describe('DyrektywyNgIfComponent', () => {
  let component: DyrektywyNgIfComponent;
  let fixture: ComponentFixture<DyrektywyNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyrektywyNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyrektywyNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
