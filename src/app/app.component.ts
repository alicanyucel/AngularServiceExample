import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './services/app.service';
@Component({
  selector: 'app-root',
  template: `
  <!-- <input [(ngModel)]="model.title">
  <button (click)="save()">Kaydet</button> -->`
})
export class AppComponent {
  // title = 'service_example';
  //  model:{
  //   id:number,
  //   title:string,
  //   completed:boolean,
  //   userId:number
  // }={
  //   id:0,
  //   title:"Deneme",
  //   completed:false,
  //   userId:1
  // }
  // // post isteği
  // save(){
  //   this._http.post("https://jsonplaceholder.typicode.com/todos",this.model).subscribe(res=>{
  //     console.log(res);
  //   });
  // }
  constructor(
    private _app: AppService
  ) {
    _app.get((res)=>{
      console.log(res)
    })
  }
  save() {
    this._app.add({ userId:1, title: "deneme", completed: false, id: 0 },(res)=>{
    console.log(res);
    })
    }
  }
  // // başarılıysa
  // let headers={
  //   headers:{
  //     "authorization":"deger"
  //   }
  // }
  // this._http.get('https://jsonplaceholder.typicode.com/todos/1',headers).subscribe({
  //   next: (res: any) => {
  //     console.log(res);
  //   },
  //   //başarısızsa
  //   error: (err: HttpErrorResponse) => {
  //     console.log(err);
  //   },
  //   // her durumda çalış
  //   complete: () => {
  //   }
  // });
