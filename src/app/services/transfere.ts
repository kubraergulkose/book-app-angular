import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TransfereService {

  constructor(  ) {

  }

  private data:any;

  setData(data:any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}
