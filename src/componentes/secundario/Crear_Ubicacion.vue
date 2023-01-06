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
                
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                
                                <h5 class=" font-bold text-xl">Registrar Ubicación</h5>
                    
                            </div>
                
                            <div class="mt-1 border-t border-gray-500">
                            </div>
                
                            <div class="intro-r mt-4 grid grid-cols-6 lg:grid-cols-12 gap-2">
                
                                <div class="col-span-12 lg:col-span-12">
                                    <label for="nombre" class="block text-sm font-semibold leading-5 text-gray-500">Nombre</label>
                                    <input id="nombre" type="text" v-model="nombre" max="100" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-6">
                                    <label for="telefono" class="block text-sm font-semibold leading-5 text-gray-500">Teléfono</label>
                                    <input id="telefono" type="text" v-model="telefono" max="200" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-6">
                                    <label for="direccion" class="block text-sm font-semibold leading-5 text-gray-500">Dirección</label>
                                    <input id="direccion" type="text" v-model="direccion" max="200" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none  focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                            </div>
                
                            <div class="mt-3 relative">
                                
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-500"></div>
                                </div>
                                
                                <div class="relative flex justify-center text-sm">
                                    <span class="pointer px-2 bg-white text-gray-500">
                                        &diams;
                                    </span>
                                </div>
                
                            </div>
                
                            <div class="intro-b mt-3 pb-2">
                
                                <div class="flow-root">
                                    <button type="button" @click="guardar()" class="float-right w-32 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 h-8 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-medium text-white hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
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
    import Ubicacion from '@/controlador/ubicacion'    
    import Funciones from '@/funciones'
    import Aplicacion from '@/controlador/aplicacion'
    
    export default {
    
        name: 'CrearUbicacion',

        components: {
            Barra, Menu, 
        },
        
        data(){

            return{
            
                nombre:'',
                telefono:'',
                direccion:'',
                errores:[]
            
            }
        },

        methods: {
            
            restablecer(){
                this.nombre=''
                this.direccion=''
                this.telefono=''
            },
  
            guardar(){
                
                this.errores = []
  
                if(!this.nombre || this.nombre.toString().length < 5 || this.nombre.toString().length > 100){ this.errores.push('El nombre de ubicación deberá tener mas de 4 caracteres') }
                if(!this.direccion || this.direccion.toString().length < 3 || this.direccion.toString().length > 100){ this.errores.push('La dirección deberá tener mas de 3 caracteres') }
                if(!this.telefono || this.telefono.toString().length < 3 || this.telefono.toString().length >100){ this.errores.push('El teléfono deberá tener mas 3 caracteres') }
            
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
                    
                    Ubicacion.store({
                            'nombre':this.nombre.toString(),
                            'telefono':this.telefono.toString(),
                            'direccion':this.direccion.toString()
                        })
            
                    this.restablecer();
                
                }
              
            }
  
        },

        computed:{
            user(){ return Store.state.user },
        },

        mounted(){
            this.$nextTick(()=>{
                
                Aplicacion.check_login(()=>{
                    
                })

            })
        },
      
    }
</script>
