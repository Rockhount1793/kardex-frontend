<template>
<div>
    <div class="object-right-bottom right-0 mr-5 mb-5 bottom-0 absolute z-50">

        <!--completado con texto-->
        <div :key="key" v-for="(complete,key) in completado" class="intro-l p-1 shadow-xl flex-row mb-1 rounded bg-gradient-to-r from-green-300 via-green-400 to-green-500 border border-green-900">
        
            <div class="flex items-center">
            
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>

                <h3 class="p-1 text-sm font-medium text-gray-700">
                  {{complete.titulo}}
                </h3>

            </div>

            <div v-if="complete.contenido.length >= 1" class="truncate p-1 text-sm text-gray-700">
                <div class="flex items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="truncate">{{complete.contenido}}</span>
                </div>
            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(complete)" class="inline-flex border border-yellow-100 rounded text-green-100 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="complete"></ProgresoBar>

            </div>

        </div>
        <!--completado con texto-->

        <!--advertencia-->
        <div :key="key" v-for="(warning,key) in advertencia" class="intro-l p-1 shadow-xl flex-row mb-1 rounded bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-900">
        
            <div class="flex items-center">
            
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>

                <h3 class="p-1 text-sm font-medium text-gray-700">
                  {{warning.titulo}}
                </h3>

            </div>

            <div v-if="warning.contenido.length >= 1" class="truncate p-1 text-sm text-gray-700">
            
                <div class="flex items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="truncate">{{warning.contenido}}</span>
                </div>
            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(warning)" class="inline-flex border border-yellow-100 rounded text-yellow-100 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="warning"></ProgresoBar>

            </div>

        </div>
        <!--advertencia-->

        <!--alerta-->
        <div :key="key" v-for="(alert,key) in alerta" class="intro-l p-1 shadow-xl flex-row mb-1 rounded bg-gradient-to-r from-red-300 via-red-400 to-red-500 border border-red-900">
        
            <div class="flex items-center">
          
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>

                <h3 class="text-sm font-medium text-gray-800">
                  {{alert.titulo}}
                </h3>

            </div>

            <div v-if="alert.contenido.length >= 1" class="truncate text-sm text-gray-800">   
                <div class="flex items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="truncate">{{alert.contenido}}</span>
                </div>
            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(alert)" class="inline-flex border border-red-100 rounded text-red-100 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="alert"></ProgresoBar>

            </div>

        </div>
        <!--alerta-->

        <!--alertas lista-->
        <div :key="key" v-for="(alerts,key) in alertas" class="intro-l p-1 shadow-xl flex-row mb-1 rounded bg-gradient-to-r from-red-300 via-red-400 to-red-500 border border-red-900">
        
            <div class="flex items-center">
          
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>

                <h3 class="text-sm font-medium text-gray-800">
                  {{alerts.titulo}}
                </h3>

            </div>

            <div v-if="alerts.contenido.length >= 1" class="truncate font-semibold text-sm text-gray-800">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="p-1 truncate">{{alerts.contenido}}</span>
                </div>
            </div>

            <div class="mt-1 text-sm">
                <div class="list-disc pl-2 space-y-1">
                    <p :key="error.index" class="text-gray-800 font-semibold" v-for="error in alerts.errores">
                        • {{error}}
                    </p>
                </div>
            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(alerts)" class="inline-flex border border-red-100 rounded text-red-100 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="alerts"></ProgresoBar>

            </div>

        </div>
        <!--alertas lista-->

        <!--informativo-->
        <div :key="key" v-for="(info,key) in informativo" class="intro-l p-1 shadow-xl flex-row mb-1 rounded bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 border border-blue-900">
        
            <div class="flex items-center">
            
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>

                <h3 class="p-1 text-sm font-medium text-white">
                  {{info.titulo}}
                </h3>

            </div>

            <div v-if="info.contenido.length >= 1" class="truncate p-1 text-sm text-white">
                <div class="flex items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="truncate">{{info.contenido}}</span>
                </div>
            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(info)" class="inline-flex border border-blue-100 rounded text-blue-100 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-blue-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="info"></ProgresoBar>

            </div>

        </div>
        <!--informativo-->

        <!--realizado-->
        <div :key="key" v-for="(success,key) in realizado" class="intro-l p-1 border border-green-900 flex-1 mb-2 rounded bg-gradient-to-r from-green-300 via-green-400 to-green-500 ">
            
            <div class="flex">

                <div class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-600">
                    {{success.titulo}}
                  </p>
                </div>

            </div>

            <div class="mt-2 flex items-center space-x-2">

                <div class="cursor-pointer">
                    <div title="cerrar" @click="cerrar_notificacion(success)" class="inline-flex border border-green-100 rounded text-green-100 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                </div>

                <ProgresoBar :notificacion="success"></ProgresoBar>
            
            </div>

        </div>
        <!--realizado-->

    </div>
  
    <!--chat de ayuda-->
    <div v-if="user.id==0" @mouseleave="icons = false" class="object-right-bottom right-0 bottom-0 z-50 fixed">
        
        <div v-if="icons" class="pointer">
            <a target='_blank' href="https://t.me/usuariotelegram" >
                <img class="h-14 w-14" :src="urlsf + 'images/telegram-l.svg'" alt="telegram" />
            </a>
        </div>

        <div v-if="icons" class="pointer">
            <a target='_blank' href="https://api.whatsapp.com/send?phone=570000000000&text=Hola!%20Quiero%20mas%20informacion!" >
                <img class="h-14 w-14" :src="urlsf + 'images/whatsapp-l.svg'" alt="whatsapp" />
            </a>
        </div>

        <div class="mb-1 mr-1">
            <div @mouseover="icons = true">
                <img class="h-14 w-14" :src="urlsf + 'images/burbuja-chat.svg'" alt="burbuja-chat" />
            </div>
        </div>

    </div>
    <!--chat de ayuda-->

</div>
</template>

<script>
    
    import ProgresoBar from '@/componentes/esqueleto/ProgresoBarNotificacion'
    import Store from '@/store'
  
    export default {

        name: 'Notificacion-Local',
  
        data(){
            return{
                icons:false
            }
        },

        components:{ ProgresoBar },

        methods:{

            cerrar_notificacion(json){
                Store.dispatch('remover_notificacion',json.id)
            }
     
        },
    
        computed:{

            urlsf(){ return Store.state.urlsf },
            user(){ return 1 },

            notificacion_stored(){ return Store.state.notificacion_local },

            completado(){

                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=> n.tipo == 'completado')

            },

            alerta(){
                
                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=> n.tipo == 'alerta')
                
            },     
            
            advertencia(){
                
                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=>n.tipo == 'advertencia')
                
            },
            
            realizado(){
                
                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=>n.tipo == 'realizado')
                
            },  
            
            informativo(){
                
                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=>n.tipo == 'informativo')
                
            },
            
            alertas(){
                
                let notificaciones = Store.state.notificacion_local             
                return notificaciones.filter((n)=>n.tipo == 'alertas')
                
            }

        },

        mounted(){
            this.$nextTick(()=>{

            })
        },

        watch:{

        }
    }


</script>

<style scoped>

</style>