import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbinomFormComponent } from './dbinom-form.component';

describe('DbinomFormComponent', () => {
  let component: DbinomFormComponent;
  let fixture: ComponentFixture<DbinomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbinomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbinomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
