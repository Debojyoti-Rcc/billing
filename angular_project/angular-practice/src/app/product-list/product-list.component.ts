import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private  products:  Array<object> = [];
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  public  getProducts(){
    this.apiService.getProducts().subscribe((data:  Array<object>) => {
        this.products  =  data;
        console.log(data);
    });
}

}
