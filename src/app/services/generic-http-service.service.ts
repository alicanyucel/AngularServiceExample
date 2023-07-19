import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {
apiUrl:string="https://jsonplaceholder.typicode.com/"
  constructor(
    private _http:HttpClient,
    private _err:ErrorService
  ) { }
  post(api:string,model:any,callback:(res:any)=>void){
    let headers={
      headers:{
      "authorization":localStorage.getItem("token")
      }
    }
    this._http.post(this.apiUrl+api,model,headers).subscribe({
      next:(res)=>{
        callback(res);
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err);
      }
    })
  }
  get(api:string,callback:(res:any)=>void){
    let headers={
      headers:{
      "authorization":localStorage.getItem("token")
      }
    }
                 //options {} yazmak istersek
    this._http.get(this.apiUrl+ api,headers).subscribe({
      next:(res)=>{
      callback(res);
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err);
      }
    })
  }
}
