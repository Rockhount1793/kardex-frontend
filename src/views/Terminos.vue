<template>
<div class="h-auto min-h-screen relative max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
    
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

    <div class="relative pt-5 lg:w-2/4 mx-auto pb-10">

        <div class="mx-2 flex flex-col w-auto lg:w-ful items-center">

            <div class="absolute z-0 mx-auto w-4/5 sm:w-4/6 lg:w-3/6 xl:w-3/6 2xl:w-2/6 max-w-2xl">
                <img class="mx-auto w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" :src="urlsf+ 'images/turquesa.svg'" />
            </div>

            <h1 class="my-4 z-10 text-3xl md:text-6xl text-white opacity-75 font-bold leading-tight text-center">
                Terminos
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-800">
                  Condiciones & Privacidad
                </span>
            </h1>

            <div class="bg-gray-800 z-10 opacity-85 w-full shadow-lg rounded-lg px-8">
                <div class="mb-4">

                    <p class="text-justify text-gray-100 py-2 font-bold mb-2 ">
                        La política de tratamiento de datos de kardex.com.co está sujeta al Acuerdo de LEY ESTATUTARIA 1581 DE 2012 de la república de Colombia,
                        los datos proporcionados se usarán únicamente para fines de autenticación del usuario y afines al funcionamiento de la misma,
                        los datos de usuarios terceros registrados no se usarán para otros fines a los dispuestos en la plataforma y a los cuales aplica la misma normativa,
                        la información que el usuario haya suministrado se conservará siempre que la plataforma este en servicio, salvo que el usuario borre su cuenta;
                        los propietarios y asociados de kardex.com.co son los únicos responsables de la página y dominio pero no brindan el servicio de almacenamiento de datos,
                        kardex.com.co y propietarios & asociados no se hacen responsables por la pérdida de información digital almacenada.

                    </p>
                    <div class="flex-1 py-2 font-thin mb-2 ">
                        <p class="text-red-400">*Proyecto sin ánimo de lucro</p>
                        <p class="text-red-400">*Proyecto en face de implementación</p>
                        <p class="text-xs text-green-400">Versión [{{version}}]</p>
                    </div>
                   
                </div>

            </div>

        </div>

    </div>
   
    <Footer></Footer>

</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Store from '@/store'
import Barra from '@/componentes/esqueleto/BarraInicio'
import Footer from '@/componentes/esqueleto/Footer'

export default {

    name: 'Terminos',
  
    components: {
        Barra, Footer
    },

    computed:{

        count(){ return Store.state.count },
        version_num(){ return Store.state.version_num },
        urlsf(){ return Store.state.urlsf },
        version(){ return Store.state.version_num +' '+Store.state.version_date }
    
    }
  
}
</script>