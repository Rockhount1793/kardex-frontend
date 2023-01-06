    import Axios from 'axios'
    import Store from '@/store'
    import Router from '@/router'
    import Aplicacion from './aplicacion'

    const url_api = ()=>{ return Store.state.url_api }
    const token = ()=>{ return Store.state.token }

    const Producto = {

        async index(){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}index_productos`,{'headers':{'Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.commit('set_productos',response.data.productos)
                    
                    if(!response.data.productos.length){

                        var nlocal ={
                            'tipo':'advertencia', 
                            'titulo':'No hay productos ingresados!',
                            'contenido':'',
                            'errores':[]
                        }
          
                        Store.dispatch('add_notificacion',nlocal)
          
                    }

                    Aplicacion.loading(false)
                    
                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
                //window.location.reload()

            }).finally()

        },

        async store(json){

            Aplicacion.loading(true)

            await Axios.post(`${url_api()}store_producto`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){
                    Store.dispatch('add_productos',[response.data.producto])
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Producto creado')
                }

                if(response.data.error == 99){

                    var nlocal ={
                        'tipo':'alerta', 
                        'titulo':'La imagen no se pudo procesar!',
                        'contenido':'',
                        'errores':[]
                    }
      
                    Store.dispatch('add_notificacion',nlocal)
      
                }

                if(response.data.error == 300){

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'No realizado, Máximo 1000 productos!',
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

            await Axios.put(`${url_api()}update_producto`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Producto actualizado')
                
                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async delete(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}delete_producto`,json,{'headers':{'Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    let productos = Store.state.productos

                    productos = productos.filter((p)=> p.id != json.producto_id)
                    
                    Store.commit('set_productos',productos)

                    Aplicacion.loading(false)
                    
                }

                if(response.data.error == 300){
                    
                    var nlocal ={
                        'tipo':'advertencia', 
                        'titulo':'El producto tiene entradas registradas!',
                        'contenido':'',
                        'errores':[]
                    }
      
                    Store.dispatch('add_notificacion',nlocal)
                    Aplicacion.loading(false)

                }

                if(response.data.error == 400){
                    
                    var nlocal ={
                        'tipo':'advertencia', 
                        'titulo':'El producto tiene salidas registradas!',
                        'contenido':'',
                        'errores':[]
                    }
      
                    Store.dispatch('add_notificacion',nlocal)

                    Aplicacion.loading(false)

                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()
        }

    }

    export default Producto