<template>
    <div class="h-screen overflow-y-auto max-w-8xl bg-gradient-to-r from-green-200 via-green-300 to-green-400">
        
        <Barra></Barra>
        <Menu></Menu>
    
        <div class="pb-2 px-2 mx-2 rounded-md rounded-t-none bg-green-600">
    
            <div class="mx-auto px-2 w-full bg-white rounded py-1">
    
                <!-- Secciones -->
                <div class="w-full">

                    <div class="flex-1 lg:flex items-center space-x-2">
                
                        <div class="ml-0 text-1xl font-bold text-gray-600 ">
                            <p class="text-center lg:flex">Salidas [{{salidas.length}}]</p>
                            <p v-if="salidas.length == 500" class="text-center text-xs text-red-400 font-semibold">Máximo 500 registros por lote, por favor use el paginador</p>
                        </div>
                      
                        <button @click="index_salidas()" class="px-2 font-semibold text-xs cursor-pointer rounded bg-green-600 flex items-center border text-white " title="actualizar">
                            <span class="mr-1">actualizar</span>
                            <svg class="mr-2 h-5 w-5 hover:text-green-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                
                        <div class="lg:mr-2 mt-4 lg:mt-0 flex items-center space-x-2">
                
                            <div class="flex h-6 items-center space-x-1 border border-gray-300 rounded px-2">
                                <p class="text-gray-500 font-semibold">Año</p>
                                <FiltroYear @mviewy="set_viewy" :viewY="very"></FiltroYear>
                            </div>
                
                            <div class="flex h-6 items-center space-x-1 border border-gray-300 rounded px-2">
                                <p class="text-gray-500 font-semibold">Mes</p>
                                <FiltroMonth @mviewm="set_viewm" :viewM="verm"></FiltroMonth>
                            </div>

                            <button @click="buscar_div = !buscar_div" class="w-12 h-6 font-semibold text-xs cursor-pointer rounded bg-green-600 flex items-center border text-white " title="buscar">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-5 w-5 hover:text-green-500 group-focus:text-gray-600 transition ease-in-out duration-150">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>

                        </div>
                
                        <div v-if="buscar_div" class="intro-b h-auto lg:h-6 flex-1 lg:flex items-center">

                            <div class="lg:mr-2 mt-4 lg:mt-0">
                                <input placeholder="Producto.." type="text" v-model="buscador_nombre" class="w-full rounded h-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 px-1 border border-gray-300">
                            </div>
                    
                            <div class="lg:mr-2 mt-2 lg:mt-0">
                                <input placeholder="Pedido.." type="text" v-model="buscador_pedido" class="w-full rounded h-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 px-1 border border-gray-300">
                            </div>
                    
                            <div class="lg:mr-2 mt-2 lg:mt-0">
                                <input placeholder="Código.." type="text" v-model="buscador_codigo" class="w-full rounded h-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 px-1 border border-gray-300">
                            </div>
                            
                            <div class="lg:mr-2 mt-2 lg:mt-0">
                                <input placeholder="Ubicación.." type="text" v-model="buscador_ubicacion" class="w-full rounded h-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 px-1 border border-gray-300">
                            </div>
                
                        </div>

                    </div>
                
                    <div class="flex items-center lg:mr-2 mt-3 space-x-2">

                        <button @click="calcular();" class="px-0 font-semibold text-xs cursor-pointer rounded bg-green-600 flex items-center border text-white " title="calcular actual filtro">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 hover:text-green-500 group-focus:text-gray-600 transition ease-in-out duration-150">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                            </svg>
                        </button>

                        <div v-if="calcular_div" class="intro-r rounded w-full border h-6 px-2 flex items-center space-x-3">
    
                            <p class="text-sm">Salidas #{{totales.salidas}}</p>
                            <p class="text-sm ">Totales ${{totales.totales}}</p>

                        </div>

                    </div>

                    <div class="intro-b  h-screen mt-3 overflow-y-auto intro-r color-hueso border shadow-md rounded border-gray-400 pb-2">
                
                        <table v-if="salidas.length" class="">
                
                            <thead class="h-6">
                
                                <th class="h-6 px-0 md:px-2">
                                </th>
                            
                                <th class="h-4 px-1 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                    <span class="">Producto / Marca</span>
                                </th>
                
                                <th v-if="vista[0].valor" class="hidden md:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-center sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold lg:font-semibold text-gray-500">
                                    <span class="">Pedido</span>
                                </th>
                
                                <th v-if="vista[1].valor" class="hidden md:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-center sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold lg:font-semibold text-gray-500">
                                    <span class="">Código</span>
                                </th>
                
                                <th v-if="vista[2].valor" class="hidden md:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                    <span class="">Ubicación</span>
                                </th>
                
                                <th class="table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                   <span class="text-center">Salida</span>
                                </th>
                
                                <th v-if="vista[3].valor" class="hidden md:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                    <span class="">V.&nbsp;Unitario</span>
                                </th>
                
                                <th v-if="vista[4].valor" class="hidden md:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                    <span class=""> Total</span>
                                </th>
                
                                <th v-if="vista[5].valor" class="hidden lg:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
                                    <span class="">A&nbsp;M&nbsp;D</span>
                                </th>
                
                                <th v-if="vista[6].valor" class="hidden lg:table-cell h-4 px-1 lg:px-5 py-0 border-b border-gray-300 lowercase text-left sm:lowercase md:lowercase lg:lowercase xl:uppercase text-xs font-semibold text-gray-500">
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
                
                                <tr :key="key" v-for="(salida,key) in salidas"  class="bg-white border-gray-300 hover:bg-gray-200">
                    
                                    <td class="md:table-cell border-r border-gray-300 color-hueso px-1 md:px-2">
                                    </td>
                    
                                    <td class="md:table-cell py-1 px-1 max-w-0 w-full border-b border-gray-300 text-left">
                    
                                        <div class="flex-1">
                                            <p class="truncate text-xs font-normal lg:font-semibold text-gray-500">
                                                {{salida.producto}}
                                            </p>
                                            <p class="truncate text-xs font-normal lg:font-semibold text-gray-500">
                                                {{salida.marca}}
                                            </p>
                                        </div>
                                        
                                    </td>
                
                                    <td v-if="vista[0].valor" class="hidden md:table-cell py-1 md:text-xs border-b border-gray-300 leading-5 text-xs font-semibold text-gray-500 text-center">
                                      <p class="w-32">{{salida.pedido}}</p>
                                    </td>
                    
                                    <td v-if="vista[1].valor" class="hidden md:table-cell py-1 md:text-xs border-b border-gray-300 leading-5 text-xs font-semibold text-gray-500 text-center">
                                      <p class="w-32">{{salida.codigo}}</p>
                                    </td>
                    
                                    <td v-if="vista[2].valor" class="hidden md:table-cell py-1 md:text-xs border-b border-gray-300 leading-5 text-xs font-semibold text-gray-500 text-center">
                                      <span class="" > {{salida.ubicacion}}</span>
                                    </td>
                    
                                    <td class="table-cell py-1 md:text-xs border-b border-gray-300 text-xs font-semibold text-gray-500 text-center">
                                      <span>{{format_number(salida.cantidad)}}</span>
                                    </td>
                    
                                    <td v-if="vista[3].valor" class="hidden md:table-cell py-1 md:text-xs border-b border-gray-300 text-gray-500 leading-5 text-xs font-semibold text-center">
                                      <span class="" >${{format_number(salida.costo_unidad)}}</span>
                                    </td>
                    
                                    <td v-if="vista[4].valor" class="hidden md:table-cell py-1 md:text-xs border-b border-gray-300 leading-5 text-xs font-semibold text-gray-500 text-center">
                                      <span class="" >${{ total_salida(salida) }}</span>
                                    </td>
                    
                                    <td v-if="vista[5].valor" class="hidden lg:table-cell py-1 max-w-0 w-full md:text-xs border-b border-gray-300 leading-5 text-xs font-semibold text-gray-500 text-center">
                                      <span class="">{{salida.salida }}</span>
                                    </td>
                    
                                    <td v-if="vista[6].valor" class="hidden lg:table-cell py-1 max-w-0 w-full md:text-xs border-b border-gray-300 text-xs font-semibold text-gray-500">
                    
                                        <button @click="eliminar(salida)" title="delete" id="project-options-menu-0" type="button" class="w-8 h-8 px-2 mx-auto text-gray-400 focus:text-gray-500">
                                          <svg class="h-5 w-5 text-gray-400 hover:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                          </svg>
                                        </button>
                    
                                    </td>
                    
                                    <td class="color-hueso border-l border-gray-300 px-1 lg:px-2" >
                                    </td>
                    
                                </tr>
                
                            </tbody>
                
                        </table>
                
                        <p v-else class="text-gray-500 font-semibold text-md mt-1 text-center">No hay salidas registradas!</p>
                
                    </div>
                
                </div>
    
            </div>
    
        </div>
        
    </div>
