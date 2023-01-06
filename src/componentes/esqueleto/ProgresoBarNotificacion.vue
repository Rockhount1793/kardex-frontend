<template>
<div class="w-full">
    <table class="h-1" border="0" width="100%" cellpadding="0" cellspacing="1">
        <tr class="">

            <td align="left" class="bg-white" bgcolor="" :width="porcentaje+`%`">
            </td>

            <td align="left" :class="color_com" bgcolor="" width="auto">
            </td>

        </tr>
    </table>
</div>   
</template>

<script>
    
    import Store from '@/store'
    
    export default {

        name: 'Progreso-Bar-Notificacion',

        data(){
            return{
                tiempo:5000,
            }
        },

        props:{
            notificacion:Object
        },
        
        methods:{

            cuenta(){

                this.tiempo = (this.tiempo - 100)
                
                setTimeout(()=>{ 

                    if(this.tiempo > 0){
                        this.cuenta()
                    }
                
                },100)

                setTimeout(()=>{
                    if(this.tiempo == 0){
                        Store.dispatch('remover_notificacion',this.notificacion.id)
                    }
                },1000)
        
	      	}

        },

        computed:{

            porcentaje(){

                let temp = 1

                let actual = this.tiempo
                let inicial = 5000
                    
                if(actual > 0){
                    temp = (actual/inicial)*100
                }

                return temp

            },

            color_com(){

                let tipo = this.notificacion.tipo
                let temp = ''

                switch(tipo){

                    case 'completado':   temp = 'bg-gradient-to-r from-green-300 via-green-400 to-green-500'; break;
                    case 'alerta':       temp = 'bg-gradient-to-r from-red-300 via-red-400 to-red-500'; break;
                    case 'advertencia':  temp = 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500'; break;
                    case 'realizado':    temp = 'bg-gradient-to-r from-green-300 via-green-400 to-green-500'; break;
                    case 'informativo':  temp = 'bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'; break;
                    case 'alertas':      temp = 'bg-gradient-to-r from-red-300 via-red-400 to-red-500'; break;

                }

                return temp

            }

        },

        mounted(){

            this.$nextTick(()=>{

                setTimeout(()=>{
                    this.cuenta()
                },300)

            })

        }

    }
</script>

<style scoped>
</style>
