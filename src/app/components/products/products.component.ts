import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TransfereService } from 'src/app/services/transfere';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  public download_click : any =false;
  public isLoginSuccess = false;
  public searchKey : string = '';

  constructor(private api:ApiService, private transfereService:TransfereService) { }

  ngOnInit(): void {

    this.isLoginSuccess = this.transfereService.getData();
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res.results;
      console.log(this.productList)
      this.api.search.subscribe ((val:any)=>{
      this.searchKey = val;
    })





    });

  }


}
