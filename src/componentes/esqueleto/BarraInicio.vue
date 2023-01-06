<template>
  <div class="border-b border-green-600 max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400 z-0">
    
    <div class="flow-root">

        <Router-link to="/" class="ml-2 float-left">
            <img class="w-10 h-10 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" :src="urlsf +'images/turquesa.svg'" alt="Kardex logo" />
        </Router-link>

        <div class="flex items-center py-1 float-right ">
            
            <Router-link class="bg-green-600 border border-green-600 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-white font-semibold shadow-md" to="/entrar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Entrar
            </Router-link> 
            
            <Router-link class="bg-green-100 border border-green-500 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/registro">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Registrarse
            </Router-link>
            
            <Router-link class="bg-green-100 border border-green-500 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/acerca">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Acerca
            </Router-link>
            
        </div>

    </div>
    
  </div>
</template>

<script>

    import Store from '@/store'
    
    export default {

        name:'Barra-Inicio',

        computed:{
            urlsf(){ return Store.state.urlsf }
        }

    }

</script>

<style scoped>

</style>