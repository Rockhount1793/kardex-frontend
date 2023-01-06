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
                  Contraseña
                </span>
            </h1>

            <div class="bg-gray-800 z-10 opacity-75 w-full shadow-lg rounded-lg px-8 p-5">

                <p class="text-center text-white font-semibold ">Ingrese el email asociado a su cuenta:</p>
                <input id="emailaddress" v-model="email" placeholder="usuario@dominio.com" type="text" class="text-center mt-5 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" />

                <div class="cursor-pointer w-auto flex items-center pt-5">
                    <b @click="restablecer()" class="text-center w-full bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                      Continuar
                    </b>
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
import Funciones from '@/funciones/index'
import Aplicacion from '@/controlador/aplicacion'


export default {

    name: 'Restaurarpass',
  
    components: {
        Barra
    },

    data(){
        return{
            remember:FontFaceSetLoadEvent,
            email:'',
            capcha_token:''
        }
    },

    methods:{
        
        validar() {
      
            grecaptcha.ready(()=> {
                grecaptcha.execute(this.capcha_key_site, {action:'restablecer'}).then((token)=> {
                  this.capcha_token = token
                })
            })

        },

        restablecer(){

            
            if( Funciones.check_email( this.email.toLowerCase()) ){
                Aplicacion.loading(true)
                this.validar()
                //this.send_restablecer()
            }
            else{
            
                var nlocal ={
                    'tipo':'advertencia', 
                    'titulo':'Formato de email incorrecto!',
                    'contenido':'',
                    'errores':[]
                }
            
                //local
                Store.dispatch('add_notificacion',nlocal)
            
            }
        },

        send_restablecer(){
            Aplicacion.restablecer({'token':this.capcha_token,'email':this.email.toLowerCase()})
        },

    },

    computed:{

        capcha_key_site(){ return Store.state.g_capcha_key_site },
        count(){ return Store.state.count },
        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf }
    
    },

    mounted(){
        this.$nextTick(()=>{
            Aplicacion.si_login()
        })
    },

    watch:{
        capcha_token(){
            if(this.capcha_token.length > 20){
                this.send_restablecer()
            }
        }
    }
  
}
</script>