import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
number = 10;
  constructor(private client: HttpClient) { }
  public GetData() {
    return this.client.get("http://localhost:58800/api/values");
  }
  public PostData(student: Student) {
    let header = new HttpHeaders();
    header.append('content-type','application/json');
    return this.client.post("http://localhost:58800/api/values", student,{headers:header});
  }
  public DeleteData(id) {
    return this.client.delete("http://localhost:58800/api/values/"+id);
  }
  public UpdateData(student: Student) {
    return this.client.put("http://localhost:58800/api/values", student);
  }
  public GetSingleRecord(id) {
    return this.client.get<Student>("http://localhost:58800/api/values/"+id);
  }
}
