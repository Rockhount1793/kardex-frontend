<template>
<div class="h-auto min-h-screen relative max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
    <Barra></Barra>

    <div class=" w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
      
            <div class="intro-t pt-2 pl-4 md:pl-0 flex items-center text-green-600 font-bold text-2xl lg:text-4xl">

                <span class="border p-2 shadow-md border-gray-50 rounded mr-2 ">
                  Kar
                </span>

                <span class="border p-2  shadow-md border-gray-600 rounded mt-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-800">
                  dex
                </span>

            </div>

            <!--<div class="flex w-1/2 justify-end content-center">
                <a class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
                    <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" ></path>
                    </svg>
                </a>

                <a class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.facebook.com/sharer/sharer.php?u=#" >
                    <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                    </svg>
                </a>
            </div>-->

        </div>
    </div>

    <div class="intro-b pt-5 lg:w-2/4 mx-auto">

        <div class="mx-2 flex flex-col w-auto lg:w-ful items-center">

            <h1 class="my-4 z-10 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
                Iniciar
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-800">
                  Sesión
                </span>
            </h1>

            <form @submit.prevent="submit" class="bg-gray-800 z-10 opacity-75 w-full shadow-lg rounded-lg px-8 pt-10 pb-3">
                <div class="mb-4">

                    <label class="block text-gray-100 py-2 font-bold mb-2">
                      Entrar con
                    </label>
                      
                    <div class="w-20 inline-flex py-1 border border-gray-600 rounded shadow-sm bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <img class="mx-auto w-auto h-7" :src="urlsf + 'images/google_logo.svg'" alt="google logo" />
                    </div>

                    <div class="w-20 ml-2 inline-flex py-1 border border-gray-600 rounded shadow-sm bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <img class="mx-auto w-auto h-7" :src="urlsf + 'images/facebook_logo.svg'" alt="google logo" />
                    </div>

                    <div class="w-20 ml-2 inline-flex py-1 border border-gray-600 rounded shadow-sm bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <img class="mx-auto w-auto h-7" :src="urlsf + 'images/twitter_logo.svg'" alt="google logo" />
                    </div>

                    <div class="mt-3 w-full flex text-xs lg:text-sm items-center text-gray-200">
                        <hr class="mx-auto w-20 lg:w-40 mt-2 border border-gray-600 mr-1" /> O continuar con email<hr class="mx-auto ml-1 w-20 lg:w-40 mt-2 border border-gray-600" />
                    </div>

                    <label for="email" class="sr-only">email</label>
                    <input id="email" name="email" autocomplete="on" placeholder="usuario@dominio.com" type="text" v-on:keyup.enter="set_email()" v-model="email" class="text-center mt-2 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" />
                    
                    <label for="password" class="sr-only">password</label>
                    <input id="password" name="password" autocomplete="current-password" placeholder="contraseña" type="password" v-on:keyup.enter="set_password()" v-model="password" class="text-center mt-2 border rounded w-full p-2 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" />

                    <div class="flex mt-3 items-center justify-between">

                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" v-on:keyup.enter="check_recuerdame()" v-model="remember" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm text-green-500">
                              Mantener sesión iniciada
                            </label>
                        </div>

                        <div class="text-sm">
                            <router-link to="/restaurar" class="cursor-pointer font-medium text-green-500 hover:text-green-300">
                              ¿Olvido su contraseña?
                            </router-link>
                        </div>

                    </div>

                </div>

                <div class="cursor-pointer flex items-center pt-4">
                    <button type="button" @click="login()" id="btn-continuar" v-on:keyup.enter="login()" class="mx-auto bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                      Continuar
                    </button>
                </div>

            </form>

            <div class="z-0 fixed mx-auto w-3/4 sm:w-3/5 lg:w-2/5 xl:w-2/6 2xl:w-1/5 max-w-2xl">
                <img class="mx-auto w-full" :src="urlsf+ 'images/turquesa.svg'" />
            </div>
            

        </div>

    </div>

    <Footer></Footer>

</div>
</template>

<script>

import Store from '@/store'
import Barra from '@/componentes/esqueleto/BarraInicio'
import Aplicacion from '@/controlador/aplicacion'
import Funciones from '@/funciones/index'
import Footer from '@/componentes/esqueleto/Footer'

export default {

    name:'Entrar',

    components: {
        Barra, Footer
    },

    data(){
        return{
            remember:false,
            email:'',
            password:'',
            errores:[]
        }
    },

    methods:{

        recuperar_pass(){
            alert('Esta función no esta disponible!')
        },

        set_email(){ 
            
            if(!Funciones.check_email(this.email.toLowerCase())){
                
                var nlocal ={
                    'tipo':'advertencia', 
                    'titulo':'Formato de email incorrecto!',
                    'contenido':'',
                    'errores':[]
                }

                //local
                Store.dispatch('add_notificacion',nlocal)

            }
            else{
                document.getElementById('password').focus()
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
                document.getElementById('remember-me').focus()
            }

        },


        check_recuerdame(){

            if(!this.remember){
                this.remember = true  
            }

            var nlocal ={
                'tipo':'informativo', 
                'titulo':'Se marco la sesión como activa!',
                'contenido':'',
                'errores':[]
            }

            //local
            Store.dispatch('add_notificacion',nlocal)

            document.getElementById('btn-continuar').focus()

        },

        login(){

            this.errores=[]
            
            if(!Funciones.check_email(this.email)){ this.errores.push('Formato de email incorrecto') }
            if(this.password.toString().length <= 5 || this.password.toString().length >= 13){ this.errores.push('La contraseña debe tener entre 6 y 12 caracteres!') }

            if(!this.errores.length){
                Aplicacion.login({'email':this.email.toLowerCase(),'password':this.password,'recuerdame':this.remember})
            }else{
                
                var nlocal ={
                    'tipo':'alertas', 
                    'titulo':'Entrada incompleta',
                    'contenido':'',
                    'errores':this.errores
                }

                //local
                Store.dispatch('add_notificacion',nlocal)
            }

        }
        
    },

    computed:{

        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf }
    },

    mounted(){
        this.$nextTick(()=>{
            Aplicacion.si_login()
        })
    }
  
}
</script>