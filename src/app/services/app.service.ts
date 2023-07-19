import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { GenericHttpService } from "./generic-http-service.service";
@Injectable({
    providedIn:'root'
})
export class AppService{
    constructor(
        private _http:GenericHttpService,
        private _error:ErrorService
    ){

    }
    get(callback:(res:any)=>void){
        this._http.get("todos",res=>callback((res)));
    }
    // get(callback:(res:any)=>void){
    //   return   this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe({
    //     next:(res)=>{
    //        callback(res);
    //     },
    //     error:(err:HttpErrorResponse)=>{
    //         this._error.errorHandler(err);
    //     }
    //   })
    
    add(model:any,callback:(res:any)=>void){                                                              //header kullanmak istiyorsak {}
       this._http.post("todos",model,res=>callback(res));
    }
}
