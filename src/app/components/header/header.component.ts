import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm !:string;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  search (event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm) //arama kelimemiz yakalanıyor mu bakalım.
    this.apiService.search.next(this.searchTerm);
  }

}
