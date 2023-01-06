<template>
    <div class="h-screen overflow-y-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
        
        <Barra></Barra>
        <Menu></Menu>
        <!--<Herramientas></Herramientas>-->
    
        <div class="pb-2 px-2 mx-2 rounded-md rounded-t-none bg-green-600">
    
            <div class="mx-auto px-2 w-full bg-white rounded py-1">
    
                <!-- Secciones -->
                <div class="z-10 w-full">
                    <div class="max-w-6xl mx-auto">
                        <div class="w-full">
                
                            <div class="flex items-center pt-3 text-indigo-900">
                
                                <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                
                                <h5 class=" font-bold text-xl">Registrar Salida</h5>
                    
                            </div>
                
                            <div class="mt-1 border-t border-gray-500">
                            </div>
                
                            <!--Selector producto-->
                            <SelectorProducto class="mt-3" @set_producto="set_producto"></SelectorProducto>
                
                            <!-- Buscar ubicación -->
                            <SelectorUbicacion class="mt-3" @set_ubicacion="set_ubicacion"></SelectorUbicacion>
                
                            <div v-if="ultima_entrada.id > 0" class="color-hueso border-blue-900 text-gray-500 rounded border intro-r mt-3 shadow">
                                
                                <div class="bg-blue-900">
                                    <p class="font-semibold text-white text-center">Última entrada</p>
                                </div>
                
                                <hr>
                                    <div class="mt-2 p-2">
                                        
                                        <p>Entrada :: <span class="text-green-500">  {{format_number(ultima_entrada.cantidad)}} </span></p>
                                        <p>Proveedor :: <span class="text-green-500">  {{format_number(ultima_entrada.proveedor)}} </span></p>
                                        <p>Fecha :: <span class="text-green-500">  {{format_fecha() }} </span></p>
                                        <hr>
                                        <p>Total entradas :: <span class="text-green-500">  {{format_number(ultima_entrada.entradas)}} </span></p>
                                        <p>Total salidas :: <span class="text-green-500">  {{(ultima_entrada.salidas)}} </span></p>
                                        <p class="font-semibold">Existencias :: <span class="text-green-500">  {{ultima_entrada.entradas - ultima_entrada.salidas}} </span></p>
                                        <hr>
                                        <p>Precio de entrada :: <span class="text-green-500">  ${{format_number(ultima_entrada.costo_unidad)}} </span></p>
                                        <p>Margen Ganancia :: <span class="text-green-500">  {{ultima_entrada.margen_ganancia}}% </span></p>
                                        <p class="text-indigo-500">Precio de salida :: <span class="text-green-500">${{format_number(ultima_entrada.precio_sugerido)}} </span></p>
                
                                    </div>
                                <hr>
                            </div>
                
                            <div class="color-hueso rounded border border-green-700 pb-0.5 intro-r mt-3 shadow">
                
                                <div class="bg-green-800">
                                    <p class="text-center font-semibold text-md text-white ">Pedido</p>
                                </div>
                
                                <div class="color-hueso px-3 intro-r mt-4 grid grid-cols-6 lg:grid-cols-12 gap-2">
                
                                    <div class="col-span-12 lg:col-span-4 mt-3">
                                        <label for="pedido" class="block text-sm font-semibold leading-5 text-gray-500">N. Consecutivo / Registro</label>
                                        <input id="pedido" type="text" placeholder="#000000" v-model="pedido" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none  focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    </div>
                
                                    <div class="col-span-12 lg:col-span-4 mt-3">
                                        <label for="telepro" class="block text-sm font-semibold leading-5 text-gray-500">Cantidad</label>
                                        <input id="telepro" type="number" v-model="cantidad" max="200" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    </div>
                
                                    <div class="col-span-12 lg:col-span-4 mt-3">
                                        <label for="cunidad" class="block text-sm font-semibold leading-5 text-gray-500">Costo Unidad</label>
                                        <input id="cunidad" type="number" v-model="costo_unidad" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none  focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    </div>
                
                                    <div class="col-span-12 lg:col-span-12">
                                        <p class="text-center py-2 text-lg font-semibold leading-5 text-indigo-500">
                                            Costo Total $
                                            <span v-if="costo_total[0] >= 1">{{costo_total[1]}}</span>
                                            <span v-else>0</span>
                                        </p>
                                    </div>
                                
                                </div>
                
                            </div>
                
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
                
                            <div class="intro-b mt-3 pb-2">
                
                                <div class="flow-root">
                                    <button type="button" @click="guardar();" class="float-right w-32 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 h-8 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                        Guardar
                                    </button>
                                </div>
                
                            </div>
                
                        </div>
                    </div>
                </div>    
    
    
            </div>
    
        </div>
        
    </div>
