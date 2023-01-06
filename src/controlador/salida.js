    import Axios from 'axios'
    import Store from '@/store'
    import Router from '@/router'
    import Aplicacion from '@/controlador/aplicacion'

    const url_api = ()=>{ return Store.state.url_api }
    const token = ()=>{ return Store.state.token }

    const Salida = {

        async index(json){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}index_salidas`,{'params':json,'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{
    
                if(response.data.error == 0){
    
                    Store.commit('set_salidas',response.data.salidas)
                    Aplicacion.loading(false)
        
                }
    
            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async store(json){

            Aplicacion.loading(true)

            await Axios.post(`${url_api()}store_salida`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){
                    Store.dispatch('add_salida',[response.data.salida])
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Salida creada')
                }

                if(response.data.error == 300){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'No hay existencias suficientes en esta ubicación!',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }


            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async delete(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}delete_salida`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.dispatch('remove_salida',json)
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Salida Eliminada')
                
                }

                if(response.data.error == 300){

                    Store.dispatch('remove_salida',json)

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'La salida no existe!',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }
                

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        }

    }

    export default Salida