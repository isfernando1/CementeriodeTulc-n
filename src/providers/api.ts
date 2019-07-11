import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interface';

@Injectable()
export class ApiProvider {




   
   

    constructor(private http: HttpClient) {
  
    
    }




  getTopHeadlines(){
        return this.http.get
        <Article []>(`http://54.233.201.80/wp-json/wp/v2/product?_embed`);
          }
 
      
}
