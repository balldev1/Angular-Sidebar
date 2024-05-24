import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttwoComponent } from './producttwo.component';

describe('ProducttwoComponent', () => {
  let component: ProducttwoComponent;
  let fixture: ComponentFixture<ProducttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducttwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
