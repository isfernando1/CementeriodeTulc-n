import { Component } from '@angular/core';

import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiProvider } from 'src/providers/api';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Esculturas en Ciprés',
      url: '/monumentos',
      icon: 'rose'
    },
    {
      title: 'Jardines',
      url: '/jardines',
      icon: 'flower'
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: 'basket'
    },
    {
      title: 'Contactos',
      url: '/contactos',
      icon: 'contact'
    },
    
   
  ];
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public api:ApiProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }



}
