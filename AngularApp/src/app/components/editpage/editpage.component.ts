import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Student } from 'src/app/models/student';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute,private service: ApiService, private router:Router) { }
  student = new Student;
  private destroy=new Subject();
  ngOnInit() {
    this.route.params.subscribe(params=>{
      const studentId = params['id'];
      this.service.GetSingleRecord(studentId).pipe(takeUntil(this.destroy)).subscribe(data=>{
        this.student = data;
      })
    });
  }
  submitForm() {
    this.service.UpdateData(this.student).pipe(takeUntil(this.destroy)).subscribe(data=>{
      this.router.navigate(['/home']);
    });
  }
  ngOnDestroy(){
    this.destroy.next();
    this.destroy.complete();
  }

}
