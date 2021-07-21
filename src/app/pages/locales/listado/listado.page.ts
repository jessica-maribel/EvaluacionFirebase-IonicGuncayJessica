import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  locales: any;
  show : boolean;
  
  constructor(private router: Router,
    private localService: LocalesService) { 

    }

  ngOnInit() {
    this.locales = this.localService.getLocales();
  }

  editar(local:any){

    let params: NavigationExtras ={
      queryParams:{
        local:local
      }
    }
    this.router.navigate(['locales/crear'],params)
  }

  crear(){
    this.router.navigate(['locales/crear'])
  }

  buscar(nombre){
    this.show;

    this.localService.getLocales().subscribe = this.locales;
    
  }
}
