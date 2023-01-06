<template>
    <div class="h-screen overflow-y-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
        
        <Barra></Barra>
        <Menu></Menu>
    
        <div class="pb-2 px-2 mx-2 rounded-md rounded-t-none bg-green-600">
    
            <div class="mx-auto px-2 w-full bg-white rounded py-1">
    
                <!-- Secciones -->
                <div class="z-10 w-full">
                    <div class="max-w-6xl mx-auto">
                        <div class="w-full">
                
                            <div class="flex items-center pt-3 text-indigo-900">
                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                
                                <h5 class=" font-bold text-xl">Registrar Producto</h5>
                    
                            </div>
                
                            <div class="mt-1 border-t border-gray-500">
                            </div>
                
                            <div class="intro-r mt-4 grid grid-cols-6 lg:grid-cols-12 gap-2">
                
                                <div class="col-span-12 lg:col-span-12">
                                    <label for="nombrepro" class="block text-sm font-semibold leading-5 text-gray-500">Nombre</label>
                                    <input id="nombrepro" type="text" placeholder="Articulo" v-model="nombre" max="100" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-12">
                                    <label for="marca" class="block text-sm font-semibold leading-5 text-gray-500">Marca</label>
                                    <input id="marca" type="text" placeholder="Pato" v-model="marca" max="100" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-12">
                                    <label for="referencia" class="block text-sm font-semibold leading-5 text-gray-500">Referencia</label>
                                    <input id="referencia" type="text" placeholder="#Ref-123" v-model="referencia" max="100" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                                
                                <div class="col-span-12">
                                    <label for="margen" class="block text-sm font-semibold leading-5 text-gray-500">Margen de Ganancia por venta %1 ~ %200</label>
                                    <input id="margen" type="number" v-model="margen" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-12">
                                    <span v-if="codigo_sug.length" class="block text-sm font-semibold leading-5 text-gray-500">Código interno | <span class="text-indigo-400"></span> {{ codigo_sug }} </span>
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
                                    <button type="button" @click="guardar();" class="float-right w-32 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-lg h-8 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-medium text-white hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
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
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'
    import Producto from '@/controlador/producto'    
    import Funciones from '@/funciones'
    import Aplicacion from '@/controlador/aplicacion'
    
    export default {

        name: 'CrearProducto',
      
        components: {
            Barra, Menu, 
        },
    
        data(){

            return{
            
                nombre:'',
                margen:20,
                errores:[],
                imagen:[],
                referencia:'',
                color:'',
                marca:''
            }
        },   

        methods:{

            random_color(){
                let n = (Math.random() * 0xfffff * 1000000).toString(16)
                return '#' + n.slice(0,6)
            },
            
            restablecer(){
                this.nombre = ''
                this.margen = 20
                this.color = ''
                this.imagen = []
                this.marca = ''
                this.referencia = ''
            },
            
            guardar(){
                
                this.errores = []
            
                if(this.nombre.toString().length < 3 || this.nombre.toString().length > 100){ this.errores.push('El nombre de producto deberá tener entre 3 y 100 caracteres') }
                if(this.marca.toString().length < 3 || this.nombre.toString().length > 50){ this.errores.push('La marca de producto deberá tener entre 3 y 100 caracteres') }
                if(this.referencia.toString().length < 3 || this.referencia.toString().length > 100){ this.errores.push('La referencia de producto deberá tener entre 3 y 100 caracteres') }
                if(!this.margen || parseInt(this.margen) < 1 || parseInt(this.margen) > 5000){ this.errores.push('El margen de ganancia deberá ser entre 1 y 5000%') }
            
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
            
                    Producto.store({
                        'nombre':this.nombre.toString(),
                        'marca':this.marca.toString(),
                        'referencia':this.referencia.toString(),
                        'margen_ganancia':parseInt(this.margen),
                        'codigo':this.codigo_sug,
                        'color':this.random_color(),
                        'imagen':null,
                        'bool_imagen':false
                    })
            
                    this.restablecer()
            
                }
              
            }
            
        },
            
        computed:{
            
            user(){ return Store.state.user },
            
            codigo_sug(){
                return Funciones.codigo_sugerido(this.nombre, this.marca, this.referencia)
            }
            
        },
            
        mounted(){
            this.$nextTick(()=>{
                
                Aplicacion.check_login(()=>{
                    
                })  

            })
        }
      
    }
</script>
