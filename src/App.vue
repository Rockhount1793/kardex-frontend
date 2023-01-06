<template>
<div>
    <Cargador></Cargador>
    <NotificacionLocal></NotificacionLocal>
    <Router-view></Router-view>
</div>
</template>

<script>

import NotificacionLocal from '@/componentes/esqueleto/NotificacionLocal'
import Cargador from '@/componentes/esqueleto/Cargador'

export default {

    name:'App-Default',
    
    components:{ NotificacionLocal, Cargador },

    data(){
        return{

        }
    },

    methods:{
        
        notificacion(json){

            //este es un ejemplo de notificación local y global

            var nglobal = {
              'run':true,
              'titulo': json.text,
              'contenido': json.id,
              'icono': 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            }

            //global
            //Store.commit('set_notificacion_global',nglobal);

        }

    },

    mounted(){
        this.$nextTick(()=>{

        })
    }

}

</script>


<style>
    *{
        font-family: 'Nunito', sans-serif;
    }

</style>
