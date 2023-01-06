<template>
  <div class="border-b border-green-600 max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400 z-0">
    
    <div class="flow-root ">

        <div class="flex items-center w-auto float-left mr-3">

            <Router-link to="/" class="ml-2 mr-2">
                <img class="w-10 h-10 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" :src="urlsf +'images/turquesa.svg'" alt="Kardex logo" />
            </Router-link>

            <div class="flex items-center text-green-600 font-bold text-xl">

                <span class="border border-r-0 p-0.5 border-gray-50 rounded-l">
                  Kar
                </span>

                <span class="border border-l-0 p-0.5 border-gray-600 rounded-r bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-800">
                  dex
                </span>

            </div>

            <div class="mt-4 ml-2">
                <span class="text-xs font-thin text-green-800">[{{version}}]</span>
            </div>

            <!--<div class="ml-2 flex border rounded shadow-md border-green-400 float-left py-1 px-1">
            
                <div class="bg-green-600 flex items-center mr-1 p-1 px-4 py-0.5 rounded text-white font-semibold shadow-md" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Entradas
                </div> 

                <div class="bg-green-100 flex items-center mr-1 p-1 px-4 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Salidas
                </div>
                
            
            </div>-->

        </div>

        <div class="float-right flex items-center p-0.5">

            <!--<Temas></Temas>-->
            <Notificaciones></Notificaciones>

            <div class="flex-none">

                <div @click="menu_perfil = true" class="cursor-pointer w-9 h-9">

                    <img v-if="user.avatar" class="rounded-full" :src="urlsb+'storage/avatar/'+user.avatar" alt="avatar" />

                </div>

                <div v-if="menu_perfil" v-click-away="ocultar_menu_perfil" class="intro-b border border-green-100 rounded-md shadow-xl bg-green-800 mr-6 z-20 absolute right-0 mt-1 w-auto">
                    <div class="text-white">

                        <div class="p-2">
                            
                            <div @click="set_route('Perfil'); set_seccion_num([200,20]);" :class="seccion_num[0] == 200 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <p class="group-hover:text-green-700 text-sm font-semibold">
                                    Perfil
                                </p>
                            </div>

                            <!--<div class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-6 w-6 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p class="group-hover:text-green-700 text-sm font-semibold">
                                    Configuración
                                </p>
                            </div>-->

                        </div>

                        <div  class="pointer p-2 border-t">
                            <div @click="cerrar_sesion()"  class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-6 w-6 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <p class="group-hover:text-green-700 text-sm font-semibold">
                                    Cerrar Sesión
                                </p>
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

    import Notificaciones from '@/componentes/esqueleto/Notificaciones'
    import Temas from '@/componentes/esqueleto/Temas'
    import Aplicacion from '@/controlador/aplicacion'
    import Store from '@/store'
    import Router from '@/router'
    
    export default {

        name:'Barra',

        data(){
            return{
                menu_perfil:false
            }
        },

        components:{
            Notificaciones, Temas
        },

        methods:{

            set_route(name){ Router.push({'name':name}) },
            ocultar_menu_perfil(){ this.menu_perfil=false },
            cerrar_sesion(){ Aplicacion.logout() },
            set_seccion_num(array){ Store.commit('set_seccion_num',array) }

        },

        computed:{

            seccion_num(){ return Store.state.seccion_num },
            user(){ return Store.state.user },
            urlsf(){ return Store.state.urlsf },
            urlsb(){ return Store.state.urlsb },
            version(){ return Store.state.version_num +' '+Store.state.version_date }
        }

    }

</script>

<style scoped>

</style>