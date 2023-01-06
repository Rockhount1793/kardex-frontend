<template>
<div class="h-auto min-h-screen relative overflow-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
    <Barra class=""></Barra>

    <div class="w-full mx-auto">
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

    <div class=" lg:w-2/4 mx-auto">

        <div class="relative mx-2 flex flex-col w-auto lg:w-ful items-center">

            <div class="absolute z-0 mx-auto w-4/5 sm:w-4/6 lg:w-3/6 xl:w-3/6 2xl:w-2/6 max-w-2xl">
                <img class="mx-auto w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" :src="urlsf+ 'images/turquesa.svg'" />
            </div>

            <h1 class="my-4 z-10 text-3xl md:text-6xl text-white opacity-75 font-bold leading-tight text-center">
                Kardex 
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-800">
                  Control de Inventario
                </span>
            </h1>

            <p class="z-10 text-gray-600 leading-normal text-base md:text-3xl mb-8 text-center">
              Columnas digitales para inventario
            </p>

            <div class=" bg-gray-800 z-10 opacity-75 w-full shadow-lg rounded-lg px-8">
                <div class="mb-4">

                    <p class="text-justify text-gray-100 py-2 font-bold mb-2">
                        KARDEX, columnas digitales para inventario, es una plataforma para gestión de inventario, aqui puede registrar 
                        artículos, vincular la información de proveedores y hacer seguimiento de existencias mediante
                        entradas y salidas, ademas de consultar un reporte de existencias por ubicación;
                        Kardex fue diseñado para ser amigable y fácil de usar.
                    </p>

                    
                    <p class="text-white mt-3 ">Contacto: </p>

                    <div class="">
                        <div class="mt-2 space-x-2 flex items-center">
                            <img class="h-10 w-10" :src="urlsf+'images/telegram.svg'" />
                            <a class="text-cyan-500" href="https://t.me/perfil_telegram_****" target="_blank" rel="noopener noreferrer"> Preguntas y/o sugerencias | <span class="text-white"> aquí </span></a>
                        </div>
                    </div>

                    <p class="text-white mt-3">Agradecimientos a:</p>
                    <div class="">

                        <div class="space-x-2 flex items-center"> 
                            <img class="h-10 w-10" :src="urlsf+'images/svgrepo.svg'" />
                            <a class="text-blue-500" href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer"> https://www.svgrepo.com/ | <span class="text-white">Repositorio SVG</span></a>
                        </div>
                        
                        <div class="mt-0 space-x-2 flex items-center">
                            <img class="h-10 w-10" :src="urlsf+'images/tailwindcss.svg'" />
                            <a class="text-blue-500" href="https://www.tailwindcss.com/" target="_blank" rel="noopener noreferrer"> https://www.tailwindcss.com/  | <span class="text-white">CSS Framework</span></a>
                        </div>

                        <div class="mt-2 space-x-2 flex items-center">
                            <img class="h-8 w-10 " :src="urlsf+'images/vuejs.svg'" />
                            <a class="text-blue-500" href="https://www.vuejs.org/" target="_blank" rel="noopener noreferrer"> https://www.vuejs.org/ | <span class="text-white">Javascript Framework</span></a>
                        </div>    
                        
                        <div class="mt-2 space-x-2 flex items-center">
                            <img class="h-10 w-10" :src="urlsf+'images/laravel.svg'" />
                            <a class="text-blue-500" href="https://www.laravel.com/" target="_blank" rel="noopener noreferrer"> https://www.laravel.com/ | <span class="text-white"> PHP Framework</span></a>
                        </div>
                        
                    </div>

                   
                </div>

            </div>

            
        </div>
 
    </div>
    
    <Footer class=""></Footer>

</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Store from '@/store/index'
import Barra from '@/componentes/esqueleto/BarraInicio'
import Footer from '@/componentes/esqueleto/Footer'

export default {

    name: 'Acerca',
  
    components: {
        Barra, Footer
    },

    computed:{

        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf }
        
    }
  
}
</script>