import { Component, OnInit } from '@angular/core';
import { ApiProvider } from 'src/providers/api';
import { Article } from '../../interfaces/interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

items: Article []= [];
   textoBuscar='';
constructor(private api: ApiProvider, private iab: InAppBrowser) { 
  
   this.api.getTopHeadlines().subscribe(rep=> this.items=rep);

}

ngOnInit() {
 
 
}

buscar(event){
   const texto=event.target.value;
   this.textoBuscar=texto;
}

openBlank(){
   this.iab.create(`http://18.231.100.73/?post_type=product`,`_blank`)
}

openSystem(){
   this.iab.create(`http://18.231.100.73/?post_type=product`,`_system`)
}


}