import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoComponent } from 'src/app/componentes/demo/demo.component';
import { Locales } from 'src/app/domain/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  //Crear objeto de locales
  local : Locales = new Locales();

  loclaes : any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private localService : LocalesService) {
      route.queryParams.subscribe(params =>{
        console.log(params)
        this.local=new Locales();

        if (this.router.getCurrentNavigation().extras.queryParams){
          this.local = this.router.getCurrentNavigation().extras.queryParams.local;
          console.log(this.local);
        }
      })
   }
   contador;
  ngOnInit() {
  }

  guardar(){
    console.log(this.local);
    this.localService.save(this.local);
    this.router.navigate(['locales/listado'])
  }

  update(cnt:any){
    this.local=cnt;
    console.log(cnt);
  }
}
