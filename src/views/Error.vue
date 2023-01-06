<template>
<div>
    <Barra></Barra>
    <div class="bg-gray-800 overflow-hidden shadow max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <main class="mt-24 py-5 sm:mx-auto sm:w-full sm:max-w-md">

            <img class="object-cover mx-auto my-auto w-1/2 sm:w-auto md:w-auto lg:w-screen xl:w-screen" :src="urlsf+'images/turquesa.svg'" alt="kardex_logo">
            
            <h2 class="mt-6 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-9 font-extrabold text-indigo-500">
                404
            </h2>

            <p class="mt-2 text-center text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg md:text-1xl lg:text-1xl xl:text-1xl leading-5 text-gray-500 max-w">
                La solicitud no se pudo procesar -
                <router-link to="/" class="font-medium text-indigo-400 hover:text-indigo-600 focus:outline-none focus:underline transition ease-in-out duration-150">
                    Redirigiendo...
                </router-link>

            </p>

            <h1 class="mt-6 text-center py-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-9 font-extrabold text-indigo-500">
                {{tiempo}}
            </h1>

        </main>
        
    </div>
</div>   
</template>

<script>
    
    import Router from '@/router'
    import Barra from '@/componentes/esqueleto/BarraInicio'
    import Store from '@/store/index'
    import Aplicacion from '@/controlador/aplicacion'
        
    export default {

        name: 'Vista-Error',

        components:{ Barra },

        data(){
            return{
                tiempo:5,
            }
        },

        props:{
        },
        
        methods:{

            cuenta(){

                let t = this.tiempo
                setTimeout(()=>{ 
                    t = t-1
                    this.tiempo = t
                }, 800)
                                
	      	},

        },

        computed:{
            urlsf(){ return Store.state.urlsf }
        },

        mounted(){

            this.$nextTick(()=>{
        	    //Aplicacion.vista_si_login()
        	    //Aplicacion.si_token()
            })

            setTimeout(()=>{  this.cuenta() }, 300)

        },

        watch:{

            tiempo(){

                if(this.tiempo >= 1){
	          	    this.cuenta()
		    	}else{
                    Router.push({'name':'Home'})
                }

	        }
	    }

    }
</script>

<style scoped>
</style>
