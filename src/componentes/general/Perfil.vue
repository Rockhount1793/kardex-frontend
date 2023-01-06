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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
        
                    <h5 class=" font-bold text-xl">Perfil</h5>
        
                </div>
                
                <div class="intro-b mt-3 pb-2">
        
                    <div class="flex w-full space-x-2">
                        
                        <button @click="set_modulo(1)" type="button" :class="modulo == 1 ? 'border border-green-600 bg-green-600 text-white':'border border-green-600 bg-green-100 text-green-600' " class="flex place-items-center h-8 rounded border px-4 py-1 text-base font-semibold shadow hover:bg-green-200 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                              
                            <p>Información</p>
                        </button>
        
                        <button type="button" @click="set_modulo(2)" :class="modulo == 2 ? 'border border-green-600 bg-green-600 text-white':'border border-green-600 bg-green-100 text-green-600' " class="h-8 flex place-items-center rounded border px-4 py-1 text-base font-semibold shadow hover:bg-green-200 focus:outline-none  focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                              
                            Seguridad
                        </button>
        
        
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
        
                <div v-if="modulo == 1"  class="h-auto intro-r grid grid-cols-6 lg:grid-cols-12 gap-2">
        
                    <!--general-->
                    <div class="color-hueso col-span-12 lg:col-span-12 rounded border border-gray-300 text-gray-500 intro-r mt-3 shadow">
                        
                        <div  class="px-2 flex justify-between border-b">
                            
                            <h5 class="text-gray-500 font-semibold">
                                General
                            </h5>
        
                        </div>
        
                        <div class="intro-r mt-2 px-2">
                            <p>Email:: <span class="text-green-500">{{ user.email }}</span></p>
                            <p>Actualizado:: <span class="text-green-500">{{ format_fecha(user.updated_at) }}</span></p>
                        </div>
                        
                    </div>

                    <div class="col-span-12 intro-b mt-3 pb-2">
        
                        <div class="flow-root">
                            <!--<button type="button" class="float-right w-32 h-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-semibold text-white shadow hover:bg-gray-900 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Guardar
                            </button>-->
                        </div>
            
                    </div>
        
                </div>

                <div v-if="modulo == 2"  class="h-auto intro-r grid grid-cols-6 lg:grid-cols-12 gap-2">
        
                    <!--seguridad-->
                    <div class="color-hueso col-span-12 lg:col-span-12 rounded border border-gray-300 text-gray-500 intro-r mt-3 shadow">
                        
                        <div  class="px-2 flex justify-between border-b">
                            
                            <h5 class="text-gray-500 font-semibold">
                                Cambiar contraseña
                            </h5>
        
                        </div>
        
                        <div class="intro-r mt-2 px-2 pb-3">
                            <input id="password" v-model="password" v-on:keyup.enter="set_password()" autocomplete="password" placeholder="actual" type="password" class="text-center mt-2 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition  duration-300 ease-in-out" />
                            <input id="new_password" v-model="new_password" v-on:keyup.enter="set_new_password()" autocomplete="new-password" placeholder="nueva" type="password" class="text-center mt-2 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition duration-300 ease-in-out" />
                            <input id="confirmacion" v-model="confirmacion" v-on:keyup.enter="set_confirmacion()" placeholder="confirmar" type="password" class="text-center mt-2 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition duration-300 ease-in-out" />        
                        </div>
                        
                    </div>

                    <div class="col-span-12 intro-b mt-3 pb-2">
        
                        <div class="flow-root">
                            <button @click="update_password();" type="button" class="float-right w-32 h-8 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 inline-flex justify-center rounded border border-transparent px-4 py-1 text-base leading-6 font-semibold text-white shadow hover:bg-gray-900 focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                              Guardar
                            </button>
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
    import Aplicacion from '@/controlador/aplicacion'
    import Usuario from '@/controlador/usuario'
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'

    export default {

        name: 'Usuario',

        components:{ Barra, Menu },

        data(){

            return{

                modulo:1,
                password:'',
                new_password:'',
                confirmacion:'',
                errores:[],
               
            }
        },

        methods:{

            set_modulo(num){
                this.modulo = num
            },

            actualizar(){
                
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

            set_password(){ 
            
                if(this.password.length <= 5 || this.password.length >= 13){

                    var nlocal ={
                        'tipo':'advertencia', 
                        'titulo':'La contraseña debe tener entre 6 y 12 caracteres!',
                        'contenido':'',
                        'errores':[]
                    }

                    //local
                    Store.dispatch('add_notificacion',nlocal)

                }
                else{
                    document.getElementById('new_password').focus()
                }

            },

            set_new_password(){ 
            
                if(this.new_password.length <= 5 || this.new_password.length >= 13){

                    var nlocal ={
                        'tipo':'advertencia', 
                        'titulo':'La contraseña debe tener entre 6 y 12 caracteres!',
                        'contenido':'',
                        'errores':[]
                    }

                    //local
                    Store.dispatch('add_notificacion',nlocal)

                }
                else{
                    document.getElementById('confirmacion').focus()
                }

            },

            set_confirmacion(){ 

                if(this.new_password !== this.confirmacion){

                    var nlocal ={
                        'tipo':'advertencia', 
                        'titulo':'La contraseña no coincide!',
                        'contenido':'',
                        'errores':[]
                    }

                    //local
                    Store.dispatch('add_notificacion',nlocal)

                }
                else{
                    this.update_password()
                }

            },

            update_password(){

                this.errores = []

                if(this.password.length < 5 || this.password.length > 20){ this.errores.push('La actual contraseña debe tener entre 6 y 20 caracteres!') }
                if(this.new_password.length < 5 || this.new_password.length > 20){ this.errores.push('La nueva contraseña debe tener entre 6 y 20 caracteres!') }
                if(this.confirmacion.length < 5 || this.confirmacion.length > 20){ this.errores.push('La confirmación contraseña debe tener entre 6 y 20 caracteres!') }
                if(this.new_password !== this.confirmacion ){ this.errores.push('La contraseña no coincide') }
                
                if(!this.errores.length){
                    Usuario.change_password(
                        {
                            'actual_password': this.password,
                            'password': this.new_password,
                            'password_confirmation': this.confirmacion
                        }
                    )

                    this.password = ''
                    this.new_password = ''
                    this.confirmacion = ''
                }
                else{
                
                    var nlocal ={
                        'tipo':'alertas', 
                        'titulo':'Entrada incorrecta',
                        'contenido':'',
                        'errores':this.errores
                    }
                
                    //local
                    Store.dispatch('add_notificacion',nlocal)
                
                }
            },

            format_fecha(fecha){

                return Funciones.fecha_iso(fecha,'l')

            }

        },

        computed:{

            login(){ return Store.state.login },
            user(){ return Store.state.user },
            token(){ return Store.state.token },

        },

        filters:{

            format_number(number){ return Funciones.format_tnumber(number) },
        },

        mounted(){
            this.$nextTick(()=>{

                Aplicacion.check_login(()=>{
                    
                })
                
            })
        },

        watch:{

        },


    }

</script>