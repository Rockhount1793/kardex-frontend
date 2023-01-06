<template>
    <div class="h-screen overflow-y-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
        
        <Barra></Barra>
        <Menu></Menu>
    
        <div class="pb-2 px-2 mx-2 rounded-md rounded-t-none bg-green-600">
    
            <div class="mx-auto px-2 w-full bg-white rounded py-1">
    
                <!-- Secciones -->
                <div class="w-full">

                    <div class="border rounded border-gray-400 px-2 color-hueso">
                        
                        <div class="flex-1 lg:flex items-center">
                
                            <h1 class="text-center lg:flex text-1xl font-bold text-gray-600 sm:leading-8">
                                Proveedores [{{proveedores.length}}]
                            </h1>
                            
                            <div class="flex items-center">
                
                                <div class="mx-auto lg:ml-2 lg:flex items-center w-full">
                
                                    <div class="lg:mr-2 mt-4 lg:mt-0">
                                        <input placeholder="Buscar proveedor.." type="text" v-model="buscador_n" class="w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 px-1 border border-gray-300">
                                    </div>
                
                                    <div class="flex mt-1 items-center justify-between w-full md:w-auto">
                                        <Miniloading></Miniloading>
                                    </div>
                
                                </div>
                
                            </div>
                
                        </div>
                
                    </div>
                
                    <div  class="intro-b mt-3">
                
                        <div class="color-hueso h-screen mt-3 overflow-y-auto rounded border border-gray-400 pt-0.5 pb-2">
                
                            <table v-if="proveedores.length" class="w-full">
                
                                <thead  class="h-6 color-hueso">
                
                                    <th class=" px-1 md:px-2">
                                    </th>
                
                                    <th class="table-cell py-0 border-b border-gray-400 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                        <span class="">Nombre</span>
                                    </th>
                
                                    <th class="table-cell py-0 border-b border-gray-400 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                        <span class="">Email</span>
                                    </th>
                
                                    <th v-if="vista[0].valor" class="hidden xl:table-cell py-0 border-b border-gray-400 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold lg:font-semibold text-gray-500">
                                        <span class="">Encargado</span>
                                    </th>
                
                                    <th v-if="vista[1].valor" class="hidden lg:table-cell py-0 border-b border-gray-400 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                        <span class="">Dirección</span>
                                    </th>
                
                                    <th v-if="vista[2].valor" class="hidden sm:table-cell py-0 border-b border-gray-400 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                        <span class="">Teléfono</span>
                                    </th>
                
                                    <th v-if="vista[3].valor" class="hidden lg:table-cell border-b border-gray-400">
                                        <span class="">&nbsp;</span>
                                    </th>
                
                                    <th class="hidden lg:table-cell">
                                        <div v-click-away="ocultar_menu_mostrar" class="relative">
                                        
                                            <div @click="menu_mostrar = true" class="cursor-pointer text-gray-500">
                                                <svg class="mx-auto w-3 h-3 lg:w-4 lg:h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                                </svg>
                                            </div>
                                        
                                            <div v-if="menu_mostrar" class=" absolute intro-b border border-green-700 bg-green-600 shadow-xl rounded-md z-20 right-0 mt-1 w-auto mr-2">
                                            
                                                <div class="p-2 text-white">
                                                    
                                                    <div class="text-sm border-b border-gray-300">
                                                        <span>Mostrar</span>
                                                    </div>
            
                                                    <hr  class="p-1" />

                                                    <div v-for="(item, key, index) in vista">
                                                    
                                                      <div class="flex space-x-4 py-0.5 justify-between">
    
                                                        <p class="text-xs font-thin capitalize">{{item.name}}</p>
                                                        <input :value="item.valor" v-model="item.valor" v-on:keyup.enter="" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />  
    
                                                      </div>
    
                                                    </div>
    
                                                </div>
                                            
                                            </div>
    
                                        </div>
                                    </th>
                
                                </thead>
                
                                <tbody>
                
                                    <tr :key="proveedor.id +'key'"  v-for="proveedor in proveedores" class="h-8 bg-white" >
                
                                        <td class="color-hueso px-1 border-r border-gray-400 md:px-2">
                                        </td>
                
                                        <td class="table-cell px-1 py-1 md:text-xs border-b border-gray-400 text-left">
                                            <input class="h-6 hover:text-indigo-500 border-0 text-gray-500 text-xs font-semibold focus:ring-2 px-1 focus:outline-none outline-blue hover:ring-2 focus:text-indigo-500" v-on:keyup.enter="update(proveedor)" v-model="proveedor.nombre" />
                                        </td>
                
                                        <td class="table-cell  md:text-xs border-b border-gray-400 text-left">
                                            <input  class="h-6 hover:text-indigo-500 border-0 text-gray-500 text-xs font-semibold focus:ring-2 px-1 focus:outline-none outline-blue hover:ring-2 focus:text-indigo-500" v-on:keyup.enter="update(proveedor)" v-model="proveedor.email" />
                                        </td>
                
                                        <td v-if="vista[0].valor" class="hidden xl:table-cell md:text-xs border-b border-gray-400 text-left">
                                            <input  class="h-6 hover:text-indigo-500 border-0 text-gray-500 text-xs font-semibold focus:ring-2 px-1 focus:outline-none outline-blue hover:ring-2 focus:text-indigo-500" v-on:keyup.enter="update(proveedor)" v-model="proveedor.contacto" />
                                        </td>
                
                                        <td v-if="vista[1].valor" class="hidden lg:table-cell  md:text-xs border-b border-gray-400 text-gray-500 text-left">
                                            <input class="h-6 hover:text-indigo-500 border-0 text-gray-500 text-xs font-semibold focus:ring-2 px-1 focus:outline-none outline-blue hover:ring-2 focus:text-indigo-500" v-on:keyup.enter="update(proveedor)" v-model="proveedor.direccion" />
                                        </td>
                
                                        <td v-if="vista[2].valor" class="hidden sm:table-cell md:text-xs border-b border-gray-400 leading-5 text-xs font-semibold text-gray-500 text-left">
                                            <input  class="h-6 hover:text-indigo-500 border-0 text-gray-500 text-xs font-semibold focus:ring-2 px-1 focus:outline-none outline-blue hover:ring-2 focus:text-indigo-500"  v-on:keyup.enter="update(proveedor)" v-model="proveedor.telefono" />
                                        </td>
                
                                        <td v-if="vista[3].valor" class="hidden lg:table-cell md:text-xs border-b border-gray-400 leading-5 text-xs font-semibold text-gray-500 text-left">
                                            <div title="eliminar" @click="eliminar(proveedor)" class="pointer group flex items-center px-2 py-1 text-sm leading-5 text-gray-700  hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                                                <svg class="mr-2 h-5 w-5 text-gray-400 group-hover:text-red-400 group-focus:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </td>
                
                                        <td class="px-1 md:px-2 color-hueso border-l border-gray-400">
                                        </td>
                
                                    </tr>
                
                                </tbody>
                
                            </table>
                
                            <p v-else class="text-gray-500 font-semibold text-md mt-1 text-center">No hay proveedores registrados!</p>
                
                        </div>
                          
                    </div>
                    
                </div>    
    
            </div>
    
        </div>
        
    </div>
