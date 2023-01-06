import Axios from 'axios'
import Store from '@/store'
import Router from '@/router'

const url_api = ()=>{ return Store.state.url_api }
const token = ()=>{ return Store.state.token }

const Aplicacion = {

    loading(boolean){ Store.commit('set_loading',boolean) },
    mini_loading(boolean){ Store.commit('set_mini_loading',boolean) },

    notificar_realizado(string){ 

        var nlocal ={
            'tipo':'informativo', 
            'titulo':string,
            'contenido':'',
            'errores':[]
        }

        Store.dispatch('add_notificacion',nlocal)

    },

    redirect_home(error){
        
        console.log(error)
        localStorage.removeItem('token')
        Router.push({'name':'Home'})
        this.loading(false)
        this.mini_loading(false)

    },

    async registro(json){

        this.loading(true)

        await Axios.post(`${url_api()}registro`,json,{headers:{'content-type':'application/json'}})
        .then(response => {

            if(response.data.error == 0){

                Store.commit('set_user',response.data.user)
                Store.commit('set_token',response.data.user.token_register)
                Store.commit('set_login',true)

                if(json.recuerdame == true){
                    localStorage.setItem('token',response.data.user.token_register);
                }

                setTimeout(()=>{
                    Router.push({'name':'Reporte'})
                    this.loading(false)    
                },300)
                
            }
            
        })
        .catch(error => {

            console.log(error)
            
            this.loading(false)

            var nlocal ={
                'tipo':'advertencia',
                'titulo':'¿Ya tiene una cuenta?, intente iniciar sesión!',
                'contenido':'',
                'errores':[]
            }

            Store.dispatch('add_notificacion',nlocal)

            setTimeout(()=>{ 
                window.location.reload()
            },5000)
          
        })
        .finally()
    },

    async login(json){

        this.loading(true)

        await Axios.post(`${url_api()}login`,json,{'headers':{'Content-type':'application/json'}})
        .then((response)=>{

            if(response.data.error == 0){

                Store.commit('set_user',response.data.user)
                Store.commit('set_token',response.data.user.token)
                Store.commit('set_login',true)

                if(json.recuerdame == true){ localStorage.setItem('token',response.data.user.token) }

                setTimeout(()=>{
                    this.loading(false)
                    Router.push({'name':'Reporte'})
                },400)
                

            }


        }).catch((error)=>{
            
            console.log(error)
            this.loading(false)
            
            if(error.response.data.error == 300){

                var nlocal ={
                    'tipo':'advertencia',
                    'titulo':'Contraseña incorrecta!',
                    'contenido':'',
                    'errores':[]
                }

                Store.dispatch('add_notificacion',nlocal)
  
            }

            if(error.response.data.error == 400){

                var nlocal ={
                    'tipo':'advertencia',
                    'titulo':'Usuario no encontrado!',
                    'contenido':'Por favor registrarse primero',
                    'errores':[]
                }
  
                Store.dispatch('add_notificacion',nlocal)

            }
            
        }).finally()

    },

    async si_login(){

        let bool_token = localStorage.getItem('token') ? true : false
        
        if(bool_token){

            this.loading(true)

            await Axios.get(`${url_api()}index`,{'headers':{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.commit('set_user',response.data.user)
                    Store.commit('set_token',localStorage.getItem('token'))
                    Store.commit('set_login',true)
                    
                    Router.push({'name':'Reporte'})
                    
                }

                this.loading(false)

            }).catch((error)=>{

                this.redirect_home(error)
            
            }).finally()

        }

    },    

    async check_login(cb){

        let status = Store.state.login
        let bool_token = localStorage.getItem('token') ? true : false
        
        if(!status && bool_token ){

            this.loading(true)

            await Axios.get(`${url_api()}index`,{'headers':{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
            .then((response)=>{

                if(response.data.error == 0){

                    Store.commit('set_user',response.data.user)
                    Store.commit('set_token',localStorage.getItem('token'))
                    Store.commit('set_login',true)
                
                }

                this.loading(false)

            }).catch((error)=>{

                this.redirect_home(error)

            
            }).finally()

        }else{
            cb()
        }

    },

    async logout(){

        this.loading(true)

        await Axios.get(`${url_api()}logout`,{'headers':{'Authorization':`Bearer ${token()}`}})
        .then((response) => {
            this.erase_registro()
        })
        .catch(error => {
            this.redirect_home(error)
        })
        .finally()

    },

    erase_registro(){
        Store.dispatch('cerrar_sesion')
        localStorage.removeItem('token')
    },

    async restablecer(json){

        this.loading(true)

        await Axios.post(`${url_api()}restablecer`,json,{headers:{'content-type':'application/json'}})
        .then(response => {

            if(response.data.error == 0){

                this.notificar_realizado('Se envió una notificación al email para continuar el proceso!')
                
                setTimeout(()=>{
                    Router.push({'name':'Home'})
                    this.loading(false)    
                },300)
                
            }

            if(response.data.error == 400){

                var nlocal ={
                    'tipo':'advertencia',
                    'titulo':'El usuario no existe!',
                    'contenido':'',
                    'errores':[]
                }

                Store.dispatch('add_notificacion',nlocal)
                this.loading(false) 
            }

            if(response.data.error == 500){

                var nlocal ={
                    'tipo':'alerta',
                    'titulo':'No fue posible completar la solicitud!',
                    'contenido':'Por favor contacte con soporte',
                    'errores':[]
                }

                Store.dispatch('add_notificacion',nlocal)
                this.loading(false) 
            }

        })
        .catch(error => {

            window.location.reload()
          
        })
        .finally()
    },

    async recuperar(json){

        this.loading(true)

        await Axios.post(`${url_api()}recuperar`,json,{headers:{'content-type':'application/json'}})
        .then(response => {

            if(response.data.error == 0){

                this.notificar_realizado('La contraseña fue cambiada, puede iniciar sesión!')
                
                setTimeout(()=>{
                    Router.push({'name':'Entrar'})
                    this.loading(false)    
                },300)
                
            }

            if(response.data.error == 400){

                var nlocal ={
                    'tipo':'alerta',
                    'titulo':'Credenciales no validas!',
                    'contenido':'',
                    'errores':[]
                }

                Store.dispatch('add_notificacion',nlocal)

                setTimeout(()=>{
                    Router.push({'name':'Home'})
                    this.loading(false)    
                },300)

            }
            

        })
        .catch(error => {

            window.location.reload()
          
        })
        .finally()

    },

    async index_reporte(json){

        this.loading(true)

        await Axios.get(`${url_api()}index_reporte`,{'params':json,'headers':{'content-type':'application/json','Authorization':`Bearer ${token()}`}})
        .then((response)=>{

            if(response.data.error == 0){

                Store.commit('set_reporte',response.data.reporte)
                this.loading(false)
                
            }

        }).catch((error)=>{
            this.redirect_home(error)
        }).finally()
    }

}


export default Aplicacion