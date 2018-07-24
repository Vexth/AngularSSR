import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  str: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.test('').subscribe((data: any) => {
      this.str = data.Token;
    })
  }

  test(data): Observable<any> {
    return this.http.post(encodeURI(`http://localhost:3355/test`), data);
  }

}