</template>
    
<script>

    import Store from '@/store'
    import Salida from '@/controlador/salida'
    import Funciones from '@/funciones'
    import FiltroYear from '@/componentes/esqueleto/FiltroYear'
    import FiltroMonth from '@/componentes/esqueleto/FiltroMonth'    
    import Barra from '@/componentes/esqueleto/Barra'
    import Menu from '@/componentes/esqueleto/Menu'
    import Aplicacion from '@/controlador/aplicacion'
    
    export default {
    
        name: 'Salidas',
      
        components: {
            Barra, Menu, FiltroYear, FiltroMonth
        },
    
        data(){
            return{
                verm: {'text':'Select','num':'0'},
                very: {'text':'Select','num':'0'},
                buscador_nombre:'',
                buscador_codigo:'',
                buscador_ubicacion:'',
                buscador_pedido:'',
                vista: [{ 'name':'pedido','valor':true}, { 'name':'código','valor':false}, { 'name':'ubicación','valor':true},{ 'name':'v.unitario','valor':false},{ 'name':'total','valor':true},{ 'name':'AMD','valor':false}, { 'name':'eliminar','valor':false}],
                menu_mostrar:false,
                totales:{'salidas':0, 'totales':0},
                calcular_div:true,
                buscar_div:false

            }  
        },

        methods:{

            ocultar_menu_mostrar(){
                this.menu_mostrar = false
                localStorage.setItem('vista_salidas',JSON.stringify(this.vista))
            },

            set_viewy(json){ this.very = json},
            set_viewm(json){ this.verm = json},
            
            index_salidas(){
                Salida.index({'year': this.very.num,'month':this.verm.num})
            },
            
            index_salidas_default(){
               
                const num_months = ['01','02','03','04','05','06','07','08','09','10','11','12']
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth()
            
                Salida.index({'year':year,'month': num_months[month]})
            
            },
            
            total_salida(json){
              let valor = (json.cantidad * json.costo_unidad)
              return Funciones.format_tnumber(valor)
            },
            
            eliminar(json){ Salida.delete({'salida_id':json.id}) },

            set_config(){

                try {
                  this.vista = Funciones.check_config(this.vista,'vista_salidas')
                 
                } catch (error) {
                   console.log(error)
                }
                
            },

            calcular(){

                let salidas_reg = this.salidas
                
                var salidas = 0 
                var totales = 0
                
                salidas_reg.map((item,index, array)=>{
                
                    salidas = salidas+item.cantidad
                    totales = totales+(item.cantidad*item.costo_unidad) 
                
                })
                
                this.totales.salidas = Funciones.format_tnumber(salidas)
                this.totales.totales = Funciones.format_tnumber(totales)
                
            },

            format_number(int){ return Funciones.format_tnumber(int) }

        },

        computed:{

            salidas(){
            
                let todos = Store.state.salidas
            
                var count_nombre = this.buscador_nombre.toString()
                var count_pedido = this.buscador_pedido.toString()
                var count_codigo = this.buscador_codigo.toString()
                var count_ubicacion = this.buscador_ubicacion.toString()
            
                let temp_n = todos
                if(count_nombre.length > 0){ temp_n = Funciones.buscador_texto(count_nombre,todos,'producto') }
            
                let temp_p = temp_n
                if(count_pedido.length > 0){ temp_p = Funciones.buscador_texto(count_pedido,todos,'pedido') }
            
                let temp_c = temp_p
                if(count_codigo.length > 0){ temp_c = Funciones.buscador_texto(count_codigo,todos,'codigo') }
            
                let temp_r = temp_c
                if(count_ubicacion.length > 0){ temp_r = Funciones.buscador_texto(count_ubicacion,todos,'ubicacion') }
            
                return temp_r
            
            },
            
            login(){ return Store.state.login }

        },

        filters:{
            //format_number(int){ return Funciones.format_tnumber(int) },
            //format_fecha(date_time){ return Funciones.fecha_iso(date_time,'l') }
        },

        mounted(){
            this.$nextTick(()=>{

                Aplicacion.check_login(()=>{
                    if(!Store.state.salidas.length){ this.index_salidas_default() }
                })

                setTimeout(()=>{
                    this.set_config()
                },300)

            })
        },

        watch:{
            
            login(){
                if(this.login){
                    if(!Store.state.salidas.length){ this.index_salidas_default() }
                }
            },

            verm(){ this.index_salidas() },
            very(){ this.index_salidas() },
        
            salidas(){
                this.calcular()
            }

        }

      
    }

</script>

