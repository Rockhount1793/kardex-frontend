<template>
<div class="color-hueso border rounded border-teal-600 shadow">
    
    <div class="bg-teal-600">
        <p class="text-center font-semibold text-md text-white ">Proveedor</p>
    </div>
    
    <div class="p-3 mt-3 grid grid-cols-6 lg:grid-cols-12 gap-2">

        <div class="relative col-span-12 lg:col-span-12 ">

            <button type="button" @click="mostrar_menu()" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="w-full border border-gray-300 bg-white rounded cursor-pointer h-8 pl-2 pr-8 py-1  px-2 focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5">

                <div class=" flex items-center justify-between space-x-1 w-full">

                  <span class="block capitalize font-semibold text-sm text-indigo-500 hover:text-indigo-400">
                    {{proveedor_select.nombre}} : {{proveedor_select.direccion}}
                  </span>

                    <span class="flex right-0 inset-y-0 items-center pr-2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                    </span>

                </div>

            </button>

            <div v-if="modulo" v-click-away="mostrar_menu" class="z-10 w-full absolute border border-indigo-500 shadow-lg mt-0.5 rounded bg-white">

                <ul>
                    <li>
                        <div class="w-full px-2">

                            <label for="nombre" class="block text-sm font-semibold text-gray-500"><span v-html="counter_letras_nombre" class=""></span></label>

                            <div class="flex items-center space-x-1 border shadow-lg h-7 focus:border-indigo-500 rounded border-gray-400">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                
                                <input id="nombre" placeholder="Nombre.." type="text" v-model="buscador_nombre" class="h-6 w-full px-2 border-l border-gray-400 focus:outline-none  transition duration-300 ease-in-out text-sm" />
                
                            </div>
                
                        </div>
                    </li>
                </ul>

                <div class="h-48 overflow-auto">
                    <ul :key="pro.index" v-for="pro in proveedores_com" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-0 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">

                        <li  @click="set_proveedor(pro);mostrar_menu();" id="listbox-item-0" role="option" class="h-6 text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none py-1 pl-3 pr-9">
                        
                            <div class="flex items-center space-x-3">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>

                                <span class="font-semibold text-gray-700 text-sm ">
                                    {{pro.nombre}} : {{pro.direccion}}       
                                </span>

                            </div>

                        </li>

                    </ul>
                </div>

            </div>

        </div>
    
    </div>

</div>
</template>

<script>

    import Store from '@/store'
    import Funciones from '@/funciones'
    import Proveedor from '@/controlador/proveedor'
  
    export default {

        name: 'Selector-Proveedor',

        components:{  },

        data(){

            return{
                proveedor_id:0,
                buscador_nombre:'',
                modulo:false 
            }
        },

        methods:{

            mostrar_menu(){

              if(this.modulo == false){
                    
                    this.modulo = true 
                    if(!Store.state.proveedores.length){ Proveedor.index() }

                    setTimeout(() => {
                        document.getElementById('nombre').focus()
                    },300);

                }else{ 
                    this.modulo = false
                }
            
            },

            set_proveedor(json){
                this.proveedor_id = json.id
            },

            emitir(number){
                this.$emit('set_proveedor',number)
            },

            color_chart(number, contador_charts){

                if(number <= contador_charts){
                    return 'text-green-500'
                }
                else{
                    return 'text-gray-500'  
                }

            }

        },

        computed:{

            counter_letras_nombre(){

                let contador = this.buscador_nombre.toString().length
                
                var temp = `
                    <span class="${this.color_chart(1,contador)}">&#8226;<span>
                    <span class="${this.color_chart(2,contador)}">&#8226;<span>
                    <span class="${this.color_chart(3,contador)}">&#8226;<span>
                    <span class="${this.color_chart(4,contador)}">&#8226;<span>
                    <span class="${this.color_chart(5,contador)}">&#8226;<span>
                `

                return temp
            
            },

            user(){ return Store.state.user },

            proveedores(){ return Store.state.proveedores },

		    proveedores_com(){

		    	let todos = []

		    	var count_nombre = this.buscador_nombre.toString()

                if(count_nombre.length > 4){
                    todos = Store.state.proveedores
                }

		    	let temp_n = todos
		    	if(count_nombre.length > 4){ temp_n = Funciones.buscador_texto(count_nombre,todos,'nombre') }

                if(temp_n.length >= 1){
		    	    return temp_n.slice(0,10)
                }else{
                    return Store.state.proveedores.slice(0,500)
                }

		    },

            proveedor_select(){

                let proveedores = this.proveedores

                let temp = {'id':0,'nombre':'Proveedor','direccion':''}

                if(this.proveedor_id > 0){
                    temp = proveedores.find((p)=>p.id == this.proveedor_id)
                }

                return temp

            }

        },

        filters:{
            
        },

        mounted(){
            this.$nextTick(()=>{

            })
        },

        watch:{
            
            proveedores_com(){

                let count_nombre = this.buscador_nombre.toString()

                if(count_nombre.length > 4 ){

                    if(this.proveedores_com.length){

                        let _id = this.proveedores_com[0].id
                        this.proveedor_id = _id
                        this.emitir(_id)
                    
                    }else{

                        this.proveedor_id = 0
                        
                    }
                
                }else{

                    this.proveedor_id = 0
                    
                }
                
            },

            proveedor_id(){
                this.emitir(this.proveedor_id)
            },

            buscador_nombre(){
                if(this.buscador_nombre.toString().length > 4){
                    if(!Store.state.proveedores.length){ Proveedor.index() }
                }
            }            

        }

    }

</script>

<style scoped>

</style>
