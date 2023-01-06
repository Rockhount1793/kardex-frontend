    import Axios from 'axios'
    import Store from '@/store'
    import Router from '@/router'
    import Aplicacion from '@/controlador/aplicacion'

    const url_api = ()=>{ return Store.state.url_api }
    const token = ()=>{ return Store.state.token }

    const Entrada = {

        async index(json){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}index_entradas`,{'params':json,'headers':{'content-type':'application/json','Authorization':`Bearer ${localStorage.getItem('token')}`}})
            .then((response)=>{
    
                if(response.data.error == 0){
    
                    Store.commit('set_entradas',response.data.entradas)
                    Aplicacion.loading(false)
        
                }
    
            }).catch((error)=>{
                Aplicacion.redirect_home(error)

            }).finally()

        },

        async store(json){

            Aplicacion.loading(true)

            await Axios.post(`${url_api()}store_entrada`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){
                    Store.dispatch('add_entrada',[response.data.entrada])
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Entrada creada')
                }

            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()

        },

        async delete(json){

            Aplicacion.loading(true)

            await Axios.put(`${url_api()}delete_entrada`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.dispatch('remove_entrada',json)
                    Aplicacion.loading(false)
                    Aplicacion.notificar_realizado('Entrada Eliminada')
                
                }

                if(response.data.error == 300){

                    Store.dispatch('remove_entrada',json)

                    Aplicacion.loading(false)

                    var nlocal ={
                        'tipo':'advertencia',
                        'titulo':'La entrada no existe!',
                        'contenido':'',
                        'errores':[]
                    }
    
                    Store.dispatch('add_notificacion',nlocal)

                }
                

            }).catch((error)=>{
                Aplicacion.redirect_home(error)

            }).finally()

        },

        async latest(json){

            Aplicacion.loading(true)

            await Axios.get(`${url_api()}latest_entrada`,{'params':json,'headers':{'content-type':'application/json','Authorization':`Bearer ${localStorage.getItem('token')}`}})
            .then((response)=>{
    
                if(response.data.error == 0){
                    
                    if(response.data.ultima_entrada.length){
                        Store.commit('set_ultima_entrada',response.data.ultima_entrada[0])    
                    }else{
                        Store.dispatch('remove_entrada',json)

                        var nlocal ={
                            'tipo':'advertencia',
                            'titulo':'Aún no existe una entrada!',
                            'contenido':'Por favor primero ingrese una entrada para esta ubicación!',
                            'errores':[]
                        }
        
                        Store.dispatch('add_notificacion',nlocal)
        
                        Store.commit('set_ultima_entrada',{'id':0,'precio_sugerido':0})    
        
                    }

                    Aplicacion.loading(false)
                }
    
            }).catch((error)=>{
                Aplicacion.redirect_home(error)
            }).finally()
            
        }

    }

    export default Entrada