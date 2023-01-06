<template>
<div class="color-hueso border rounded border-orange-900 shadow">

    
    <div class="bg-orange-900">
        <p class="text-center font-semibold text-md text-white">Producto</p>
    </div>

    <div class="p-3 mt-3 grid grid-cols-6 lg:grid-cols-12 gap-2">

        <div class="relative col-span-12 lg:col-span-12 ">

            <button type="button" @click="mostrar_menu()" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="w-full border border-gray-300 bg-white rounded cursor-pointer h-8 pl-2 pr-8 py-1  px-2 focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5">

                <div class=" flex items-center justify-between space-x-1 w-full">

                  <span class="block capitalize font-semibold text-sm text-indigo-500 hover:text-indigo-400">
                    {{producto_select.nombre}} : {{producto_select.marca}} : {{producto_select.codigo}}
                  </span>

                  <span class="flex right-0 inset-y-0 items-center pr-2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>  
                  </span>

                </div>

            </button>

            <div v-if="modulo" v-click-away="mostrar_menu" class="z-10 w-full absolute border border-indigo-500 shadow-lg mt-0.5 rounded bg-white">

                <ul>
                    <li>
                        <div class="flex-1 lg:flex lg:w-full px-2 lg:space-x-2">

                            <div class="w-full">
        
                                <label for="nombre" class="block text-sm font-semibold text-gray-500"><span v-html="counter_letras_nombre" class=""></span> </label>
                                
                                <div class="flex items-center space-x-1 border shadow-lg h-7 focus:border-indigo-500 rounded border-gray-400">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>

                                    <input id="nombre" placeholder="Buscar Nombre.." type="text" v-model="buscador_nombre" class="h-6 w-full px-2 border-l border-gray-400 focus:outline-none  transition duration-300 ease-in-out text-sm" />

                                </div>
                                
                            
                            </div>
                    
                            <div class="w-full">
                                
                                <label for="codigo" class="block text-sm font-semibold text-gray-500"><span v-html="counter_letras_codigo" class=""></span></label>
                                
                                <div class="flex items-center space-x-1 border shadow-lg h-7 focus:border-indigo-500 rounded border-gray-400">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>

                                    <input id="codigo" placeholder="Buscar Codigo.." type="text" v-model="buscador_codigo" class="h-6 w-full px-2 border-l border-gray-400 focus:outline-none  transition duration-300 ease-in-out text-sm" />

                                </div>
                                
                            
                            </div>

                        </div>

                    </li>
                </ul>

                <div class="h-48 overflow-auto">
                    <ul :key="prod.index" v-for="prod in productos_com" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-0 text-base leading-6 shadow-xs focus:outline-none sm:text-sm sm:leading-5">

                        <li  @click="set_producto(prod);mostrar_menu();" id="listbox-item-0" role="option" class="h-6 text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none py-1 pl-3 pr-9">
                        
                            <div class="flex items-center space-x-3">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>

                                <span class="font-semibold text-gray-700 text-sm ">
                                    {{prod.nombre}} : {{prod.marca}} : {{prod.codigo}}       
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
    import Producto from '@/controlador/producto'
  
    export default {

        name: 'Selector-Producto',

        components:{  },

        data(){

            return{
                producto_id:0,
                buscador_nombre:'',
                buscador_codigo:'',
                modulo:false
            }

        },

        methods:{

            set_producto(json){
                this.producto_id = json.id
            },

            mostrar_menu(){
              
              if(this.modulo == false){
                    
                    this.modulo = true 
                    if(!Store.state.productos.length){ Producto.index() }

                    setTimeout(() => {
                        document.getElementById('nombre').focus()
                    },300);

                }else{ 
                    this.modulo = false
                }
            },

            emitir(number){
                this.$emit('set_producto',number)
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

            counter_letras_codigo(){

                let  contador = this.buscador_codigo.toString().length

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

            productos(){ return Store.state.productos },

		    productos_com(){

		    	let todos = []

		    	var count_nombre = this.buscador_nombre.toString()
                var count_codigo = this.buscador_codigo.toString()

                if((count_nombre.length + count_codigo.length) > 4){
                    todos = Store.state.productos
                }

		    	let temp_n = todos
		    	if(count_nombre.length > 4){ temp_n = Funciones.buscador_texto(count_nombre,todos,'nombre') }

                let temp_c = temp_n
		        if(count_codigo.length > 4){ temp_c = Funciones.buscador_texto(count_codigo,todos,'codigo') }

                if(temp_c.length >= 1){
		    	    return temp_c.slice(0,10)
                }else{
                    return Store.state.productos.slice(0,500)
                }

		    },

            producto_select(){

                let productos = this.productos

                let temp = {'id':0,'nombre':'Producto','codigo':''}
               
                if(this.producto_id > 0){
                    temp = productos.find((p)=>p.id == this.producto_id)
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
            
            productos_com(){

                let count_nombre = this.buscador_nombre.toString()
                let count_codigo = this.buscador_codigo.toString()

                if(count_nombre.length > 4 || count_codigo.length > 4){

                    if(this.productos_com.length){

                        let _id = this.productos_com[0].id
                        this.producto_id = _id
                        this.emitir(_id )
                    
                    }else{

                        this.producto_id = 0
                        
                    }
                
                }else{

                    this.producto_id = 0
                    
                }
                
            },

            producto_id(){
                this.emitir(this.producto_id)
            },

            buscador_nombre(){
                if(this.buscador_nombre.toString().length > 4){
                    if(!Store.state.productos.length){ Producto.index() }
                }
            },
            
            buscador_codigo(){
                if(this.buscador_codigo.toString().length > 4){
                    if(!Store.state.productos.length){ Producto.index() }
                }
            },

        }

    }

</script>

<style scoped>

</style>
