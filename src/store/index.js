import Vuex from 'vuex'
import Router from '@/router'
import Funciones from '@/funciones'


const store = new Vuex.Store({

    state:{

        //##  constantes  ##//
        version_num:'Beta 1.2.0.5',
        version_date:'05-01-2023 22:06',
        urlsf:process.env.VUE_APP_URLF,
        urlsb:process.env.VUE_APP_URLB,
        url_api:process.env.VUE_APP_URLB_API,
        loading: false,
        mini_loading:false,

        g_apiclient_key:process.env.VUE_APP_G_API_CLIENT_KEY,
        g_capcha_key_site:process.env.VUE_APP_G_CAP_CLIENT_KEY,

        //##  generales  ##//
        tema:{'id':1,'nombre':'Kardex'},
        login:false,
        token:'',
        user:{'id':0,'avatar':''},
        seccion_num:[0,0],
        notificacion_local:[],
        notificacion_global:{'run':false,'titulo':'','contenido':'','icono':''},


        //##  datos  ##//
        productos:[],
        proveedores:[],
        entradas:[],
        ultima_entrada:{'id':0,'precio_sugerido':0},
        salidas:[],
        ubicaciones:[],
        reporte:{'id':0,'producto_id':0,'ubicacion_id':0}

    },

    mutations: {

        set_loading(state,bool){ state.loading = bool },
        set_user(state,json){ state.user = json },
        set_productos(state,array){ state.productos = array },
        set_proveedores(state,array){ state.proveedores = array },
        set_token(state,string){ state.token = string },
        set_login(state,bool){ state.login = bool },
        set_mini_loading(state,bool){ state.mini_loading = bool },
        set_notificacion_local(state,array){ state.notificacion_local = array },
        set_notificacion_global(state,json){ state.notificacion_global= json },
        set_seccion_num(state,int){ state.seccion_num = int },
        set_entradas(state,array){ state.entradas = array },
        set_salidas(state,array){ state.salidas = array },
        set_ubicaciones(state,array){ state.ubicaciones = array },
        set_ultima_entrada(state,json){ state.ultima_entrada = json },
        set_reporte(state,json){ state.reporte = json },
        set_tema(state,json){ state.tema = json }
        
    },

    actions:{

        async cerrar_sesion(){

            await this.dispatch('limpiar_sesion')
            .then(response => {

                if(response == 0){

                    var nlocal ={
                      'tipo':'informativo', 
                      'titulo':'Sesión finalizada',
                      'contenido':'',
                      'errores':[]
                    }

                    this.dispatch('add_notificacion',nlocal)

                    setTimeout(() => {
                        
                        Router.push({'name':'Entrar'})
                        this.commit('set_loading',false)
                    
                    },3000)

                }

                if(response >= 1){
                    
                    localStorage.removeItem('token')
                    Router.push({'name':'Home'})
                    
                    setTimeout(()=>{
                        window.location.reload()

                    },500)
                
                }

            })
            .catch(error => {
                console.log(error)
                
                localStorage.removeItem('token')
                Router.push({'name':'Home'})

                setTimeout(()=>{
                    window.location.reload()
                },500)

            })
            .finally(()=>{ })

        },

        limpiar_sesion(state){

            // limpiar

            this.commit('set_user',{'id':0,'avatar':''})
            this.commit('set_productos',[])
            this.commit('set_proveedores',[])
            this.commit('set_token','')
            this.commit('set_login',false)
            this.commit('set_mini_loading',false)
            this.commit('set_notificacion_local',[])
            this.commit('set_notificacion_global',{'run':false,'titulo':'','contenido':'','icono':''})
            this.commit('set_seccion_num',[2,2])
            this.commit('set_entradas',[])
            this.commit('set_salidas',[])
            this.commit('set_ubicaciones',[])
            this.commit('set_ultima_entrada',{'id':0,'precio_sugerido':0})
            this.commit('set_reporte',{'id':0,'producto_id':0})

            return 0

        },

        // notificaciones //
        add_notificacion(state,json){

            let notificaciones = this.state.notificacion_local
            let noti = json
            let codigo = Funciones.generar_id()
            let existe = notificaciones.some((n)=> n.id == codigo)

            if(!existe){

                noti.id = codigo
                let array = [noti]
                const result = [...notificaciones,...array]
                this.commit('set_notificacion_local',result)

            }else{
                this.add_notificacion(json)
            }

        },
        
        remover_notificacion(state,string){
            let defecto = this.state.notificacion_local
            const result = defecto.filter((n)=>{ return(n.id != string) })
            this.commit('set_notificacion_local',result)
        },
       
        // productos //
        add_productos(state,array){
            let defecto = this.state.productos
            const result = defecto.concat(array)
            this.commit('set_productos',result)
        },

        // entrada //
        add_entrada(state,array){
            let defecto = this.state.entradas
            const result = array.concat(defecto)
            this.commit('set_entradas',result)
        },

        remove_entrada(state,json){
            let defecto = this.state.entradas
            const result = defecto.filter((p)=>{ return(p.id != json.entrada_id) })
            this.commit('set_entradas',result)
        },

        // salida //
        add_salida(state,array){
            let defecto = this.state.salidas
            const result = array.concat(defecto)
            this.commit('set_salidas',result)
        },

        remove_salida(state,json){
            let defecto = this.state.salidas
            const result = defecto.filter((p)=>{ return(p.id != json.salida_id) })
            this.commit('set_salidas',result)
        },

        // proveedores //
        add_proveedores(state,array){
            let defecto = this.state.proveedores
            const result = defecto.concat(array)
            this.commit('set_proveedores',result)
        },

        remove_proveedor(state,json){
            let defecto = this.state.proveedores
            const result = defecto.filter((p)=>{ return(p.id != json.proveedor_id) })
            this.commit('set_proveedores',result)
        },

        // ubicaciones //
        remove_ubicacion(state,json){
            let defecto = this.state.ubicaciones
            const result = defecto.filter((p)=>{ return(p.id != json.ubicacion_id) })
            this.commit('set_ubicaciones',result)
        },

        add_ubicacion(state,array){
            let defecto = this.state.ubicaciones
            const result = defecto.concat(array)
            this.commit('set_ubicaciones',result)
        },

    },

    getters:{
        //sum_count(state){ return state.array.filter(todo => todo.done) }
    }


})

export default store