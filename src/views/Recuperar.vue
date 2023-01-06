<template>
<div class="h-screen max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
    <Barra></Barra>

    <div class=" w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
      
            <div class="pt-2 pl-4 md:pl-0 flex items-center text-green-600 font-bold text-2xl lg:text-4xl">

                <span class="border p-2 shadow-md border-gray-50 rounded mr-2 ">
                  Kar
                </span>

                <span class="border p-2  shadow-md border-gray-600 rounded mt-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-800">
                  dex
                </span>

            </div>


        </div>
    </div>

    <div class="pt-5 lg:w-2/4 mx-auto flex flex-wrap flex-col">

        <div class="mx-2 flex flex-col w-auto lg:w-ful items-center">

            <h1 class="my-4 z-10 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
                Restablecer
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-800">
                  acceso
                </span>
            </h1>

            <div class="bg-gray-800 z-10 opacity-75 w-full shadow-lg rounded-lg px-8 pt-10 pb-3">
                <div class="mb-4">

                    <div class="text-center text-gray-100 text-2xl py-1 font-bold mb-2">
                      <span class="r">Ingese una nueva contraseña</span> 
                    </div>
                      
                    <div class="w-full flex items-center text-gray-200">
                        <hr class="mx-auto w-full mt-2 border border-gray-600 mr-1" />
                    </div>

                    <div class="space-y-5 mt-3">

                        <div>
                            <label toRef="passsord" class="text-gray-100 mt-5"> Nueva</label>
                            <input id="password" v-model="password" placeholder="Az_09*" type="password" class=" border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" />
        
                        </div>
                        
                        <div>
                            <label toRef="conf_password" class="text-gray-100"> Confirmar</label>
                            <input id="conf_password" v-model="conf_password" placeholder="Az_09*" type="password" class="border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" />
                        </div>
    
                    </div>
                    

                    <div class="mt-4 w-full flex items-center text-gray-200">
                        <hr class="mx-auto w-full mt-2 border border-gray-600 mr-1" />
                    </div>

                </div>

                <div class="cursor-pointer w-full text-center pt-4">
                    <div @click="send_request()" class="w-auto bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                      Cambiar
                    </div>
                </div>

            </div>

            <div class="z-0 fixed mx-auto w-3/4 sm:w-3/5 lg:w-2/5 xl:w-2/6 2xl:w-1/5 max-w-2xl">
                <img class="mx-auto w-full" :src="urlsf+ 'images/turquesa.svg'" />
            </div>
            

        </div>

    </div>

</div>
</template>

<script>

import Store from '@/store'
import Barra from '@/componentes/esqueleto/BarraInicio'
import Aplicacion from '../controlador/aplicacion'

export default {

    name: 'Recuperarpass',
  
    components: {
        Barra
    },

    data(){
        return{
            password:'',
            conf_password:'',
            errores:[]
        }
    },

    methods:{

        send_request(){

            this.errores = []

            if(this.password.length < 5 || this.password.length > 20){ this.errores.push('La contraseña debe tener entre 6 y 20 caracteres!') }
            if(this.password !== this.conf_password ){ this.errores.push('La contraseña no coincide') }

            if(this.errores.length){
                
                var nlocal ={
                    'tipo':'alertas',
                    'titulo':'Entrada incompleta',
                    'contenido':'',
                    'errores':this.errores
                }

                Store.dispatch('add_notificacion',nlocal)

            }else{

                const params = this.$route.params
                Aplicacion.recuperar({...params,'password':this.password,'password_confirmation':this.conf_password })
            
            }

        }

    },

    computed:{

        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf }
    }
  
}
</script>