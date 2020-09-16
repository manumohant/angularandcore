import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { ApiService } from '../../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  response : any;
  student = new Student;
  private destroy=new Subject();
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit() {
    this.api.number = this.api.number + 10;
    this.api.GetData().pipe(takeUntil(this.destroy)).subscribe(data => this.response = data);
  }

  public executeLogic() {
    this.api.GetData().pipe(takeUntil(this.destroy)).subscribe(data => this.response = data);
  }
  submitForm() {
    if(this.student.id && this.student.id>0) {
      this.api.UpdateData(this.student).pipe(takeUntil(this.destroy)).subscribe(data=>{
        this.executeLogic();
      })
    }
    else{
      this.api.PostData(this.student).pipe(takeUntil(this.destroy)).subscribe(data=>{
        this.executeLogic();
      })
    }
    
  }
  deleteRecord(id) {
    this.api.DeleteData(id).pipe(takeUntil(this.destroy)).subscribe(data=>{
      this.executeLogic();
    })
  }
  editStudent(student: Student) {
    this.student = Object.assign({}, student);
  }
  navigateToPage(student: Student) {
    // this.router.navigate(['/edit/'+student.id]);
    this.router.navigate(['/edit'], );
  }
}
