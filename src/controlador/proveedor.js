    import Axios from 'axios'
    import Store from '@/store'
    import Router from '@/router'
    import Aplicacion from '@/controlador/aplicacion'

    const url_api = ()=>{ return Store.state.url_api }
    const token = ()=>{ return Store.state.token }

    const Proveedor = {

        async index(){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}index_proveedores`,{'headers':{'Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.commit('set_proveedores',response.data.proveedores)

                    if(!response.data.proveedores.length){

                        var nlocal ={
                            'tipo':'advertencia', 
                            'titulo':'No hay proveedores ingresados!',
                            'contenido':'',
                            'errores':[]
                        }
          
                        Store.dispatch('add_notificacion',nlocal)
    
                    }
      
                    Aplicacion.loading(false)
                    
                }

                if(response.data.error == 300){

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'Esta proveedor tiene registros de entradas!',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async store(json){

            Aplicacion.loading(true)

            await Axios.post(`${url_api()}store_proveedor`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){
                    Store.dispatch('add_proveedores',[response.data.proveedor])
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Proveedor creado')
                }

                
                if(response.data.error == 300){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'No realizado, Máximo 500 proveedores!',
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

            await Axios.put(`${url_api()}update_proveedor`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Proveedor actualizado')
                
                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async delete(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}delete_proveedor`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){
                
                    Store.dispatch('remove_proveedor',json)
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Proveedor Eliminado')
                
                }

                if(response.data.error == 300){
                    
                    Aplicacion.loading(false)
        
                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'Este proveedor tiene entradas registradas!',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }

                if(response.data.error == 600){
                    
                    Aplicacion.loading(false)
                    Store.dispatch('remove_proveedor',json)
                    
                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'Proveedor no encontrado!',
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

    export default Proveedor