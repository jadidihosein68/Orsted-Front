import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { ExcelUploadService } from 'src/app/services/excel-upload.service';

@Component({
  selector: 'app-employee-file-upload',
  templateUrl: './employee-file-upload.component.html',
  styleUrls: ['./employee-file-upload.component.css']
})
export class EmployeeFileUploadComponent{
  excelFile: File | null = null;
  employeeList: Employee[] = [];
  constructor(private excelUploadService: ExcelUploadService) { }

  onFileInput(files: FileList | null): void {
    if (files) {
      this.excelFile = files.item(0);
    }
  }

  onSubmit(): void {
    if (this.excelFile) {
      this.excelUploadService.upload(this.excelFile).subscribe(data => this.employeeList = data);
    }
  }
}
