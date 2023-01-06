<template>
<div class="h-auto min-h-screen relative overflow-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
    <Barra></Barra>

    <div class="w-full container mx-auto">
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

    <div class="h-4/6 pt-5 lg:w-2/4 mx-auto flex ">

        <div class="mx-2 flex flex-col w-full items-center">

            <div class="flex-1 z-10 ">

                <h1 class="z-10 text-7xl md:text-8xl text-white opacity-75 font-bold leading-tight text-center">
                    Kar
                    <span class="-ml-5 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-800">
                       dex
                    </span>
                </h1>

                <p class="z-10 text-gray-600 leading-normal font-semibold text-base md:text-2xl mb-8 text-center">
                   Control de Inventario
                </p>

            </div>

            <div class="z-0 fixed mx-auto w-4/5 sm:w-4/6 lg:w-3/6 xl:w-3/6 2xl:w-2/6 max-w-2xl">
                <img class="mx-auto w-full" :src="urlsf+ 'images/turquesa.svg'" />
            </div>
            

        </div>

    </div>

    <Footer class="mb-0 mt-5"></Footer>

</div>
</template>

<script>

import Store from '@/store'
import Barra from '@/componentes/esqueleto/BarraInicio'
import Footer from '@/componentes/esqueleto/Footer'
import Aplicacion from '@/controlador/aplicacion'


export default {

    name:'Home',

    components:{
        Barra, Footer
    },

    computed:{
        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf }
    },

    methods:{},

    mounted(){
        this.$nextTick(()=>{
           Aplicacion.si_login()
        })
    }

}
</script>

<style>

</style>