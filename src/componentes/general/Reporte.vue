<template>
<div class="h-screen overflow-y-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
    <Barra></Barra>
    <Menu></Menu>

    <div class="pb-2 px-2 mx-2 rounded-md rounded-t-none bg-green-600">

        <div class="mx-auto px-2 w-full bg-white rounded py-1">

            <!-- Secciones -->
            <div class="z-10 h-auto min-h-screen w-full max-w-6xl mx-auto">
             
                <div class="flex items-center pt-3 text-indigo-900">
        
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    
                    <h5 class=" font-bold text-xl">Reporte</h5>
        
                </div>
                
                <div class="intro-b mt-3 pb-2">
        
                    <div class="flex w-full space-x-2">
                        
                        <button @click="set_modulo(false)" type="button" :class="modulo == false ? 'border border-green-600 bg-green-600 text-white':'border border-green-600 bg-green-100 text-green-600' " class="flex place-items-center h-8 rounded border px-4 py-1 text-base font-semibold shadow hover:bg-green-200 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p>Buscar</p>
                        </button>
        
                        <button type="button" @click="set_modulo(true)" :class="modulo == true ? 'border border-green-600 bg-green-600 text-white':'border border-green-600 bg-green-100 text-green-600' " class="h-8 flex place-items-center rounded border px-4 py-1 text-base font-semibold shadow hover:bg-green-200 focus:outline-none  focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Reporte
                        </button>
        
                        <button v-if="modulo" title="compactar información" type="button" @click="compactar = !compactar" :class="compactar == !true ? 'border border-green-600 bg-green-600 text-white':'border border-green-600 bg-green-100 text-green-600' " class=" h-8 flex place-items-center rounded px-4 py-1 text-base font-semibold shadow hover:bg-green-200 focus:outline-none  focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            <svg  class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
        
                    </div>
        
                </div>
        
                <div v-if="!modulo" class="mt-1 border-t border-gray-500">
                </div>
        
                <!--Selector producto-->
                <SelectorProducto v-if="!modulo" class="mt-3" @set_producto="set_producto"></SelectorProducto>
        
                <!-- Buscar ubicación -->
                <SelectorUbicacion v-if="!modulo" class="mt-3" @set_ubicacion="set_ubicacion"></SelectorUbicacion>
        
                <div class="mt-3 relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                      <div class="w-full border-t border-gray-500"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">
                          &diams;
                      </span>
                    </div>
                </div>
                
                <div v-if="!modulo" class="intro-b mt-3 pb-2">
        
                    <div class="flow-root">
                        <button type="button" @click="consultar_reporte();" class="float-right w-32 h-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-semibold text-white shadow hover:bg-gray-900 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                          Consultar
                        </button>
                    </div>
        
                </div>
        
                <div v-if="modulo && reporte.id > 0"  class="h-auto intro-r grid grid-cols-6 lg:grid-cols-12 gap-2">
        
                    <!-- detalle producto -->
                    <div  class="color-hueso col-span-12 lg:col-span-12 rounded border border-orange-900 text-gray-500 intro-r mt-3 shadow">
        
                        <div @click="div_producto = !div_producto" class="bg-orange-900 flex justify-between cursor-pointer">
                            
                            <h5 class="ml-2 text-white font-semibold">
                                Detalle del producto
                                <span v-if="!div_producto"> : {{producto_select.nombre}} : {{producto_select.codigo}} : {{precio_sugerido}}</span>
                            </h5>
                            
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg"  :class="div_producto ? 'rotate-180':''" class="text-white transition ease-in-out transform duration-300 h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                        </div>
                        
                        <div v-if="div_producto" class="intro-r mt-2 p-2">
                        
                            <p>Nombre :: <span class="text-green-500"> {{producto_select.nombre}} </span></p>
                            <p>Marca :: <span class="text-green-500">  {{producto_select.marca}} </span></p>
                            <p>Referencia :: <span class="text-green-500">  {{producto_select.referencia}} </span></p>
                            <p>Código :: <span class="text-green-500"> {{producto_select.codigo}} </span></p>
                            <hr class=" border-gray-400" />
                            <p title="según producto" class="font-semibold text-sm text-indigo-500">Margen ganancia :: <span class="text-green-500">{{reporte.margen_ganancia}}% </span></p>
                            <p title="según producto" class="font-semibold text-sm text-indigo-500">Precio sugerido :: <span class="text-green-500"> {{precio_sugerido}} </span></p>
        
                        </div>
        
                    </div>
        
                    <!--última entrada-->
                    <div v-if="reporte.entrada_id > 0" class="h-auto color-hueso col-span-12 lg:col-span-12 rounded border border-blue-800 text-gray-500 intro-r mt-3 shadow">
                        
                        <div @click="div_entrada = !div_entrada" class="bg-blue-800 flex justify-between cursor-pointer">
                            
                            <h5 class="ml-2 text-white font-semibold">
                                Última Entrada
                                <span v-if="!div_entrada"> : {{format_number(reporte.entrada)}} : ${{format_number(reporte.precio_entrada)}}</span>
                            </h5>
                            
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg"  :class="div_entrada ? 'rotate-180':''" class="text-white transition ease-in-out transform duration-300 h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
        
                        </div>
        
                        <div v-if="div_entrada" class="intro-r mt-2 p-2">
                            
                            <p>Entrada :: <span class="text-green-500">  {{format_number(reporte.entrada)}} </span></p>
                            <p>Proveedor :: <span class="text-green-500">  {{reporte.proveedor}} </span></p>
                            <p>Fecha :: <span class="text-green-500">  {{format_fecha(reporte.fecha_entrada) }} </span></p>
                            <hr class="border-gray-400" />
                            <p class="text-indigo-500">Precio de entrada por unidad :: <span class="text-green-500">${{format_number(reporte.precio_entrada)}} </span></p>
                        </div>
        
                    </div>
        
                    <div v-else class="color-hueso col-span-12 lg:col-span-12 rounded border border-lime-600 intro-r mt-3 shadow">
                        <div class="bg-lime-600 flex justify-between">    
                            <h5 class="ml-2 text-white font-semibold">
                                No hay entradas registradas!
                            </h5>
                        </div>
                    </div>
        
                    <!--última salida-->
                    <div v-if="reporte.salida_id > 0" class="color-hueso col-span-12 lg:col-span-12 rounded border border-yellow-600 text-gray-500 intro-r mt-3 shadow">
                        
                        <div @click="div_salida = !div_salida" class="bg-yellow-600 flex justify-between cursor-pointer">
                            
                            <h5 class="ml-2  text-white font-semibold">
                                Última Salida
                                <span v-if="!div_salida"> : {{format_number(reporte.salida)}} : ${{format_number(reporte.precio_salida)}}</span>
                            </h5>
        
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg"  :class="div_salida ? 'rotate-180':''" class="text-white transition ease-in-out transform duration-300 h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
        
                        </div>
        
                        <div v-if="div_salida" class="intro-r mt-2 p-2">
                            
                            <p>Salida :: <span class="text-green-500">  {{format_number(reporte.salida)}} </span></p>
                            <p>Fecha :: <span class="text-green-500">  {{format_fecha(reporte.fecha_salida) }} </span></p>
                            <hr class=" border-gray-400" />
                            <p class="text-indigo-500">Precio de salida por unidad :: <span class="text-green-500">${{format_number(reporte.precio_salida)}} </span></p>
        
                        </div>
        
                    </div>
        
                    <div v-else class="col-span-12 lg:col-span-12 rounded border border-yellow-600 intro-r mt-3 shadow">
                        <div class="bg-yellow-600 flex justify-between">    
                            <h5 class="ml-2 text-white font-semibold">
                                No hay salidas registradas!
                            </h5>
                        </div>
                    </div>
        
                    <!--Saldo ubicación-->
                    <div class="color-hueso col-span-12 lg:col-span-12 rounded border border-sky-800 text-gray-500 intro-r mt-3 shadow">
                        
                        <div @click="div_existencias = !div_existencias" class="bg-sky-800 flex justify-between cursor-pointer">
        
                            <h5 class="ml-2 text-white font-semibold">
                                Existencias en Ubicación
                                <span v-if="!div_existencias"> : {{format_number(reporte.existencias)}} : ${{format_number(reporte.capital_ubicacion)}}</span>
                            </h5>
        
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg"  :class="div_existencias ? 'rotate-180':''" class="text-white transition ease-in-out transform duration-300 h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
        
                        </div>
        
                        <div v-if="div_existencias" class="intro-r mt-2 p-2">
                            <p>Ubicación :: <span class="text-indigo-500">  {{reporte.ubicacion}} </span></p>
                            <p>Total entradas :: <span class="text-green-500">  {{format_number(reporte.total_entradas)}} </span></p>
                            <p>Total salidas :: <span class="text-green-500">  {{format_number(reporte.total_salidas)}} </span></p>
                            <p>Existencias en Ubicación :: <span class="text-green-500">  {{format_number(reporte.existencias)}} </span></p>
                            <hr class=" border-gray-400" />
                            <p title="según última entrada" class="text-indigo-500">Valor del activo según última entrada :: <span class="text-green-500">${{format_number(reporte.capital_ubicacion)}} </span></p>
                            <p title="según última entrada" class="text-indigo-500">Valor en Utilidad según última entrada :: <span class="text-green-500">${{format_number(reporte.utilidad_ubicacion)}} </span></p>
                            
                        </div>
                        
                    </div>
        
                    <!--Saldo global-->
                    <div class="color-hueso col-span-12 lg:col-span-12 rounded border border-green-700 text-gray-500 intro-r mt-3 shadow">
                        
                        <div @click="div_valor_global = !div_valor_global" class="bg-green-800 flex justify-between cursor-pointer">
                            
                            <h5 class="ml-2 text-white font-semibold">
                                Valor Global del Activo
                                <span v-if="!div_valor_global"> : {{format_number(reporte.existencias_global)}} : ${{format_number(reporte.capital_global)}}</span>
                            </h5>
        
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg"  :class="div_valor_global ? 'rotate-180':''" class="text-white transition ease-in-out transform duration-300 h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
        
                        </div>
        
                        <div v-if="div_valor_global" class="intro-r mt-2 p-2">
        
                            <p>Entradas Globales:: <span class="text-green-500"> {{format_number(reporte.entradas_global)}} </span></p>
                            <p>Salidas Globales:: <span class="text-green-500"> {{format_number(reporte.salidas_global)}} </span></p>
                            <p>Existencias Globales:: <span class="text-green-500"> {{format_number(reporte.existencias_global)}} </span></p>
                            <hr class=" border-gray-400" />
                            <p title="según última entrada" class="text-indigo-500">Valor en Activo según última entrada :: <span class="text-green-500">${{format_number(reporte.capital_global)}} </span></p>
                            <p title="según última entrada" class="text-indigo-500">Valor en Utilidad según última entrada :: <span class="text-green-500">${{format_number(reporte.utilidad_global)}} </span></p>
        
                        </div>
                        
                    </div>
        
                </div>
        
                <p v-if="modulo && reporte.id == 0" class="text-gray-500 font-semibold text-md mt-1 text-center">No hay reportes para mostrar!</p>
        
            </div>
        
        </div>

    </div>
    