</template>
    
<script>
    
    import Store from '@/store'
    import Funciones from '@/funciones'
    import Salida from '@/controlador/salida'
    import SelectorProducto from '@/componentes/secundario/Selector_Producto'
    import SelectorProveedor from '@/componentes/secundario/Selector_Proveedor'
    import SelectorUbicacion from '@/componentes/secundario/Selector_Ubicacion'
    import Entrada from '@/controlador/entrada'
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'
    import Aplicacion from '@/controlador/aplicacion'

    export default {

        name: 'Crear-Salida',

        components:{ Barra, Menu, SelectorProducto, SelectorProveedor, SelectorUbicacion },

        data(){

            return{

                producto_id:0,
                ubicacion_id:0,
                costo_unidad:0,
                cantidad:1,
                errores:[],
                pedido:'#0001'

            }
        },

        methods:{

            set_producto(number){
                this.producto_id = number
            },

            set_ubicacion(number){
                this.ubicacion_id = number
            },
          
            restablecer(){
                this.producto_id = 0
                this.ubicacion_id = 0
                this.costo_unidad = 0
                this.cantidad = 1,
                this.pedido = ''
            },

            guardar(){
                
                this.errores = []

                if(this.producto_id == 0){ this.errores.push('Seleccione un producto') }
                if(this.ubicacion_id == 0 ){ this.errores.push('Seleccione una ubicación') }
                if(!this.costo_unidad || parseInt(this.costo_unidad) == 0 || parseInt(this.costo_unidad) >= 4294967295){ this.errores.push('Ingrese un valor para costo unidad valido') }
                if(!this.cantidad || parseInt(this.cantidad) == 0 || parseInt(this.cantidad) >= 4294967295){ this.errores.push("Ingrese un valor cantidad valido") }
                if(!this.pedido || this.pedido.toString().length == 0 ){ this.errores.push('Ingrese un consecutivo o registro') }

                if(this.errores.length){

                    var nlocal ={
                        'tipo':'alertas',
                        'titulo':'Entrada incompleta',
                        'contenido':'',
                        'errores':this.errores
                    }

                    Store.dispatch('add_notificacion',nlocal)

                }
                else{

                    Salida.store({
                            'producto_id':this.producto_id,
                            'ubicacion_id':this.ubicacion_id,
                            'costo_unidad':parseInt(this.costo_unidad),
                            'cantidad':this.cantidad,
                            'pedido':this.pedido
                            })

                   // this.restablecer()
                
                }
              
            },

            consultar_entrada(){
                if(this.producto_id > 0 && this.ubicacion_id > 0){
                    Entrada.latest({'producto_id':this.producto_id,'ubicacion_id':this.ubicacion_id})
                }
            },

            format_fecha(){

                if(this.ultima_entrada.id >0){
                    let iso = Funciones.fecha_iso(this.ultima_entrada.created_at,'l')
                    return iso
                }

                return 0
            },

            format_number(number){
                
                if(this.ultima_entrada.id >0){
                    return Funciones.format_tnumber(number)
                }

                return 0
            }

        },

        computed:{

            user(){ return Store.state.user },

            costo_total(){
            
                var temp = 0

                try{
                   let costo_unidad = parseInt(this.costo_unidad)
                   let cantidad = parseInt(this.cantidad)    
                   temp = cantidad * costo_unidad
                } catch (error){
                    console.log(error)
                }
                
                return [temp,Funciones.format_tnumber(temp)]

            },

            productos(){ return Store.state.productos },

            producto_select(){

                let productos = this.productos

                let temp = {}

                if(this.producto_id > 0){
                    temp = productos.find((p)=>p.id == this.producto_id)
                }

                return temp

            },

            ultima_entrada(){ return Store.state.ultima_entrada },

        },

        filters:{
            format_number(number){ return Funciones.format_tnumber(number) },
        },

        mounted(){
            this.$nextTick(()=>{
                
                Aplicacion.check_login(()=>{
                    Store.commit('set_ultima_entrada',{'id':0,'precio_sugerido':0})
                })

            })
        },

        watch:{
            
            ultima_entrada(){
                this.costo_unidad = this.ultima_entrada.precio_sugerido 
            },

            producto_id(){
                this.consultar_entrada()
            },

            ubicacion_id(){
                this.consultar_entrada()
            }

        }

    }

</script>
