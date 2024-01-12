import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  // api = 'http://localhost';
  api = 'https://emporium-ti-backend.herokuapp.com/CasCom'

  constructor(
    public http: HttpClient,
  ) { }

  getUbicaciones(){ //Trae data completa de main tabla
    return this.http.get(`${this.api}/Ubicaciones`)
  }
  getFraccionam(){
    return this.http.get(`${this.api}/Fraccionam`)
  }
  getDesarrolladores(){
    return this.http.get(`${this.api}/Desarrolladores`)
  }
  getFinanciamientos(body:any){
    return this.http.patch(`${this.api}/Financiamientos`, body)
  }
  getAmenidades(body:any){
    return this.http.patch(`${this.api}/Amenidades`, body)
  }

}