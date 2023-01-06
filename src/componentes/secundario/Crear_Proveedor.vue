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
                
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                
                                <h5 class=" font-bold text-xl">Registrar Proveedor</h5>
                    
                            </div>
                
                            <div class="mt-1 border-t border-gray-500">
                            </div>
                
                            <div class="intro-r mt-4 grid grid-cols-6 lg:grid-cols-12 gap-2">
                
                                <div class="col-span-12 lg:col-span-12">
                                    <label for="nombrepro" class="block text-sm font-semibold leading-5 text-gray-500">Empresa</label>
                                    <input id="nombrepro" type="text" placeholder="Andina.." v-model="nombre" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-6">
                                    <label for="contactopro" class="block text-sm font-semibold leading-5 text-gray-500">Encargado</label>
                                    <input id="contactopro" type="text" placeholder="Sandra B.." v-model="contacto" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-12 lg:col-span-6">
                                    <label for="emailpro" class="block text-sm font-semibold leading-5 text-gray-500">Email</label>
                                    <input id="emailpro" type="email" placeholder="andina@andina.net" v-model="email" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-6 lg:col-span-4">
                                    <label for="telepro" class="block text-sm font-semibold leading-5 text-gray-500">Teléfono</label>
                                    <input id="telepro" type="text" placeholder="+576123456" v-model="telefono" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                
                                <div class="col-span-6 lg:col-span-8">
                                    <label for="direccpro" class="block text-sm font-semibold leading-5 text-gray-500">Dirección</label>
                                    <input id="direccpro" type="text" placeholder="K0 0-0" v-model="direccion" class="shadow-lg h-7 rounded mt-1 form-input block w-full py-1 px-2 border border-gray-400 focus:outline-none  focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                                    <button type="button" @click="guardar();" class="float-right w-32 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 h-8 inline-flex justify-center rounded border border-transparent px-4 py-1 bg-green-600 text-base leading-6 font-medium text-white hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
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
    import Funciones from '@/funciones'
    import Aplicacion from '@/controlador/aplicacion'
    import Proveedor from '@/controlador/proveedor'

    export default {
    
        name: 'CrearProveedor',

        components: {
            Barra, Menu, 
        },
    
        data(){

            return{
            
                nombre:'',
                contacto:'',
                email:'',
                telefono:'',
                direccion:'',
                errores:[]
            
            }
        },

        methods: {
          
            restablecer(){
              this.nombre=''
              this.contacto=''
              this.email= ''
              this.direccion=''
              this.telefono=''
            },

            guardar(){
              
                this.errores = []

                if(this.nombre.toString().length < 5 || this.nombre.toString().length > 100){ this.errores.push('El nombre de empresa deberá tener más de 4 caracteres') }
                if(this.contacto.toString().length < 3 || this.contacto.toString().length > 100){ this.errores.push('El nombre de contacto deberá tener más de 3 caracteres') }
                if(this.direccion.toString().length < 3 || this.direccion.toString().length > 100){ this.errores.push('La dirección deberá tener más de 3 caracteres') }
                if(this.telefono.toString().length < 3 || this.telefono.toString().length >100){ this.errores.push('El teléfono deberá tener más de 3 caracteres') }
                if(!Funciones.check_email(this.email) || this.email.toString().length > 200){ this.errores.push("Ingrese un email con un formato valido!") }

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
                  
                    var emaillower = this.email.toLowerCase()
                  
                    Proveedor.store({
                        'email':emaillower,
                        'nombre':this.nombre.toString(),
                        'contacto':this.contacto.toString(),
                        'telefono':this.telefono.toString(),
                        'direccion':this.direccion.toString()
                    })
                      
                    this.restablecer()

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
        }
      
    }

</script>

