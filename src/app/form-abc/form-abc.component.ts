import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { UbicacionesService } from '../services/ubic/ubicaciones.service';
import {Toast} from 'bootstrap'
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-abc',
  templateUrl: './form-abc.component.html',
  styleUrls: ['./form-abc.component.scss'],
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
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
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
    trigger('disappearFade', [
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class FormAbcComponent implements OnInit {
  DATA: any[] = [
    {
      Id: 256,
      IdTipoUbicacion: "CASA",
      IdFraccionamiento: "PUNTA DORADA",
      IdDesarrollador: "EMPORIUM",
      IdNivel: "RESIDENCIAL",
      IdZona: "PONIENTE",
      IdPrototipo: "TERRA",
      Precio: 3660000,
      Ubicacion: "Av. Gpe Gonzalez",
      M2: 200,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: true,
      Parking: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS"],
      Status_Inactivo: true,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. DEL VALLE  1238",
      M2: "T180M2-C220M2",
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: true,
      Parking: 2,
      Apartado: 10000,
      Enganche: 3,
      Descuento: 6,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["CONTADO BACANARIO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false,
      m2CT: {T:180, C:220}
    },
    {
      Id:155,
      IdTipoUbicacion:"CASA",
      IdFraccionamiento:"PUNTA CORAL",
      IdDesarrollador:"EMPORIUM",
      IdNivel:"RESIDENCIAL",
      IdZona:"NOR PONIENTE",
      IdPrototipo:"PLATINO",
      Precio:1200000,
      Ubicacion:"Sin Calle",
      M2:0,
      Habitaciones:2,
      Banos:2,
      Terraza:false,
      Parking:2,
      Apartado:13000,
      Enganche:3,
      Descuento:10,
      TiempoEntrega:"SEP-DIC-24",
      Amenidades:["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA DE JUNTAS"],
      Status_Inactivo:false,
      m2CT:{T:129,C:210},
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
      Ubicacion: "AV. GPE GONZALES",
      M2: 222,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: true,
      Parking: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "NOV-DIC",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. GPE GONZALES",
      M2: 214,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: false,
      Parking: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "ENE-MAR",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. GPE GONZALES",
      M2: 195.5,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: false,
      Parking: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "NOV-DIC",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS", "SALA JUEGOS", "REGADERAS", "SALA JUNTAS"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "Av. Gpe Gonzalez",
      M2: 235,
      Habitaciones: 4,
      Banos: 4,
      Terraza: true,
      Parking: 2,
      Apartado: 30000,
      Enganche: 10,
      Descuento: 1,
      TiempoEntrega: "DIC-24",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["VIGILANCIA", "CASA CLUB", "GYM", "ALBERCA", "TERRAZAS", "CANCHAS"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. VALLE A CALVILLO",
      M2: 200,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: false,
      Parking: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "OCT-NOV",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. VALLE A CALVILLO",
      M2: 200,
      Habitaciones: 3,
      Banos: 2.5,
      Terraza: false,
      Parking: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "OCT-NOV",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "TROTAPISTA"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. MONREAL CALTAN",
      M2: 220,
      Habitaciones: 3,
      Banos: 3,
      Terraza: true,
      Parking: 2,
      Apartado: 70000,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "PARQUE PARA PERROS"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. RUÍZ MOLINA",
      M2: 216,
      Habitaciones: 3,
      Banos: 2,
      Terraza: true,
      Parking: 2,
      Apartado: null,
      Enganche: null,
      Descuento: 0.5,
      TiempoEntrega: "INMEDIATA",
      Financiamientos: ["BANCARIO", "COFI", "INFO TOTAL", "CONTADO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "ÁREA COMÚN", "PISTA PARA CORRER"],
      Status_Inactivo: true,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. GPE. GONZÁLEZ 1111",
      M2: 82,
      Habitaciones: 2,
      Banos: 2.5,
      Terraza: true,
      Parking: 2,
      Apartado: null,
      Enganche: null,
      Descuento: null,
      TiempoEntrega: "ABR-24",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["ALBERCA", "GYM", "TERRAZA", "ÁREA COMÚN", "PISTA PARA CORRER"],
      Status_Inactivo: false,
      m2CT: {T:0, C:0}
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
      Ubicacion: "AV. GPE. GONZÁLEZ 1111",
      M2: 123,
      Habitaciones: 2,
      Banos: 1,
      Terraza: false,
      Parking: 2,
      Apartado: 50000,
      Enganche: 40,
      Descuento: null,
      TiempoEntrega: "MAY-25",
      Financiamientos: ["TODOS LOS TIPOS DE CRÉDITO"],
      Amenidades: ["SKYBAR", "ROOF TOP GARDEN", "ALBERCA", "JACUZZI", "SALON DE JUEGOS"],
      Status_Inactivo: true,
      m2CT: {T:0, C:0}
    },
  ]
  DATA_INACTIVE: any[] = []
  DATA_ACTIVE: any[] = []
  monthsFeatures: any = {
    monthsArray:[
    {mes:'ENE', selected:false, rango:false},
    {mes:'FEB', selected:false, rango:false},
    {mes:'MAR', selected:false, rango:false},
    {mes:'ABR', selected:false, rango:false},
    {mes:'MAY', selected:false, rango:false},
    {mes:'JUN', selected:false, rango:false},
    {mes:'JUL', selected:false, rango:false},
    {mes:'AGO', selected:false, rango:false},
    {mes:'SEP', selected:false, rango:false},
    {mes:'OCT', selected:false, rango:false},
    {mes:'NOV', selected:false, rango:false},
    {mes:'DIC', selected:false, rango:false}],
    trueItems:[],
    yearsArray:['2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036']
  }
  monthsYear = '2024'

  inputsData:any = {
    Fraccionamientos: [],
    Desarrolladores: [],
    Zonas: [],
    Modelos: []
  }


  newModalData:any = {Terraza:false,M2:0,AcabadosEspeciales:[],Amenidades:[],TiempoEntrega:''}; //objeto que almacena el modelo que se dará como nuevo registro
  editModalData:any = {m2CT: {T:0, C:0}}; //objeto que almacena el modelo que se editará
  hideModelData:any = {} //objeto que almacena el modelo que se esconderá
  showModelData:any = {} //objeto que almacena el modelo que se mostrará
  modalUtilities:any = {
    title:'',
    descripcion:'',
    url: '',
    openInsideM: false
  }
  appenFinanc = ''; //enlazado con NgModel a input para agregar financiamientos
  appenAmenid = ''; //enlazado con NgModel a input para agregar amenidades
  appenAcabEs = ''; //enlazado con NgModel a input para agregar acabados especiales

  sendingLoad = false; //Para cargar la animación de loading...
  myToast = {
    toastCalled: false, //Activar la notificación toast de éxito
    toastMessage: '',
    toastTitle: '',
    toastType: '',
  }

  page = 0; //Para manejar la paginación de  mis registros
  filteredData: any[] = [];

  search = '' //Para bindear con el value del input search

  statusDisabled=true
  tipoUbic = '' //Pintar una de las selecciones del dropdown de Tipo Vivienda

  query_filtration_group:any = {}
  query_multi_filt_fracc:any = [
  ]
  query_multi_desrr:any = [
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
    // ['IdDesarrollador', false],
  ]
  public filter_data:any = []
 
  formularioEnviado = false;
  formulario: FormGroup; // Define el FormGroup
  constructor(
    private ubicService: UbicacionesService,
    private formBuilder: FormBuilder
  ){
    this.formulario = this.formBuilder.group({
      'tipoVivienda': new FormControl("", Validators.required),
      'fraccionamiento': new FormControl("", Validators.required),
      'desarrollador': new FormControl("", Validators.required),
      'nivel': new FormControl("", Validators.required),
      'zona': new FormControl("", Validators.required),
      'ubicacion': new FormControl("", Validators.required),
      'prototipo': new FormControl("", Validators.required),
      'terreno': new FormControl("", Validators.required),
      'construccion': new FormControl("", Validators.required),
      'habitaciones': new FormControl("", Validators.required),
      'banos': new FormControl("", Validators.required),
      'parking': new FormControl("", Validators.required),
      'precio': new FormControl("", Validators.required),
      'apartado': new FormControl("", Validators.required),
      'enganche': new FormControl("", Validators.required),
      'descuento': new FormControl("", Validators.required),

      'acabados': new FormControl(),
      'year': new FormControl(),
      'terraza': new FormControl(),
      // Otros campos del formulario
    });
  }

  // Método para verificar si un campo es inválido
  campoEsInvalido(campo: string) {
    const control = this.formulario.get(campo);
    // console.log(control)
    return this.formularioEnviado && control?.invalid;
  }

  async ngOnInit(){
    this.getZones();
    this.getModels();
    this.getDevelopers();
    this.getFraccions();

    this.setAllData();

    let Desarrolladores:any[] = []
    this.ubicService.getDesarrolladores().subscribe((value:any)=>{ // Para traer los desarrolladores (ponerlos en el filter)
      Desarrolladores = value
      for (let d of Desarrolladores){
        this.query_multi_desrr.push(['IdDesarrollador', false, d.Descripcion])
      }
      console.log(this.query_multi_desrr);
    })

    let Fraccionms:any[] = []
      this.ubicService.getFraccionam().subscribe((values:any)=>{ //Para traer los fraccionamientos (ponerlos en el filter)
        Fraccionms = values
        for (let f of Fraccionms){
          this.query_multi_filt_fracc.push(['IdFraccionamiento', false, f.Descripcion])
        }
        console.log(this.query_multi_filt_fracc);
      })
  }

  getZones(){
    // this.ubicService.getZonas().subscribe((results:any)=>{
    //   this.inputsData.Zonas = results
    //   // console.log("Zonas:",results);
    // })
    this.ubicService.getZonas().subscribe({
      next: (results:any)=>{
        this.inputsData.Zonas = results
        // console.log("Zonas:",results);
      },
      error: (error:any)=>{
        console.log(error, 'ERROR ERROR ERROR')
        this.appearToast({message:'Algo salió mal al consultar', title:'Error', type:'error'})
      }
    })
  }
  getModels(){
    this.ubicService.getModelos().subscribe((results:any)=>{
      this.inputsData.Modelos = results
      // console.log("Modelos:",results);
    })
  }
  getDevelopers(){
    this.ubicService.getDesarrolladores().subscribe((results:any)=>{
      this.inputsData.Desarrolladores = results
      // console.log("Desarrollos:",results);
    })
  }
  getFraccions(){
    this.ubicService.getFraccionam().subscribe((results:any)=>{
      this.inputsData.Fraccionamientos = results
    })
  }


  onClickDesrr(e:any){
    console.log(this.query_multi_desrr)
    setTimeout(() => { this.filtrarDatos(); }, 100);
  }
  onClickFracc(e:any){
    console.log(this.query_multi_filt_fracc)
    setTimeout(() => { this.filtrarDatos(); }, 100);
  }

  filtrarDatos(){
    const query_modificated = Object.entries(this.query_filtration_group); //[['IdTipoUbicacion', 'CASA']]
    console.log(query_modificated);

    let wholeData = this.filterItems(this.filter_data,query_modificated);
    console.log(wholeData);
    
    const checkFilter_MultiFracc = this.query_multi_filt_fracc.every((f:any)=>f[1] === false) //Esto valida si mi filter_multi_fracc tiene todos sus filters en false
    if(!checkFilter_MultiFracc){
      wholeData = this.filterItemsOR(wholeData, this.query_multi_filt_fracc)
      console.log('FILTRO CON TODO Y FRACCIONAMIETOS',wholeData)
    }
    
    const checkFilter_MultiDess = this.query_multi_desrr.every((f:any)=>f[1] === false) //Esto valida si mi filter_multi_price tiene todos sus filters en 0    
    if(!checkFilter_MultiDess){
      wholeData = this.filterItemsOR(wholeData, this.query_multi_desrr)
      console.log('FILTRO CON TODO Y DESARROLLOS',wholeData)
    }
    // console.log(wholeData)
    // this.DATA_ACTIVE = DATA_COPY.filter((v:any)=>{return v.Status_Inactivo == false})
    // this.DATA_INACTIVE = DATA_COPY.filter((v:any)=>{return v.Status_Inactivo == true})
    // console.log(wholeData)
    // console.log(this.DATA)
    setTimeout(() => {
      this.DATA_ACTIVE = wholeData.filter((v:any) => v.Status_Inactivo == false)
      this.DATA_INACTIVE = wholeData.filter((v:any) => v.Status_Inactivo == true)

      this.page = 0;
    }, 10);
  }

  setAllFilters(item:any){ //Al elegir el value del filtro TipoUbicacion se setean los otros filtros
    this.query_filtration_group.IdTipoUbicacion = item.toUpperCase()
    this.checkDisabled(); this.markTipoUbic(item)
    this.search = ''

    // Establecer los valores del filtro fraccionamiento dependiendo de los "fraccionamientos" de los resultados encontrados (el cual se buscó por el tipo de Vivienda)
    let filterData = this.DATA.filter((v:any)=>{return v.IdTipoUbicacion == item.toUpperCase()}) //Filtrar por tipoVivienda
    let FraccionmtsData:any[] = [] //Almacenar los input de mi filtro fraccionamientos
    const set = new Set(); //Eliminar duplicados
    for(let fr of filterData){ //Agregar cada input para mi filtro Fraccionamientos
      FraccionmtsData.push(['IdFraccionamiento',false,fr.IdFraccionamiento]) 
    }
    let FiltrosSinD = FraccionmtsData.filter( //Regresa el filtro sin inputs duplicados
      (valor, indice, self) =>
          self.findIndex((elemento) => elemento[2] === valor[2]) === indice
    );
    this.query_multi_filt_fracc = FiltrosSinD

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

    setTimeout(() => {
      this.filtrarDatos()
    }, 100);
  }

  checkDisabled(){ //Para permitir usar buttons de filters 
    const status = this.query_filtration_group.hasOwnProperty("IdTipoUbicacion")
    // console.log(status);
    if(status){
      this.statusDisabled=false
    }else{this.statusDisabled=true}
  }


  setUpdateUbic(vivienda:any){ //Asigna la ubicación que se quiere editar a la propiedad para editar
    let monthsArray = this.monthsFeatures.monthsArray
    // let monthsArrayTrue = this.monthsFeatures.trueItems
    this.cleanMonths() //Limpiamos todo antes de usar laspropiedades para calcular meses selected y rangos


    this.editModalData = {...vivienda} // Esqueleto a editar de mi modal edit
    console.log(this.editModalData);

    const TiempoEntrega = vivienda.TiempoEntrega
    let arrMonSeparate = TiempoEntrega.split('-',2) // ----> ['ABR', 'DIC'] <----
    // let blablabla = monthsArray.filter((m:any)=>m.mes == arrMonst[0] || m.mes == arrMonst[1])
    


    
    // Filtrar los meses en monthsArray y obtener sus índices
    let indexArrayMonths = monthsArray
      .map((m:any)=>m.mes) // Obtener un arreglo solo con los nombres de los meses
      .map((mes:any, index:number)=> arrMonSeparate.includes(mes) ? index : - 1) // Marcar los índices de los meses que coinciden, -1 si no coincide
      .filter((index:number) => index !== -1); // Filtrar los índices marcados
    // let indexArrayMonths = monthsArray.findIndex((m:any)=>m.mes === arrMonst[0])
    // console.log(indexArrayMonths)

    for(let i of indexArrayMonths){
      this.selectMonth(i, monthsArray[i], this.editModalData)
    }
    // monthsArrayTrue.map((m:any)=>m.selected = true)
    // console.log(monthsArrayTrue)
    // this.rangoIndices(indexArrayMonths)

    // this.selectMonth(indexArrayMonths,this.monthsFeatures.monthsArray[indexArrayMonths])
  }
  getIndex(array:any){
    let arayIndex = []
    for(let i of array){
      
    }
  }
  setHideUbic(vivienda:any){
    this.hideModelData = vivienda
    console.log(this.hideModelData)
  }
  setShowUbic(vivienda:any){
    this.showModelData = vivienda
    console.log(this.showModelData)
  }
  setUtilitiesM(utilitie:string, openByModal:boolean){
    this.modalUtilities.title = utilitie
    this.modalUtilities.url = `/${utilitie}`
    this.modalUtilities.openInsideM = openByModal
    console.log(this.modalUtilities)
  }

  addFinanc(financiamientoArray:any){ // Agregar finaniciamientos array
    if(this.appenFinanc != '') financiamientoArray.push(this.appenFinanc.toUpperCase())
    // console.log(this.editModalData.Financiamientos);
  }
  addAmenid(amenidadesArray:any){ // Agregar amenidades array
    if(this.appenAmenid != '') amenidadesArray.push(this.appenAmenid.toUpperCase())
    // console.log(this.editModalData.Amenidades);
  }
  addAcabEsp(acabadEspeArray:any){ // Agregar amenidades array
    if(this.appenAcabEs != '') acabadEspeArray.push(this.appenAcabEs.toUpperCase())
    // console.log(this.editModalData.Amenidades);
  }
  removeFinanc(financiamientoArray:any,fIndex:any){ // Eliminar finaniciamientos from array
    financiamientoArray.splice (fIndex,1)
    // console.log(this.editModalData.Financiamientos);
  }
  removeAmenid(amenidadesArray:any,aIndex:any){ // Eliminar aemnidades from array
    amenidadesArray.splice (aIndex,1)
    // console.log(this.editModalData.Amenidades);
  }
  removeAcabEsp(acabadEspeArray:any,aIndex:any){ // Eliminar aemnidades from array
    acabadEspeArray.splice (aIndex,1)
    // console.log(this.editModalData.Amenidades);
  }

  async putUbicacion(){
    this.sendingLoad = true
    console.log(this.editModalData, this.editModalData.Id)
    
      await this.ubicService.updateUbicacion(this.editModalData.Id, this.editModalData).subscribe({
        next:(resp:any) => {
          console.log(resp);
          let ARRAY_TO_EDIT = []
          resp.Status_Inactivo ? ARRAY_TO_EDIT = this.DATA_INACTIVE : ARRAY_TO_EDIT = this.DATA_ACTIVE //Especifíco que array (disable or enable locations)
          let indexItemEdited = ARRAY_TO_EDIT.findIndex((item: any) => item.Id == resp.Id)
          console.log(indexItemEdited)
          if (indexItemEdited >= 0) ARRAY_TO_EDIT[indexItemEdited] = resp; console.log(ARRAY_TO_EDIT[indexItemEdited])
          this.setAllData()

          this.sendingLoad = false
          this.appearToast({message:`El registro de la vivienda ${resp.IdPrototipo} ha sido alctualizado`, title:'¡Éxito!', type:'success' })
        },
        error: (err:any)=>{
          console.log(err, 'ERROR')
          this.appearToast({message:'Algo salió mal al actualizar el registro, verifica tu conexión o comunícate con soporte', title:'Error', type:'error'})
          this.sendingLoad = false
        }
      })
      // ,this.appearToast({message:'Algo salió mal al actualizar el registro, verifica tu conexión e intentalo más tarde', title:'Error', type:'error'}), this.sendingLoad = false
    // this.DATA
  }

  postUbicacion(){
    this.formularioEnviado = true; //La usamos para que en los validadores de cada input se validen al hacer click (al poner la propiedad formularioEnviado en true)
    console.log('AddModal:', this.newModalData)
    console.log('FormGroup:', this.formulario)
    //Si TipoUbicacion es TERRENO set Habit. Baños y Parking 0
    if (this.newModalData.IdTipoUbicacion == 'TERRENO'){
      this.formulario.get('habitaciones')?.setValue(0)
      this.formulario.get('banos')?.setValue(0)
      this.formulario.get('parking')?.setValue(0)
      this.formulario.get('construccion')?.setValue(0)
    }
    
    
    const form = this.formulario.value; // delete form.acabados; Obtenemos los values del formulario completo, seteado con FormGroup
    //const incompletedorm = Object.values(form).some(values=>values === '' || values === undefined || values === null) // revisamos si almenos una de las propiedas de mi formulario está vacia o indefinida
    let incompleteForm = false // revisamos si almenos una de las propiedas de mi formulario está vacia o indefinida
    this.formulario.status == "INVALID"? incompleteForm = true : this.formulario.status == "VALID"? incompleteForm = false : null

    console.log(incompleteForm)
    if(!incompleteForm){ //Si todas están listas
      this.sendingLoad = true
      console.log('Ya puedo enviar el formulario')
      setTimeout(() => {
        console.log(this.newModalData)
        this.ubicService.postUbicacion(this.newModalData).subscribe({
          next:(resp:any) => {
            this.sendingLoad = false

            this.DATA.unshift(resp)
            this.appearToast({
              message:`El registro de la vivienda ${resp.IdPrototipo} ha sido registrado`, 
              title:'¡Éxito!', 
              type:'success'})
            this.setAllData()
          },
          error:(err:any) => {
            console.log(err, 'ERROR')
            this.appearToast({
              message:'Algo salió mal al guardar el registro, verifica tu conexión o comunícate con soporte', 
              title:'Error', 
              type:'error'})
            this.sendingLoad = false
          }
        })
      }, 2000);
    } else { 
      this.sendingLoad = false
      console.log('NOOOO puedo enviar el formulario') 
    }
    
    // this.ubicService.postUbicacion(this.newModalData).subscribe((resp)=>{
    //   console.log(resp)
    // })
    // console.log(this.newModalData, this.monthsYear);
  }

  postUtilitie(){
    this.sendingLoad = true
    const reqBody = { Table:this.modalUtilities.title, Descripcion: this.modalUtilities.descripcion.toUpperCase() }
    setTimeout(() => {
      this.ubicService.postUtilities(reqBody).subscribe({
        next:(resp:any) => {
          console.log(resp);
          
    
          if('Mensaje' in resp){
            this.sendingLoad = false;
            this.appearToast({message:resp.Mensaje, title:'¡Atención!', type:'warning'})
          } else {
            this.sendingLoad = false;
            this.appearToast({message:`Se registro el ${this.modalUtilities.title} ${resp.Descripcion} exitosamente`, title:'¡Éxito!', type:'success'})
            this.modalUtilities.descripcion = ''
            this.getZones();
            this.getModels();
            this.getDevelopers();
            this.getFraccions();
          }
      
          // this.setAllData()
        },
        error:(err:any)=>{
          console.log(err, 'ERROR')
          this.appearToast({message:'Algo salió mal al guardar el registro, verifica tu conexión o comunícate con soporte', title:'Error', type:'error'})
          this.sendingLoad = false
        }
      })
    }, 1100);
    // console.log(reqBody)
  }

  // Funciones para seleccionar rango de tiempo (MESES) --------------------------------------------------
  selectMonth(index:number, item:any, modal:any){
    let meses = this.monthsFeatures.monthsArray
    if(meses[index].selected){ // si está en true, está implicito que ya se había seleccionado, pues todos los item son inicidos en false
      meses[index].selected = false //entonces si al llamar la funcion (al presionar el item) ya estaba en true lo vuelvo a pasar a false
      this.monthsFeatures.trueItems = this.monthsFeatures.trueItems.filter((i:any)=>i.selected) //trueItems va ser igual a todos los items que en su propiedad selected sean true (pues los que deseleccionamos ya no deben pertencer a mi itemsTrue array)      
      this.setDeliverTimer(modal);
      this.monthsFeatures.trueItems.length == 0? modal.TiempoEntrega = '' : '' // Limpia la propiedad "TiempoEntrega" para no que no se muestre nada más el año => '-24' 
    }else { 
      meses[index].selected = true //de lo contrario solo dejo que se sigan cambiando a true // y valido si hay más de 2 selecciones
      
      if(this.monthsFeatures.trueItems.length === 2){ //valida si el index ya es 2 (de los items que están agregados a la propiedad itemsTrue)
        const removedItem = this.monthsFeatures.trueItems.pop(); // mi constante es igual al último elemento de mi trueItems array, que eliminé para que siempre hayan solo 2
  
          const itemIndex = meses.findIndex((i:any) => i.mes === removedItem?.mes); //Busca el index del item que se acaba de remover 
          console.log(itemIndex);
          if (itemIndex != -1) meses[itemIndex].selected = false; // Si me regresa un número, significa que si encontró el index del elemento removido. De lo contrario me va aregresar "-1" porque no lo halló 
      }

      this.monthsFeatures.trueItems.push(item); //Agrego el -item- seleccionando (mediante el checkbox) al array
      // console.log(this.monthsFeatures.trueItems)
      
      this.setDeliverTimer(modal);
      
    }
    // if(trueItems.length > 2){ //valida si el index es mayor a 2 (de los items que están en true)

    //   const removedItem = trueItems.pop(); //Elimina el último elemento de mi array al ser más de 4 
    //   console.log(trueItems)

    //     const itemIndex = array.findIndex((i:any) => i.mes === removedItem?.mes); //Busca el index del penultimo item que se seleccionó 
    //     console.log(itemIndex);
    //     // if (itemIndex != -1) this.resultsCOMP[itemIndex].Active = false;
    // }
  }

  cleanSelection(){
    let meses = this.monthsFeatures
    // for(let r of meses.monthsArray){
    //   r.selected = false
    //   r.rango = false
    // }
    meses.monthsArray.map((m:any) => {m.selected = false, m.rango = false})
    meses.trueItems = [];
    // this.newModalData.TiempoEntrega = 'INMEDIATA'
  }
  setInmediatTime(modalReq: any){
    this.cleanSelection()
    modalReq.TiempoEntrega == 'INMEDIATA'? modalReq.TiempoEntrega = '' : modalReq.TiempoEntrega = 'INMEDIATA'
    console.log(modalReq)
  }

  rangoIndices(arrayIndices:any[]) { //Calcula en base al array de índices que le mande
    let meses = this.monthsFeatures.monthsArray
    const rangoEntreIndices = []
    
    const inicio = Math.min(...arrayIndices); //Organiza cuál es el indice más pequeño para usar en el "for" de manera correcta
    const fin = Math.max(...arrayIndices); //Organiza cuál es el indice más grande para usar en el "for" de manera correcta

    for(let i = inicio+1; i < fin; i++){ rangoEntreIndices.push(i) } //Creo un array con los indices (en base a los números que se dieron como rango) Ejemplo: dados[3,9] => rangos[4,5,6,7,8] 
   
    for (let i = 0; i < meses.length; i++) { 
      rangoEntreIndices.includes(i) ?  meses[i].rango = true  :  meses[i].rango = false //La prop. "rango" de cada item (en cada iteración) la cambiamos a true, si esa iteración (o sea su indice) está dentro de "rangoEntreIndices" Ejemplo: rangoEntreIndices = [2,3,4,5] ; Entonces meses[0],[1],[6],[7],[8],[9],[10],[11] serán falsos.
    } 
    // console.log(meses);
  }

  setDeliverTimer(setModal:any){
    let meses = this.monthsFeatures.monthsArray
    let indexToTest: any = []
    let rangeMontsValue = this.monthsFeatures.trueItems.map((m: any) => m.mes) // Ejemplo: [ENE, ABR] | [JUN, FEB]
    //Reglas de funcion sort: (sort compara por default siempre entre dos valores "a y b" (a-b) )
    //  0 < : a va primero antes que b
    //  0   : a y b tienen el mismo índice así que no se mueve nada
    //  0 > : b va primero antes que a 
    //       a b
    // Ejp: [6,10,5,98]
    //Index que debería tener//  5    1    0    2    9
    const mesesOrdenadosResultado = rangeMontsValue.sort((a: any, b: any) => { // [JUN, FEB, ENE, MAR, OCT]
      return (meses.findIndex((m: any) => m.mes === a)) - (meses.findIndex((m: any) => m.mes === b)); // al hacer siempre "a - b" está implicitio que es el reorden de manera asendente (para hacerlo de manera descendente debería hacerse la resta cambiando los valores "b - a" ) 
    //                          igual al primer argumento (no a 'a')
    });

    setModal.TiempoEntrega = rangeMontsValue.join('-') + `-${this.monthsYear.slice(2)}`
    // console.log(this.monthsFeatures.trueItems, mesesOrdenadosResultado)

    meses.reduce((valorAnt: any, valorAcum: any, index: any) => { //El método reduce me ayudará a encontrar los indices que su prop. selected están "true" (así tengo un array para sacar el un -rango- indices a pintar)
      valorAcum.selected ? indexToTest.push(index) : '' // Crea el array de indices
    }, []); //console.log(indexToTest);

    this.monthsFeatures.trueItems.length == 2? this.rangoIndices(indexToTest) : meses.map((i:any)=>{i.rango=false});
  }
  // -----------------------------------------------------------------------------------------------------

  appearToast(objetoInfo:{message:string, title:string, type:string}){ /* message:string, title:string, type:string */
    this.myToast.toastCalled = true
    this.myToast.toastMessage = objetoInfo.message
    this.myToast.toastTitle = objetoInfo.title
    this.myToast.toastType = objetoInfo.type
     setTimeout(() => {
      this.myToast.toastCalled = false
     }, 4000);
  }
  closeToast(){this.myToast.toastCalled = false}

  esconderUbicacion(ubicacion:any){
    console.log(ubicacion)
    this.sendingLoad = true
    setTimeout(() => {
      this.ubicService.hideUbic({Id:ubicacion.Id}).subscribe({
        next:(res:any)=>{
          ubicacion.Status_Inactivo = true
          this.sendingLoad = false
          this.appearToast({message:'Se ocultó esta vivienda', title:'¡Éxito!', type:'success'})
          this.setAllData()
          console.log(res)
        },
        error:(err:any) => {
          console.log(err, 'ERROR')
          this.appearToast({message:'Algo salió mal al ocultar el registro, verifica tu conexión o comunícate con soporte', title:'Error', type:'error'})
          this.sendingLoad = false
        },
      }) 
    }, 1000);
  }
  mostrarUbicacion(ubicacion:any){
    console.log(ubicacion)
    this.sendingLoad = true
    setTimeout(() => {
      this.ubicService.hideUbic({Id:ubicacion.Id}).subscribe({
        next:(res:any)=>{
        ubicacion.Status_Inactivo = false
        this.sendingLoad = false
        this.appearToast({message:'Se habilitó esta vivienda de nuevo', title:'¡Éxito!', type:'success'})
        this.setAllData()
        console.log(res)
        },
        error:(err:any) => {
          console.log(err, 'ERROR')
          this.appearToast({message:'Algo salió mal al habilitar el registro, verifica tu conexión o comunícate con soporte', title:'Error', type:'error'})
          this.sendingLoad = false
        },
      })
    }, 1000);
  }


  setAllData(){
    this.ubicService.getUbicsForm().subscribe((dta:any)=>{
      this.DATA = dta

      const DATA_COPY = [...this.DATA]
      this.filter_data = [...this.DATA]
      this.DATA_ACTIVE = DATA_COPY.filter((v:any)=>{return v.Status_Inactivo == false})
      this.DATA_INACTIVE = DATA_COPY.filter((v:any)=>{return v.Status_Inactivo == true})
      // console.log(DATA_COPY);
    })
    
  }

  cleanMonths(){
    this.monthsFeatures.monthsArray.map((m:any) => { m.selected = false, m.rango = false } )
    this.monthsFeatures.trueItems = []
    this.newModalData.TiempoEntrega = ''
    this.editModalData.Financiamientos = []
    this.editModalData.Amenidades = []
    // console.log(this.monthsFeatures.monthsArray,this.monthsFeatures.trueItems)
    
  }

  nextPage(){this.page += 5;} //Para paginacion de mis registros
  prevPage(){if(this.page > 0) this.page -= 5} //Para paginacion de mis registros
  buscarItem(toSearch:string){ //Método usado en mi input search
    this.page = 0; //No queremos que se estén aumentando y aumentando el número de page (sino tendríamos que llamar prevPage() para regresar a la page actual)
    this.search = toSearch    
  }


  filterItemsOR(data:any, filters:any) { //Filtra la data que le pasemos y en cada iteración revisa si alguno coincide en campo 'Fraccionamiento' con el value de mis filtros seleccionados por checkbox
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

  markTipoUbic(tipoUbic:string){
    this.tipoUbic = tipoUbic
    console.log(this.tipoUbic);
  }

}
