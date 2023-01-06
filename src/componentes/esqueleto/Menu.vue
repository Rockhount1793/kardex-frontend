<template>
  <div class="rounded-t px-2 mx-2 mt-1 max-w-8xl bg-green-600 z-0">
    
    <div class="flow-root">

        <div class="xl:flex grid grid-cols-1 gap-2 lg:w-full xl:w-10/12 lg:float-left py-1">
        
            <div @click="set_route('Reporte'); set_seccion_num([2,2])" :class="seccion_num[0] == 2 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Reporte
            </div>

            <div @click="set_route('Productos'); set_seccion_num([7,1])" :class="seccion_num[0] == 7 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">      
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Productos
            </div>

            <div @click="set_route('Ubicaciones'); set_seccion_num([6,1])" :class="seccion_num[0] == 6 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">

                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ubicaciones
            </div>

            <div @click="set_route('Proveedores'); set_seccion_num([5,5])" :class="seccion_num[0] == 5 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                Proveedores
            </div>

            <div @click="set_route('Entradas'); set_seccion_num([3,3])" :class="seccion_num[0] == 3 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Entradas
            </div>

            <div @click="set_route('Salidas'); set_seccion_num([4,4])" :class="seccion_num[0] == 4 ? 'border border-white bg-green-600 text-white':'bg-green-100 text-gray-800 hover:text-green-500' " class="transition ease-in-out transform duration-200 cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Salidas
            </div>

        </div>

        <div class="xl:flex lg:float-right relative xl:w-1/12 py-1 lg:pl-2">

            <div @click="menu_crear = true" :class="seccion_num[0] >= 100 ? 'border border-white bg-green-600 text-white':' bg-green-100 text-gray-800 hover:text-green-500'" class="w-full cursor-pointer flex items-center p-1 px-3 py-0.5 rounded font-semibold shadow-md">
                
                <div class="mx-auto flex items-center transition ease-in-out transform duration-200">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                    <span>Crear</span>
                    
                </div>
                
            </div>

            <div v-if="menu_crear" v-click-away="ocultar_menu_crear" class="intro-b border border-green-100 bg-green-800 shadow-xl rounded-md z-20 absolute right-0 mt-9 w-auto mr-2">
                <div class="text-white">
                    <div class="p-2">

                        <div @click="set_route('CrearProducto'); set_seccion_num([102,10]); ocultar_menu_crear()" :class="seccion_num[0] == 102 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">

                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>

                            <p class="group-hover:text-green-700 text-sm font-semibold">
                                Producto
                            </p>

                        </div>

                        <div @click="set_route('CrearUbicacion'); set_seccion_num([101,10]); ocultar_menu_crear()" :class="seccion_num[0] == 101 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <p class="group-hover:text-green-700 text-sm font-semibold">
                                Ubicación
                            </p>

                        </div>

                        <div @click="set_route('CrearProveedor'); set_seccion_num([100,10]); ocultar_menu_crear()" :class="seccion_num[0] == 100 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                            
                            <p class="group-hover:text-green-700 text-sm font-semibold">
                                Proveedor
                            </p>
                        </div>

                        <div @click="set_route('CrearEntrada'); set_seccion_num([103,10]); ocultar_menu_crear()" :class="seccion_num[0] == 103 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">             
                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            
                            <p class="group-hover:text-green-700 text-sm font-semibold">
                                Entrada
                            </p>

                        </div>

                        <div @click="set_route('CrearSalida'); set_seccion_num([104,10]); ocultar_menu_crear()" :class="seccion_num[0] == 104 ? 'border border-white bg-green-600 text-white':'' " class="cursor-pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-green-100 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 mr-1 h-5 w-5 group-hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <p class="group-hover:text-green-700 text-sm font-semibold">
                                Salida
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>

        <div class="xl:flex lg:float-right relative py-1">

            <div title="¿ayuda?" @click="menu_pregunta = true" class="mx-auto intro-r cursor-pointer w-7 h-7">
                <img class="rounded-full" :src="urlsf+'/images/question.svg'" alt="question" />
            </div>

            <div v-if="menu_pregunta" v-click-away="ocultar_menu_pregunta" class="intro-b bg-green-800 shadow-xl rounded-md z-20 absolute mt-1 lg:mt-9 w-80 right-0 min-w-full">
                <div class="p-1">

                    <div class="bg-gray-800 z-10 opacity-80 flex items-center p-2 transition duration-300 ease-in-out group rounded-md">

                        <div class="w-full shadow-lg rounded-lg px-1">

                            <p class="text-justify text-white py-1 font-thin mb-1 text-sm">
                                
                                Para iniciar el control de inventario primero registramos un

                                <span @click="set_route('CrearProducto'); set_seccion_num([102,10]);" title="ir a crear producto" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    Producto
                                </span> donde se incluye el porcentaje de ganancia que se aspira obtener por cada 'salida', luego creamos una o más
                                
                                <span @click="set_route('CrearUbicacion'); set_seccion_num([101,10]);" title="ir a crear ubicación" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Ubicaciones
                                </span>
                                
                                que representan el lugar fisico donde se hace el control de inventario y donde se asignan las posteriores 'entradas' y 'salidas', uno o varios
                                
                                <span @click="set_route('CrearProveedor'); set_seccion_num([100,10]);" title="ir a crear proveedor" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                    </svg>
                                    Proveedores
                                </span>
                                
                                que son mínimos registros a tener en cuenta, posterior podemos crear la 'primera'

                                <span @click="set_route('CrearEntrada'); set_seccion_num([103,10]);" title="ir a crear entrada" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Entrada
                                </span>

                                donde se ingresa la cantidad de 'producto' referente a una 'ubicación', un 'proveedor' y un 'Costo Unidad', posterior ya podremos crear una o más
                                
                                <span @click="set_route('CrearSalida'); set_seccion_num([104,10]);" title="ir a crear salida" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 mr-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Salidas
                                </span>
                                
                                donde se resta de la 'Cantidad' y la 'Ubicación' que se solicite, por último podemos solicitar un
                                
                                <span @click="set_route('Reporte'); set_seccion_num([2,2]);" title="consultar un reporte" class="cursor-pointer flex items-center hover:text-blue-400 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    Reporte
                                </span>
                                
                                para comprobar la 'Cantidad' y valor de activo por 'Ubicación'.
                               
                                <div class="flex-1">
                                    <p class="text-green-400 text-xs font-base"> * Es preciso primero crear una o más 'Entrada' para luego registrar una 'Salida' referente a una 'Ubicación'.</p>
                                    <p class="text-green-400 text-xs font-base"> * Use las cajas de busqueda para filtrar.</p>
                                    <p class="text-green-400 text-xs font-base"> * Para confirmar la edición de un texto oprima la tecla 'Enter'</p>     
                                </div>
                               
                            </p>

                        </div>
                        
                    </div>
                   

                </div>

            </div>

        </div>

    </div>
    
  </div>
</template>

<script>

    import Store from '@/store'
    import Router from '@/router'

    export default {

        name:'Menu',

        data(){
            return{
                menu_crear:false,
                menu_pregunta:false
            }
        },

        methods:{
            set_route(name){ Router.push({'name':name}) },
            ocultar_menu_pregunta(){ this.menu_pregunta = false },
            ocultar_menu_crear(){ this.menu_crear = false },
            set_seccion_num(array){ Store.commit('set_seccion_num',array) }
        },

        computed:{

            seccion_num(){ return Store.state.seccion_num },
            urlsf(){ return Store.state.urlsf }
        }

    }

</script>

<style scoped>

</style>