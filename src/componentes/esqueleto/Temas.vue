<template>

<div class="relative col-span-12 lg:col-span-12 ">
    
    <button type="button" @click="mostrar_menu()" class="flex items-center group cursor-pointer pr-5 transition ease-in-out duration-150">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 group-hover:text-indigo-400 w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
        </svg>
        
        <span class="block capitalize font-semibold text-sm text-gray-500 group-hover:text-indigo-400">
          {{tema_select.nombre}}
        </span>

    </button>

    <div v-if="modulo" v-click-away="mostrar_menu" class="z-10 w-full absolute border border-indigo-500 shadow-lg mt-0.5 rounded bg-white">
        
        <div class="h-48 overflow-auto">
            <ul :key="tema.index" v-for="tema in temas_com" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-0 text-base leading-6 shadow-xs focus:outline-none sm:text-sm sm:leading-5">
                <li  @click="set_tema(tema);mostrar_menu();" id="listbox-item-0" role="option" class="h-6 text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none py-1 pl-3 pr-9">
                
                    <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        <span class="font-semibold text-gray-700 text-sm ">
                            {{tema.nombre}}    
                        </span>
                    </div>

                </li>
            </ul>
        </div>
    </div>

</div>
</template>
    
<script>
    
    import Store from '@/store'
    import Funciones from '@/funciones'

    export default {

        name: 'Selector-Tema',

        components:{  },

        data(){

            return{
                tema_id:0,
                modulo:false
            }

        },

        methods:{

            set_tema(json){

                Store.commit('set_tema',json)
            },

            mostrar_menu(){

                if(this.modulo == false){

                    this.modulo = true
                   
                }else{
                    this.modulo = false
                }
      
            }

        },

        computed:{
            
            tema_select(){
                return {'id': 0, 'nombre':'Kardex'}
            },

            temas_com(){
                return [
                    {'id':1,'nombre':'Kardex'},
                    {'id':2,'nombre':'Negro'}
                    
                ]
            }

        },

        filters:{
            
        },

        mounted(){
            this.$nextTick(()=>{
               
            })
        },

        watch:{
     
        }

    }
    
</script>
    
<style scoped>

</style>
            