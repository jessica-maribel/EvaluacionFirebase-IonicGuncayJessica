import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Locales } from '../domain/locales';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(public afs: AngularFirestore) { }

  //Metodo Guardar
  save(local : Locales){
    const refLocales = this.afs.collection("locales");

    if (local.lid == null){
      local.lid = this.afs.createId();
      local.activo = true;
    }

    refLocales.doc(local.lid).set(Object.assign({}, local));
  }

  //Listar
  getLocales(): Observable<any[]>{
    return this.afs.collection("locales",
    ref => ref.where("activo","==", true)).valueChanges();
  }
  //Buscar
  getNombre(nombre){
    return this.afs.collection("locales",
    ref => ref.where("nombre","==", nombre)).valueChanges();
  }
}
