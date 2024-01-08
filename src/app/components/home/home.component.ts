import { Component, ElementRef, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';
import { UbicacionesService } from 'src/app/services/ubic/ubicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1, height: 50 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0, height: 0 }))
      ])
    ]),
    trigger('myInsertRemoveHorz', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1, width: 192 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0, width: -1 }))
      ])
    ]),
    trigger('listAppear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ])
    ]),
    trigger('tableCompAppear1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms 500ms', style({ opacity: 1 })),
      ])
    ]),
    trigger('tableCompAppear2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms 700ms', style({ opacity: 1 })),
      ])
    ]),
    trigger('tableCompAppear3', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms 800ms', style({ opacity: 1 })),
      ])
    ]),
    trigger('tableCompAppear4', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1300ms 900ms', style({ opacity: 1 })),
      ])
    ]),
  ]
})

export class HomeComponent implements OnInit{
  DATA: any[] = [
    {
      Id: 1,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PUNTA DORADA",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "TERRA",
      Precio: 3660000,
      Direccion: "Av. Gpe Gonzalez",
      M2: 200,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS"],
      Status_Inactivo: false
    },
    {
      Id: 2,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "LORETTA PARTICULAR",
      IdDesarrollador: "PARTICULAR",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "SIN NOMBRE",
      Precio: 4280000,
      Direccion: "AV. DEL VALLE  1238",
      M2: "T180M2-C220M2",
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["CONTADO BACANARIO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false
    },
    {
      Id: 3,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PUNTA CORAL",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "NOR PONIENTE",
      IdPrototipo: "ELIZ",
      Precio: 4160000,
      Direccion: "AV. GPE GONZALES",
      M2: 222,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "NOV-DIC",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false
    },
    {
      Id: 4,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PUNTA CORAL",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "NOR PONIENTE",
      IdPrototipo: "DONEI",
      Precio: 3960000,
      Direccion: "AV. GPE GONZALES",
      M2: 214,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false
    },
    {
      Id: 5,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PUNTA CORAL",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "NOR PONIENTE",
      IdPrototipo: "AZUR",
      Precio: 3660000,
      Direccion: "AV. GPE GONZALES",
      M2: 195.5,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "NOV-DIC",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false
    },
    {
      Id: 6,
      IdTipoUbicacion: "DEPARTAMENTO",
      IdFraccionamiento: "TORRE DEPARTAMENTAL 2",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "NOR PONIENTE",
      IdPrototipo: "MODELO A",
      Precio: 5100000,
      Direccion: "Av. Gpe Gonzalez",
      M2: 235,
      Habitaciones: 4,
      Bano: 4,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "NOV-DIC",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS"],
      Status_Inactivo: false
    },
    {
      Id: 7,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "XARAMA CASAS",
      IdDesarrollador: "GARCAM",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "TABI",
      Precio: 3380000,
      Direccion: "AV. VALLE A CALVILLO",
      M2: 200,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "OCT-NOV",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false
    },
    {
      Id: 8,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "XARAMA CASAS",
      IdDesarrollador: "ARGOVIA",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "TABI",
      Precio: 3395000,
      Direccion: "AV. VALLE A CALVILLO",
      M2: 200,
      Habitaciones: 3,
      Bano: 2.5,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "OCT-NOV",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false
    },
    {
      Id: 9,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "ALDARES RES.",
      IdDesarrollador: "GRUPO SAN CRISTOBAL",
      IdNivel: "RESIDENCIAL",
      IdZona: "ORIENTE",
      IdPrototipo: "ALBORI",
      Precio: 4800000,
      Direccion: "AV. MONREAL CALTAN",
      M2: 220,
      Habitaciones: 3,
      Bano: 3,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: 70000,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "PARQUE PARA PERROS"],
      Status_Inactivo: false
    },
    {
      Id: 10,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PORTA ARVENA",
      IdDesarrollador: "GRUPO SOLDI",
      IdNivel: "RESIDENCIAL",
      IdZona: "NOR PONIENTE",
      IdPrototipo: "MAGNOLÍA",
      Precio: 4550000,
      Direccion: "AV. RUÍZ MOLINA",
      M2: 216,
      Habitaciones: 3,
      Bano: 2,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: null,
      Enganche: null,
      Descuento: 0.5,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "ÁREA COMÚN", "PISTA PARA CORRER"],
      Status_Inactivo: false
    },
    {
      Id: 11,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "BEARA",
      IdDesarrollador: "ALKIMIA",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "MODELO A",
      Precio: 2913000,
      Direccion: "AV. GPE. GONZÁLEZ 1111",
      M2: 82,
      Habitaciones: 2,
      Bano: 2.5,
      Terraza: true,
      Estacionamiento: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "ABRIL 2024",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "ÁREA COMÚN", "PISTA PARA CORRER"],
      Status_Inactivo: false
    },
    {
      Id: 12,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "MAZARYK",
      IdDesarrollador: "GRUPO ABBA",
      IdNivel: "RESIDENCIAL",
      IdZona: "CENTRO",
      IdPrototipo: "MODELO A1",
      Precio: 3086958,
      Direccion: "AV. GPE. GONZÁLEZ 1111",
      M2: 123,
      Habitaciones: 2,
      Bano: 1,
      Terraza: false,
      Estacionamiento: 2,
      Apartado: 50000,
      Enganche: 40,
      Descuento: null,
      TiempoEntrega: "MEDS 2025",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["SKYBAR", "ROOF TOP GARDEN", "ALBERCA", "JACUZZI", "SALON DE JUEGOS"],
      Status_Inactivo: false
    },
  ]
  DB_DATA:any[] = [];
  public filter_data:any = []
  public resultsEMP:any = []
  public resultsCOMP:any = []

  emporium_list: any[] = []
  compara_list: any[] = []

  disableCheckCom = true;

  query_filtration_group:any = {}
  query_multi_filt_fracc:any = [
    // ['IdFraccionamiento', false],
    // ['IdFraccionamiento', false],
    // ['IdFraccionamiento', false],
    // ['IdFraccionamiento', false],
  ]
  query_multi_desrr:any = [
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
  ]
  query_multi_filt_price:any = []
  query_values_price:any = [
    ['Precio', 0],
    ['Precio', 0]
  ]
  statusDisabled=true
  badgeFraccionamientos:any
  badgeDesarrollador:any
  badgePrice:any

  comparedItems:any[]=[];
  tableComparaItems:any[]=[];
  // unSelectedItems:any = {Id:0, checked:true}
  selectedItems: { [key: number]: boolean } = {};

  compara_icon = [
    {path:'../../../assets/sources/icons/🦆 icon-compara1-circule.svg'},
    {path:'../../../assets/sources/icons/🦆 icon-compara2-circule.svg'},
    {path:'../../../assets/sources/icons/🦆 icon-compara3-circule.svg'},
    {path:'../../../assets/sources/icons/🦆 icon-compara4-circule.svg'},
  ]

  myCollapse = false
  myScroll:any

  modalItemSelected:any

  constructor(
    private el: ElementRef,
    private ubicService: UbicacionesService,
  ) {}

  async ngOnInit(){
    await this.ubicService.getUbicaciones().subscribe((value:any) => {
      this.DB_DATA = value
      console.log(this.DB_DATA); //Trae toda la data limpia

      this.filter_data = [...this.DB_DATA] //Una copia de la data

      //Traer los financiamientos y amenidades de cada registro
      for(let [index, r] of this.filter_data.entries()){
        this.ubicService.getFinanciamientos({'Fraccionamiento': r.IdFraccionamiento}).subscribe((results:any)=>{
          this.filter_data[index].Financiamientos = results
        })
        this.ubicService.getAmenidades({'Fraccionamiento': r.IdFraccionamiento}).subscribe((results:any)=>{
          this.filter_data[index].Amenidades = results
        })
      }
      
      // this.emporium_list = this.DB_DATA.filter(models => models.IdDesarrollador == "EMPORIUM") //Para resultados EMPORIUM
      // this.resultsEMP = [...this.emporium_list]


      // this.compara_list = this.DB_DATA.filter(models => models.IdDesarrollador != "EMPORIUM") //Para resultados COMPARA
      // this.resultsCOMP = [...this.compara_list]
      this.ramdomNumber()
      
      // this.compara_list.map(i=>{i.icon=this.compara_icon[index]})
      // for (let i of this.compara_list) {
      //   let index: number = this.ramdomNumber();
      //   i.icon = this.compara_icon[index]
      // }
      // console.log(this.compara_list);
      let Fraccionms:any[] = []
      let Desarrolladores:any[] = []
      this.ubicService.getFraccionam().subscribe((values:any)=>{ //Para traer los fraccionamientos (ponerlos en el filter)
        Fraccionms = values
        for (let f of Fraccionms){
          this.query_multi_filt_fracc.push(['IdFraccionamiento', false, f.Descripcion])
        }
        // console.log(this.query_multi_filt_fracc);
      })
      this.ubicService.getDesarrolladores().subscribe((value:any)=>{ // Para traer los desarrolladores (ponerlos en el filter)
        Desarrolladores = value
        for (let d of Desarrolladores){
          this.query_multi_desrr.push(['IdDesarrollador', false, d.Descripcion])
        }
        // console.log(this.query_multi_desrr);
      })
    })

  }

  ramdomNumber(){
    let randomNum:number = Math.trunc(Math.random()*4) + 1;
    return randomNum-1;    
  }


  onClickHome(item:any){
    this.query_filtration_group.IdTipoUbicacion = item.toUpperCase()
    this.checkDisabled();

    if(item.toUpperCase() == 'TERRENO'){//Para establecer valores de filtro_price
      this.query_multi_filt_price = [
        { title: '5K A 7K', prices: [5000, 7000] },
        { title: '7K A 9K', prices: [7000, 9000] },
        { title: '11K A 13K', prices: [11000, 13000] },
        { title: '13K A 15K', prices: [13000, 15000] },
      ]
    }else{
      this.query_multi_filt_price = [
        { title: '1M A 2M', prices: [1000000, 2000000] },
        { title: '2M A 3M', prices: [2000000, 3000000] },
        { title: '3M A 4M', prices: [3000000, 4000000] },
        { title: '4M A 5M', prices: [4000000, 5000000] },
        { title: '5M A 6M', prices: [5000000, 6000000] },
      ]
    }

    // Establecer los valores del filtro fraccionamiento dependiendo de los "fraccionamientos" de los resultados encontrados (el cual se buscó por el tipo de Vivienda)
    let filterData = this.DB_DATA.filter((v:any)=>{return v.IdTipoUbicacion == item.toUpperCase()}) //Filtrar por tipoVivienda
    let FraccionmtsData:any[] = [] //Almacenar los input de mi filtro fraccionamientos
    const set = new Set(); //Eliminar duplicados
    for(let fr of filterData){ //Agregar cada input para mi filtro Fraccionamientos
      FraccionmtsData.push(['IdFraccionamiento',false,fr.IdFraccionamiento]) 
    }
    let FiltrosDesrr = FraccionmtsData.filter( //Regresa el filtro sin inputs duplicados
      (valor, indice, self) =>
          self.findIndex((elemento) => elemento[2] === valor[2]) === indice
    );
    this.query_multi_filt_fracc = FiltrosDesrr

    // console.log(filterData);

    // Establecer los valores del filtro desarrollos dependiendo de los "fraccionamientos" de los resultados encontrados (el cual se buscó por el tipo de Vivienda)
    let DesarrollosData:any[] = [] //Almacenar los input de mi filtro desarrollos
    const setD = new Set(); //Eliminar duplicados
    for(let dr of filterData){ //Agregar cada input para mi filtro Desarrollos
      DesarrollosData.push(['IdDesarrollador',false,dr.IdDesarrollador]) 
    }
    let FiltrosDES = DesarrollosData.filter( //Regresa el filtro sin inputs duplicados
      (valor, indice, self) =>
          self.findIndex((elemento) => elemento[2] === valor[2]) === indice
    );
    this.query_multi_desrr = FiltrosDES
  }
  onClickFracc(e:any){
    // this.query_filtration_group.Fraccionamientos = []
    // console.log(e);
    // console.log(this.query_multi_filt_fracc);
    this.badgeFraccionamientos = this.query_multi_filt_fracc.filter((f:any)=>f[1]!=false)
    this.badgeFraccionamientos.length==0?this.badgeFraccionamientos = undefined:''
      // console.log(this.badgeFraccionamientos);
  }
  onClickPrice(item:any){
    this.query_values_price[0][1]=item[0]
    this.query_values_price[1][1]=item[1]
    // console.log(item, this.query_values_price)
    this.badgePrice = this.query_values_price
    console.log(this.badgePrice);
  }
  // checkBoxValue(event:any){
  //   if(event.target.checked && event.target.defaultValue){
  //     this.query_multi_filt_fracc.Fraccionamientos.push({IdFraccionamiento:event.target.defaultValue.toUpperCase()})
  //   }else if(!event.target.checked){ 
  //     console.log(event.target.defaultValue.toUpperCase());
  //     for(var i = 0; i < this.query_multi_filt_fracc.Fraccionamientos.length; i++){
  //       if (this.query_multi_filt_fracc.Fraccionamientos[i]['IdFraccionamiento'] == event.target.defaultValue.toUpperCase()){
  //         // console.log(this.query_multi_filt_fracc.Fraccionamientos[i], i)
  //         // const remove = this.query_multi_filt_fracc.Fraccionamientos.slice(i)
  //         console.log(this.query_multi_filt_fracc.Fraccionamientos);
  //         // this.query_multi_filt_fracc.Fraccionamientos = this.query_multi_filt_fracc.Fraccionamientos.slice(i)
  //       }
  //     }
  //     // for(var i = 0; i < this.query_multi_filt_fracc.Fraccionamientos.length; i++)
  //     //   console.log(this.query_multi_filt_fracc.Fraccionamientos[i][1]);
        
  //   }
  //   // console.log(event.target.checked, event.target.defaultValue);
  //   console.log(this.query_multi_filt_fracc.Fraccionamientos);
  // }
  onClickLevel(item:any){
    this.query_filtration_group.IdNivel = item.toUpperCase()
    // console.log(item);
  }
  onClickZone(item:any){
    this.query_filtration_group.IdZona = item.toUpperCase()
    // console.log(item);
  }
  onClickDesrr(e:any){
    this.badgeDesarrollador = this.query_multi_desrr.filter((f:any)=>f[1]!=false)
    this.badgeDesarrollador.length==0?this.badgeDesarrollador = undefined:''
  }
  detectedItemList(e:any, item:any){
    
    if(e.target.checked){
      console.log('Agrego')
      if(this.comparedItems.length===4){ //valida si index es mayor a 4 (comparedItems es el array del preview)

        const removedItem = this.comparedItems.pop(); //Elimina el último elemento de mi array al ser más de 4 
        if(removedItem.IdDesarrollador == 'EMPORIUM'){
          const itemIndex = this.resultsEMP.findIndex((i:any) => i.Id === removedItem.Id); //Busca el index del grupo resultsEMP para ver si se parece al de mi removeItem
          if (itemIndex != -1) this.resultsEMP[itemIndex].Status_Inactivo = false; //Entonces la propiedad Status_Inactivo (que activa el checkbox del template) se desactiva
        }else{
          const itemIndex = this.resultsCOMP.findIndex((i:any) => i.Id === removedItem.Id); //Busca el index pero del grupo resultsCOMP
          if (itemIndex != -1) this.resultsCOMP[itemIndex].Status_Inactivo = false;
        }

      }

      // if(this.comparedItems.length===0){
      //   console.log('EL ARRAY DE SELECTED_ITEM YA NO TIENE NADA!!!')
      //   this.cleanSelection(); 
      // }

      this.comparedItems.push(item); //Agrego el -item- seleccionando (mediante el checkbox) al array
      item.Status_Inactivo = true //Activa su check-box en el template

      this.disableCheckCom = this.resultsEMP.every((objeto:any) => objeto.Status_Inactivo === false); //Valida si algún check de resultEMP fue activado  (funcional para evitar que no se seleccione un item-emporium)
      console.log(this.disableCheckCom, this.resultsEMP)

      if(this.comparedItems.length == 1) this.myCollapse = true; //Si ya hay un registro muestra preview
      // console.log(this.comparedItems);

    }else if(!e.target.checked){
      console.log('Quito')
      item.Status_Inactivo = false //Desactiva logicamente la propiedad que valida el check-box
      this.disableCheckCom = this.resultsEMP.every((objeto:any) => objeto.Status_Inactivo === false);
      this.disableCheckCom? this.cleanSelection(): ''

      this.comparedItems = this.comparedItems.filter((i)=>i.Id!==item.Id) //Me regresará todos los demás items que su Id no sea igual al que se desactivo por medio del checkbox
      if (this.comparedItems.length == 0) this.cleanSelection(); //Si no tengo items 
      // console.log(this.comparedItems);
    }
   
  }

  show_query(){
    // this.emporium_list = this.DB_DATA.filter(models => models.IdDesarrollador == "EMPORIUM") //Para resultados EMPORIUM
    // this.resultsEMP = [...this.emporium_list]


    // this.compara_list = this.DB_DATA.filter(models => models.IdDesarrollador != "EMPORIUM") //Para resultados COMPARA
    // this.resultsCOMP = [...this.compara_list]
    // for (let i of this.compara_list) {
    //   let index: number = this.ramdomNumber();
    //   i.icon = this.compara_icon[index]
    // }


    // console.log(this.query_filtration_group)
    // console.log(this.query_multi_filt_fracc)
    // console.log(this.query_multi_desrr)
    const query_modificated = Object.entries(this.query_filtration_group);
    // console.log(query_modificated);

    let wholeData = this.filterItems(this.filter_data,query_modificated);
    console.log(wholeData)

    // --------------------------------------
    const checkFilter_Multi = this.query_multi_filt_fracc.every((f:any)=>f[1] === false) //Esto valida si mi filter_multi_fracc tiene todos sus filters en false
    if(!checkFilter_Multi){
      wholeData = this.filterItemsOR(wholeData, this.query_multi_filt_fracc)
      console.log('FILTRO CON TODO Y FRACCIONAMIETOS',wholeData)
    }
    // -----------------------------------------
    const checkFilter_MultiP = this.query_values_price.every((f:any)=>f[1] === 0) //Esto valida si mi filter_multi_price tiene todos sus filters en 0    
    if(!checkFilter_MultiP){
      wholeData = this.filterItemsPrice(wholeData, this.query_values_price)
      console.log('FILTRO CON TODO Y PRECIO',wholeData)
    }
    // -----------------------------------------
    const checkFilter_MultiDess = this.query_multi_desrr.every((f:any)=>f[1] === false) //Esto valida si mi filter_multi_price tiene todos sus filters en 0    
    if(!checkFilter_MultiDess){
      wholeData = this.filterItemsOR(wholeData, this.query_multi_desrr)
      console.log('FILTRO CON TODO Y DESARROLLOS',wholeData)
    }
    // -----------------------------------------


    // Establecer los valores del filtro fraccionamiento dependiendo de los "fraccionamientos" de los resultados encontrados (cual ya se buscó por todos los filtros)
    console.log('FILTRO SIN FRACCS',wholeData)
    // let FraccionmtsData:any[] = []
    // const set = new Set();
    // for(let fr of wholeData){ 
    //   FraccionmtsData.push(['IdFraccionamiento',false,fr.IdFraccionamiento]) 
    // }
    // let FiltrosFracc = FraccionmtsData.filter(
    //   (valor, indice, self) =>
    //       self.findIndex((elemento) => elemento[2] === valor[2]) === indice
    // );
    // this.query_multi_filt_fracc = FiltrosFracc

    

    // this.resultsEMP = [];
    // this.resultsCOMP = [];
    setTimeout(()=>{
      this.resultsEMP  = wholeData.filter((ubc:any) => ubc.IdDesarrollador == "EMPORIUM")
      this.resultsCOMP = wholeData.filter((ubc:any) => ubc.IdDesarrollador != "EMPORIUM")
      for (let i of this.resultsCOMP) {
        let index: number = this.ramdomNumber();
        i.icon = this.compara_icon[index]
      }
      // this.emporium_list = this.DB_DATA.filter(models => models.IdDesarrollador == "EMPORIUM") //Para resultados EMPORIUM
      // this.resultsEMP = [...this.emporium_list]


      // this.compara_list = this.DB_DATA.filter(models => models.IdDesarrollador != "EMPORIUM") //Para resultados COMPARA
      // this.resultsCOMP = [...this.compara_list]
      // for (let i of this.compara_list) {
      //   let index: number = this.ramdomNumber();
      //   i.icon = this.compara_icon[index]
      // }
      
    },10)

  }

  filterItemsPrice(data:any, filters:any) {
    return data.filter((e:any)=>e.Precio>=filters[0][1] && e.Precio<=filters[1][1] )
  }

  filterItemsOR(data:any, filters:any) { //Filtra la data que le pasemos y en cada iteración revisa si alguno coincide en campo 'IdFraccionamiento' con el value de mis filtros seleccionados por checkbox
    return data.filter( (e:any) => {
      for(var i = 0; i < filters.length; i++){
        if (e[filters[i][0]] === filters[i][1]) {return true}
      }
      return false
    });
  }

  filterItems(data:any,filters:any) {
    if (filters.length==0){return []}
    return data.filter(function(val:any) {
      for(var i = 0; i < filters.length; i++)
        if(val[filters[i][0]] != filters[i][1]) return false; //si val (que es igual a (i)=> i.blabla ) en su propiedad "x" es diferente de la propiedad "x" pero de filter, no regresa nada
        // console.log(val)
        return true;
    }
    )
  }

  cleanFilter(name:any){
    delete this.query_filtration_group[name];
    this.checkDisabled()
    console.log(this.query_filtration_group);
    if(name==='Fraccionamientos'){ //Limpiar filtros
      this.badgeFraccionamientos = undefined
      this.query_multi_filt_fracc.map((f:any)=>f[1] = false)
    }
    if(name==='Precio'){ //Limpiar filtros
      this.badgePrice = undefined
      this.query_values_price.map((f:any)=>f[1] = 0)
    }
    if(name==='Desarrollador'){ //Limpiar filtros
      this.badgeDesarrollador = undefined
      this.query_multi_desrr.map((f:any)=>f[1] = false)
    }
    if( Object.keys(this.query_filtration_group).length === 0 && !this.query_filtration_group){
      // this.resultsEMP = this.emporium_list
      // this.resultsCOMP = this.compara_list
      this.resultsEMP = []
      this.resultsCOMP = []
    }
  }

  checkDisabled(){ //Para permitir usar buttons de filters 
    const status = this.query_filtration_group.hasOwnProperty("IdTipoUbicacion")
    // console.log(status);
    if(status){
      this.statusDisabled=false
    }else{this.statusDisabled=true;}
  }

  cleanSelection() { //Desactivar todos los checkbox y limpiar comparedItems  
    this.myCollapse = false; //Esconder preview por el ngIf 
    this.comparedItems = [];
    this.resultsEMP.map((r:any)=>{
      r.Status_Inactivo = false
    });
    this.resultsCOMP.map((r:any)=>{
      r.Status_Inactivo = false
    });

    this.disableCheckCom = this.resultsEMP.every((objeto:any) => objeto.Status_Inactivo === false); //Valida si algún check de resultEMP fue activado  (funcional para evitar que no se seleccione un item-emporium)
      // console.log(this.disableCheckCom)
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      this.tableComparaItems = [...this.comparedItems] // Se copean los datos del preview, de los items seleccionados de main-list
      console.log(this.tableComparaItems)

      setTimeout(()=>{
        section.scrollIntoView({ behavior: 'smooth' });
      },100)

    }
  }

  selectInfoModal(item:any){
    this.modalItemSelected = item
    console.log(this.modalItemSelected)
  }

}
