import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  api = 'http://localhost/CasCom';
  // api = 'https://emporium-ti-backend.herokuapp.com/CasCom'

  constructor(
    public http: HttpClient,
  ) { }

  getUbicaciones(){ //Trae data completa de main tabla
    return this.http.get(`${this.api}/Ubicaciones`)
  }
  getUbicsForm(){ //Trae data completa de main tabla
    return this.http.get(`${this.api}/UbicsForm`)
  }
  getFraccionam(){
    return this.http.get(`${this.api}/Fraccionam`)
  }
  getDesarrolladores(){
    return this.http.get(`${this.api}/Desarrolladores`)
  }
  getZonas(){
    return this.http.get(`${this.api}/Zonas`)
  }
  getModelos(){
    return this.http.get(`${this.api}/Modelos`)
  }
  getFinanciamientos(body:any){
    return this.http.patch(`${this.api}/Financiamientos`, body)
  }
  getAmenidades(body:any){
    return this.http.patch(`${this.api}/Amenidades`, body)
  }

  postUbicacion(req_body:any){
    return this.http.post(`${this.api}/Ubicacion`, req_body)
  }
  hideUbic(req_body:any){
    return this.http.patch(`${this.api}/Esconder`, req_body)
  }
  updateUbicacion(Id:number|string, req_body:any){
    return this.http.put(`${this.api}/Ubicacion/${Id}`, req_body)
  }
  postUtilities(req_body:any){
    return this.http.post(`${this.api}/Util`, req_body)
  }

}