</template>
    
<script>

    import Store from '@/store'
    import Funciones from '@/funciones'
    import Aplicacion from '@/controlador/aplicacion'
    import Proveedor from '@/controlador/proveedor'
    import Miniloading from '@/componentes/esqueleto/Minicargador'
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'
    
    export default {
    
        name: 'Proveedores',
      
        components: {
            Barra, Menu, Miniloading
        },
    
        data(){
            return{
                errores:[],
                buscador_n:'',
                vista: [{ 'name':'encargado','valor':true}, { 'name':'dirección','valor':false}, { 'name':'teléfono','valor':true}, { 'name':'eliminar','valor':false}],
                menu_mostrar:false,
            }
        },

        methods:{
            
            ocultar_menu_mostrar(){
              this.menu_mostrar = false
              localStorage.setItem('vista_proveedores',JSON.stringify(this.vista))
            },

            update(json){

                this.errores = []
                
                if(json.nombre.toString().length < 3 || json.nombre.toString().length > 100){ this.errores.push("El nombre deberá tener entre 3 y 100 caracteres") }
                if(json.direccion.toString().length < 3 || json.direccion.toString().length > 100){ this.errores.push("La dirección deberá tener entre 3 y 100 caracteres") }
                if(json.telefono.toString().length < 3 || json.telefono.toString().length > 100){ this.errores.push("El telefono deberá tener entre 6 y 100 caracteres") }
                if(!Funciones.check_email(json.email) || json.email.toString().length > 100){ this.errores.push("El email tiene formato incorrecto") }
                if(json.contacto.toString().length < 3 || json.contacto.toString().length > 100){ this.errores.push("El contacto deberá tener entre 3 y 50 caracteres") }
          
                if(this.errores.length >=1){
        
                    var nlocal ={
                        'tipo':'alertas',
                        'titulo':'Entrada incompleta',
                        'contenido':'',
                        'errores':this.errores
                    }
        
                    Store.dispatch('add_notificacion',nlocal)
        
                  
                }else{
                    Proveedor.update(json)
                }

            },
        
            eliminar(json){ Proveedor.delete({'proveedor_id':json.id}) },

            set_config(){

                try {
                 this.vista = Funciones.check_config(this.vista,'vista_proveedores')
                
                } catch (error) {
                  console.log(error)
                }

            }

        },

        computed:{
        
            proveedores(){ 
                let proveedores = Store.state.proveedores
                return Funciones.buscador_texto(this.buscador_n,proveedores,'nombre')
            },
        
            urlsf(){ return Store.state.urlsf },
            login(){ return Store.state.login }
        },

        mounted(){
            this.$nextTick(()=>{

                Aplicacion.check_login(()=>{
                    if(!Store.state.proveedores.length){ Proveedor.index() }
                })

                setTimeout(()=>{
                    this.set_config()
                },300)

            })
        },

        watch:{
            login(){
                if(this.login){
                    if(!Store.state.proveedores.length){ Proveedor.index() }
                }
            }
        }
    }
</script>
