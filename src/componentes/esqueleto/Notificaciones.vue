<template>
<div v-click-away="hide_menu_notificaciones">

    <div class="flex items-center mr-4 sm:mr-6" title="notificaciones">
        
        <div class="cursor-pointer flex items-center ">
        
            <svg xmlns="http://www.w3.org/2000/svg" @click="set_modulo()" class="flex-none h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        
            <span v-if="notificaciones" class="ring-red-700 bg-red-400 -ml-2 mt-3 h-2 w-2 rounded-full ring-1" ></span>
        
        </div>

    </div>

    <div v-if="modulo" v-click-away="hide_menu_notificaciones" style="z-index:30" class="intro-b shadow-lg relative">

        <div class="absolute mt-1 rounded p-1 border border-gray-300 shadow-lg h-auto right-1 lg:right-5 color-hueso w-65 ">
            
            <div class="flex justify-end px-2">
                
                <button  title="clear all notifications" class="border-b border-gray-300 text-xs font-semibold text-gray-500 hover:text-indigo-500">
                    clear
                </button>

            </div>

            <hr class="border-gray-300 mt-1"/>

            <div class="mt-1 h-90 overflow-auto w-full px-0.5">
                
                <div  class="vld-parent items-center h-90">
                    <Cargador :active.sync="activo" :background-color="backgroundcolor" :enforce-focus="enforcefocus" :height="height" :width="width" :loader="loader" :z-index="zindex" :losckscroll="losckscroll" :blur="blur" :can-cancel="cancel" :color="color" :on-cancel="onCancel" :is-full-page="pagina"></Cargador>
                </div>
                
                <div class="hidden p-0.5 mx-auto border rounded shadow-xl bg-white border-gray-200 mt-1">

                    <div class="p-0.5 flex justify-start">

                        <span class="rounded-full h-8 w-8">
                	    	<img class="h-8 w-8 rounded-full" :src="urlsb+'storage/avatar/'+user.avatar" alt="user.avatar">
                	    </span>

                        <div class="mt-1 px-2 truncate" title="email">
                            <span  class="text-gray-600 font-semibold text-sm">
                                <span >nombre apellido</span>
                            </span>
                        </div>

                    </div>

                    <div class="flow-root px-1">

                        <div class="float-left">

                            <div class="flex justify-items-start">
                                
                                <div class="mt-0.5 mr-1" >icon</div>
                                
                                <p class="leading-5 text-sm text-gray-500">
                                    descripcion
                                    <span title="preview"  class=" font-semibold transition ease-in-out duration-250" >
                                    contenido
                                    </span>

                                    <span  class="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold transition ease-in-out duration-250" >
                                        <span class="text-gray-500 font-normal">to challenge </span> referencia
                                    </span>
                                    
                                    <span  title="open item" class="cursor-pointer text-blue-500 hover:text-blue-600 font-semibold transition ease-in-out duration-250" >
                                        <span class="text-purple-500 font-normal">and reply comment to</span> referencia
                                    </span>
                                    
                                </p>

                            </div>

                        </div>

                    </div>

                    <div class="flow-root">

                        <div class="float-left break-words px-1">

                            <span title="redeem date" class="text-blue-800 font-semibold text-xs">
                                tiempo
                            </span>

                        </div>

                        <div class="hidden float-right">

                            <button title="delete" class="text-gray-300 hover:text-red-300

                                transition duration-300 ease-in-out cursor-pointer px-0.5">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>

                            </button>

                        </div>

                    </div>

                </div>
            
            </div>

        </div>

    </div>

</div>    
</template>

<script lang="js">

import Store from '@/store/index'
import Cargador from '@/componentes/esqueleto/Minicargador'

export default {

    name:'Notificaciones',

    data(){
        return{
            modulo:false,
            pagina:false,
            color:'#4b0082',
            transition: 'fade',
            height:35,
            width:35,
            loader:'spinner',//dots bars
            backgroundcolor:'#f3f3f3',// es background-color
            opacy: 0.5,
            zindex: 50, //es z-indez
            enforcefocus: false, //es enforce-focus
            losckscroll:true, //es lock-scroll
            blur:'2px',
            cancel:false,
            notificaciones:false
        }
    },

    components:{
        Cargador
    },

    methods:{

        onCancel(){
            
        },
        
        set_modulo(){
            //this.modulo = !this.modulo
        },
        
        hide_menu_notificaciones(){
            this.modulo = false
        }

    },

    computed:{
        user(){ return Store.state.user },
        urlsb(){ return Store.state.urlsb }
    },
    
    filters:{
 
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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #142e71; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /*background: #071a50;*/ 
}

</style>
