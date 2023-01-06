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

          <span class="block font-semibold text-sm hover:text-indigo-500 text-gray-400">
            <span v-if="viewY.text != 'Select'">{{viewY.text}}</span>
            <span v-else>{{yearact}}</span>
          </span>

        </div>

      </button>

    </div>

    <div v-if="modulo" v-click-away="mostrarmenut" class="absolute border border-gray-400 shadow-lg mt-0.5 rounded bg-white">
      <ul :key="year.index" v-for="(year,key) in years" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="py-0 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">

        <li  @click="setmes(year);mostrarmenut();" id="listbox-item-0" role="option" class="cursor-pointer h-6 text-gray-900 pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out select-none py-1 pl-3 pr-9">
          <div class="flex items-center space-x-3">

            <svg class="mr-1.5 h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

            <span :class="year.num == viewY.num ? 'text-indigo-500' : 'text-gray-600' " class="font-bold text-xs block">
                {{year.text}}       
            </span>

          </div>

        </li>

      </ul>
    </div>

  </div>

</template>

<script>

  //import { mixin as clickaway } from 'vue-clickaway'
  import Funciones from '@/funciones/index'  
  
  export default {

    //mixins: [ clickaway ], 

    name: 'Filtro-Year',

    data(){
      return{
        modulo:false,
      }
    },
    
    components:{},
    
    props:{
      viewY:{type: Object,required: true}
    },

    methods: {

      setmes(json){ this.$emit('mviewy',json) },

      mostrarmenut(){ if(this.modulo == false){this.modulo = true }else{ this.modulo = false} }

    },

    computed:{

        years(){

            let date = new Date()
            
            let year = parseInt(date.getFullYear())

            return [
              {'text':'Todos','num':0},
              {'text':parseInt(year+1),'num':(year+1).toString()},
              {'text':parseInt(year),'num': year.toString()},
              {'text':parseInt(year-1),'num':(year-1).toString()},
              {'text':parseInt(year-2),'num':(year-2).toString()},
              {'text':parseInt(year-3),'num':(year-3).toString()},
              {'text':parseInt(year-4),'num':(year-4).toString()},
              {'text':parseInt(year-5),'num':(year-5).toString()},
              {'text':parseInt(year-6),'num':(year-6).toString()},
              {'text':parseInt(year-7),'num':(year-7).toString()},
              {'text':parseInt(year-8),'num':(year-8).toString()},
              {'text':parseInt(year-9),'num':(year-9).toString()},
              {'text':parseInt(year-10),'num':(year-10).toString()}

            ]
        },
      
        yearact(){ 
            let date = new Date()
            return date.getFullYear()
        }

    },

    filters:{ },

    mounted(){

    }

  }

</script>

<style scoped>
</style>