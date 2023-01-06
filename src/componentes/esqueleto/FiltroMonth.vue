<template>

  <div class="z-10">

    <div class="w-auto">
      <button type="button" @click="mostrarmenut()" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" class="pointer h-8 pl-2 pr-8 py-1  px-2 focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
        
        <div class="flex items-center space-x-1">

          <span class="flex right-0 inset-y-0 items-center pr-2 pointer-events-none">
            <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>            
          </span>

          <!--<span  aria-label="Online" class="bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"></span>-->

          <span class="block capitalize font-semibold text-sm text-gray-400 hover:text-indigo-500">
            <span v-if="viewM.text != 'Select'">{{viewM.text}}</span>
            <span v-else>{{monthact}}</span>
          </span>

        </div>

      </button>

    </div>

    <div v-if="modulo" v-click-away="mostrarmenut" class="absolute border border-gray-400 shadow-lg mt-0.5 rounded bg-white">
      <ul :key="mes.index" v-for="mes in meses" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-0 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">

        <li  @click="set_mes(mes);mostrarmenut();" id="listbox-item-0" role="option" class="cursor-pointer h-6 text-gray-900 pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none py-1 pl-3 pr-9">
          <div class="flex items-center space-x-3">

            <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span :class="mes.num == viewM.num ? 'text-indigo-500' : 'text-gray-600'" class="font-bold text-xs block">
                {{mes.text}}       
            </span>

          </div>

        </li>

      </ul>
    </div>

  </div>

</template>

<script>

  import Funciones from '@/funciones/index'  
  
  export default {

    name: 'Filtro-Mes',

    data(){
        return{
        
            modulo:false,

            meses:[
              {'text':'Todos','num':'0'},
              {'text':'Enero','num':'01'},
              {'text':'Febrero','num':'02'},
              {'text':'Marzo','num':'03'},
              {'text':'Abril','num':'04'},
              {'text':'Mayo','num':'05'},
              {'text':'Junio','num':'06'},
              {'text':'Julio','num':'07'},
              {'text':'Agosto','num':'08'},
              {'text':'Septiembre','num':'09'},
              {'text':'Octubre','num':'10'},
              {'text':'Noviembre','num':'11'},
              {'text':'Diciembre','num':'12'}
            ]

        }

    },
    
    components:{ },
    
    props:{
      viewM:{type: Object,required: true}
    },

    methods: {

      set_mes(json){ this.$emit('mviewm',json) },

      mostrarmenut(){
        if(this.modulo == false){this.modulo = true }else{ this.modulo = false}
      }
     
    },

    computed:{
        monthact(){ 
            let date = new Date()
            return  Funciones.textomes(date.getMonth()+1)
        }
    },

    filters: {
    },

    mounted(){

    }

  }

</script>

<style scoped>
</style>