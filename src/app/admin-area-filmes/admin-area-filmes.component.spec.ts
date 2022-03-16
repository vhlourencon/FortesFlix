import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAreaFilmesComponent } from './admin-area-filmes.component';

describe('AdminAreaFilmesComponent', () => {
  let component: AdminAreaFilmesComponent;
  let fixture: ComponentFixture<AdminAreaFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAreaFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAreaFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
