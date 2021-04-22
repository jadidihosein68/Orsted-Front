import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ExcelUploadService } from './excel-upload.service';

describe('ExcelUploadService', () => {
  let httpTestingController: HttpTestingController;
  let service: ExcelUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExcelUploadService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ExcelUploadService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('`upload` should return the right data', () => {
    const mockEmployee = [
      {
          employeeNumber: '001',
          firstName: 'John',
          lastName: 'Doe',
          employeeStatus: 'Regular'
      }
    ];
    const file = new File(['sample'], 'sample.xlxs');

    service.upload(file).subscribe(data => { expect(data).toEqual(mockEmployee); });

    const testRequest = httpTestingController.expectOne('https://localhost:5001/api/Employee');
    expect(testRequest.request.method).toEqual('POST');
    testRequest.flush(mockEmployee);
  });
});
