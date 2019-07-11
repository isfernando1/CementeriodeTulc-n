import { Component } from '@angular/core';
import { ApiProvider } from 'src/providers/api';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',

})
export class HomePage {


  
public items:any=[];
  constructor( public api:ApiProvider) {
 
 

  }

  
  ngOnInit() {
  

  }

  
   
}
