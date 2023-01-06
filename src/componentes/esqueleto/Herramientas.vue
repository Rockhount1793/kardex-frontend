<template>
  <div class="px-2 max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400 z-0">
    
    <div class="flow-root">
        <div class="flex float-left py-1">
        
            <div class="bg-green-600  flex items-center mr-2 p-1 px-5 py-0.5 rounded text-white font-semibold shadow-md" to="/entrar">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Borrar
            </div> 

            <div class="bg-green-100 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/registro">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Descargar
            </div>

            <div class="bg-green-100 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/registro">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Crear
            </div>

            <div class="bg-green-100 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/registro">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Vender
            </div>

            <div class="bg-green-100 flex items-center mr-2 p-1 px-5 py-0.5 rounded text-gray-800 font-semibold shadow-md" to="/registro">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Reporte
            </div>
        
        </div>

        <div class="bg-red-500 float-right">

            <div class="w-8 h-8 rounded-full shadow-lg" >
                <img class="inline-block h-10 w-10 rounded" src="+'storage/avatar/'+user.avatar" alt="?" />
            </div>

            <div  class="hidden z-20 absolute right-0 mt-4 w-auto">
                <div class="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
                    <div class="p-4 border-b border-theme-12 dark:border-dark-3">
                        <div class="font-medium">email</div>
                        <div class="text-xs text-theme-13 mt-0.5 dark:text-gray-600">cargo</div>
                    </div>
                    <div class="p-2">
                        <div  class="pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5 group-hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p class="group-hover:text-indigo-400">
                                dfv
                            </p>
                        </div>

                        <div  class="pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg class="mr-2 flex-shrink-0 h-5 w-5 group-hover:text-indigo-400 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            <p class="group-hover:text-indigo-400">
                                Role and Permissions
                            </p>
                        </div>

                        <div  class="pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mr-2 h-5 w-5 text-gray-200 group-hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <p class="group-hover:text-indigo-400">
                                My Hours
                            </p>
                        </div>

                        <div  class="pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg class="mr-2 flex-shrink-0 h-5 w-5 group-hover:text-indigo-400 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p class="group-hover:text-indigo-400">
                                My Team Members
                            </p>
                        </div>

                        <div class="border-b border-blue-900 bg-indigo-200 pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg class="mr-2 flex-shrink-0 h-5 w-5 group-hover:text-indigo-400 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p class="group-hover:text-indigo-400 text-indigo-500">
                                Active Users
                            </p>
                        </div>

                        <div  class="border-b border-blue-900 bg-indigo-200 pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 flex-shrink-0 h-5 w-5 text-indigo-500 group-hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            <p class="group-hover:text-indigo-400 text-indigo-500">
                                Edit Categories
                            </p>
                        </div>

                        <div class="bg-indigo-200 pointer truncate flex items-center p-2 transition duration-300 ease-in-out group hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 flex-shrink-0 h-5 w-5 text-indigo-500 group-hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-indigo-500 group-hover:text-indigo-400">
                                Edit Points
                            </p>
                        </div>

                    </div>

                    <div  class="pointer p-2 border-t border-theme-12 dark:border-dark-3">
                        <span class="flex items-center group p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg class="mr-1 h-5 w-5 group-hover:text-indigo-400 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <p class="group-hover:text-indigo-400">
                                Logout 
                            </p>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>

    import Store from '@/store'
    
    export default {

        name:'Herramientas',

        computed:{
            urlsf(){ return Store.state.urlsf }
        }

    }

</script>

<style scoped>

</style>