import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render correct row color based on employeeStatus', () => {
    const mockEmployee = [
      {
          employeeNumber: '001',
          firstName: 'John',
          lastName: 'Doe',
          employeeStatus: 'Regular'
      },
      {
        employeeNumber: '002',
        firstName: 'Jane',
        lastName: 'Doe',
        employeeStatus: 'Contractor'
    }
    ];
    component.record = mockEmployee;

    fixture.detectChanges();

    const row1 = fixture.debugElement.query(By.css('table>tbody>tr:nth-child(1)'));
    expect(row1.classes['green-row']).toBeTruthy();

    const row2 = fixture.debugElement.query(By.css('table>tbody>tr:nth-child(2)'));
    expect(row2.classes['yellow-row']).toBeTruthy();
  });
});