</div>
</template>

<script>

    import Store from '@/store'
    import Funciones from '@/funciones'
    import Aplicacion from '@/controlador/aplicacion'
    import SelectorUbicacion from '@/componentes/secundario/Selector_Ubicacion'
    import SelectorProducto from '@/componentes/secundario/Selector_Producto'
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'

    export default {

        name: 'Reporte',

        components:{ Barra, Menu, SelectorProducto, SelectorUbicacion },

        data(){

            return{

                modulo:false,
                producto_id:0,
                ubicacion_id:0,
                errores:[],
                pedido:'',
                div_producto:true,
                div_entrada:true,
                div_salida:true,
                div_existencias:true,
                div_valor_global:true,
                compactar:true

            }
        },

        methods:{

            set_modulo(bool){
                this.modulo = bool
            },

            set_producto(number){
                this.producto_id = number
            },

            set_ubicacion(number){
                this.ubicacion_id = number
            },

            set_proveedor(json){
                this.proveedor = json
            },

            consultar_reporte(){
                
                if(this.producto_id > 0 && this.ubicacion_id > 0){
                   Aplicacion.index_reporte({'producto_id':this.producto_id,'ubicacion_id':this.ubicacion_id})
                }else{

                    var nlocal ={
                        'tipo':'alerta', 
                        'titulo':'Seleccione producto y ubicación',
                        'contenido':'',
                        'errores':[]
                    }
          
                    Store.dispatch('add_notificacion',nlocal)
                  
                }

            },

            format_fecha(fecha){

                return Funciones.fecha_iso(fecha,'l')
                    
            },

            format_number(number){
                
                return Funciones.format_tnumber(number)
                
            }

        },

        computed:{

            precio_sugerido(){

                let temp = 'No hay entradas!'

                if(this.reporte.precio_entrada > 0){
                    var valor = ((this.reporte.precio_entrada/100)*this.reporte.margen_ganancia)+this.reporte.precio_entrada
                    temp = '$'+Funciones.format_tnumber(valor)
                }

                return temp
            },

            user(){ return Store.state.user },

            productos(){ return Store.state.productos },
            ubicaciones(){ return Store.state.ubicaciones },

            producto_select(){

                let productos = this.productos
                let reporte = Store.state.reporte
                
                let temp = {'id':0,'nombre':'','marca':'','referencia':'','codigo':''}

                if(reporte.id > 0){
                    temp = productos.find((p)=>p.id == this.producto_id)
                }

                return temp

            },

            ubicacion_select(){

                let ubicaciones = this.ubicaciones

                let temp = {'id':0,'nombre':'','direccion':'','telefono':''}

                if(this.ubicacion_id > 0){
                    temp = ubicaciones.find((u)=>u.id == this.ubicacion_id)
                }

                return temp

            },

            reporte(){ return Store.state.reporte },

        },

        filters:{
            format_number(number){ return Funciones.format_tnumber(number) },
        },

        mounted(){
            this.$nextTick(()=>{

                Aplicacion.check_login(()=>{
                    if(this.reporte.id > 0){
                        this.producto_id = this.reporte.producto_id
                        this.ubicacion_id = this.reporte.ubicacion_id
                    }
                })
                
            })
        },

        watch:{

            reporte(){
                if(this.reporte.id > 0){ this.modulo = true}
            },

            modulo(){

                if(this.modulo){

                    if(this.reporte.ubicacion_id != this.ubicacion_id || this.reporte.producto_id != this.producto_id){
                        this.consultar_reporte()
                    }

                }

            },

            compactar(){
                
                this.div_producto = this.compactar
                this.div_entrada = this.compactar
                this.div_salida = this.compactar
                this.div_existencias = this.compactar
                this.div_valor_global = this.compactar
            
            }

        },


    }

</script>