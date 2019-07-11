import { Pipe, PipeTransform } from '@angular/core';
import { CompileSummaryKind } from '@angular/compiler';
import { Article } from 'src/interfaces/interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items:Article [], texto:string,
  
    
    ): Article[]{
    if (texto.length===0){
  return items;

    }


      texto=texto.toLowerCase();
   return items.filter(i=>{return i.title.rendered.toLowerCase().includes(texto);}
 
    
    
    );
    

  }

}
