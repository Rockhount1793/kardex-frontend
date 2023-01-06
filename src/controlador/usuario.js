import Axios from 'axios'
import Store from '@/store'
import Router from '@/router'
import Aplicacion from '@/controlador/aplicacion'

const url_api = ()=>{ return Store.state.url_api }
const token = ()=>{ return Store.state.token }

const Usuario = {

    notificar_realizado(string){ 

        var nlocal ={
            'tipo':'informativo', 
            'titulo':string,
            'contenido':'',
            'errores':[]
        }

        Store.dispatch('add_notificacion',nlocal)

    },
    
    async change_password(json){

        Aplicacion.loading(true)

        await Axios.post(`${url_api()}update_password`,json,{'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
        .then((response)=>{

            if(response.data.error == 0){
                Aplicacion.notificar_realizado('Contraseña actualizada!')
            }

            if(response.data.error == 300){

                var nlocal ={
                    'tipo':'advertencia',
                    'titulo':'Contraseña actual incorrecta!',
                    'contenido':'',
                    'errores':[]
                }

                Store.dispatch('add_notificacion',nlocal)
                
            }

            this.loading(false)

        }).catch((error)=>{
            Aplicacion.redirect_home(error)
        }).finally()

    }


}


export default Usuario