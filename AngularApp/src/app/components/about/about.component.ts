import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.number = this.api.number+10;
    alert(this.api.number);
  }

}
