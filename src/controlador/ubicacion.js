    import Axios from 'axios'
    import Store from '@/store'
    import Router from '@/router'
    import Aplicacion from '@/controlador/aplicacion'
    
    const url_api = ()=>{ return Store.state.url_api }
    const token = ()=>{ return Store.state.token }

    const Ubicacion = {

        async index(){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}index_ubicaciones`,{'headers':{'Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.commit('set_ubicaciones',response.data.ubicaciones)
                    
                    if(!response.data.ubicaciones.length){

                        var nlocal ={
                            'tipo':'advertencia', 
                            'titulo':'No hay ubicaciones ingresadas!',
                            'contenido':'',
                            'errores':[]
                        }
          
                        Store.dispatch('add_notificacion',nlocal)
          
                    }

                    Aplicacion.loading(false)

                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async store(json){

            Aplicacion.loading(true)

            await Axios.post(`${url_api()}store_ubicacion`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.dispatch('add_ubicacion',[response.data.ubicacion])
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Ubicación creada')
                
                }

                if(response.data.error == 300){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'No realizado, Máximo 500 ubicaciones',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async update(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}update_ubicacion`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Ubicación actualizada')
                
                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async delete(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}delete_ubicacion`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.dispatch('remove_ubicacion',json)
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Ubicación Eliminada')
                
                }

                if(response.data.error == 300){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'Esta ubicación tiene entradas registradas',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }

                if(response.data.error == 400){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'Esta ubicacion tiene salidas registradas',
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

    export default Ubicacion