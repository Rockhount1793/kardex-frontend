import Store from '@/store'
import Router from '@/router'
import Aplicacion from '@/controlador/aplicacion'

const funciones ={

    check_login(){ if(!Store.state.user.id >= 1 && !Store.state.token.length && !Store.state.login){ Router.push({'name':'Home'}); return false }else{ return true } },  
    check_email(i){ var e = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); return e.test(i); },
    format_tnumber(i){ if(i != 0 || i!='0'){ return i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }else{ return 0 } },
    format_tnumber_dec(i){ if(i){return parseInt( i.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))} },
    largotext(t,l){ if(t != null){ if(t.length > parseInt(l)){ var res = t.slice(0,parseInt(l)); return res+'..' }else{ return t} } },
    
    fechas(f){try{ var x = f.split("-"); var form = x[2]+'-'+x[1]+'-'+x[0]; return form }catch(error){ return '' } },
    fecha_time(i){ try { let x = i.split(" "); var y =x[0].split("-"); var f = y[2]+'-'+y[1]+'-'+y[0]+' '+x[1]; return f }catch(error){ return '' } },
    fechaonly(i){ try { let x = i.split(" "); var y =x[0].split("-"); var f = y[2]+'-'+y[1]+'-'+y[0]; return f }catch(error){ return '' } },
    
    fecha_iso(i,x){
        let d = new Date(i);
        let temp = '';
    
        if(x=='t'){ temp = d.getDate()+'-'+ (d.getMonth()+1) +'-'+d.getFullYear()} 
        if(x=='l'){ temp = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()+'  '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds() } 
        
        return temp
    },

    textodia(i){
      let t = '';
      switch(i){
        case 'Mo': t='Monday';break;
        case 'Tu': t='Twesday';break;
        case 'We': t='wednesday';break;
        case 'Th': t='Thursday';break;
        case 'Fr': t='Friday';break;
        case 'Sa': t='Saturday';break;
        case 'Su': t='Sunday';break;
        default: t = 'undefined'; break;
      }
      return t
    },

    textomes(int){

      let text = ''
      
      switch(int){
        case 1: text='Enero';break;
        case 2: text='Febrero';break;
        case 3: text='Marzo';break;
        case 4: text='Abril';break;
        case 5: text='Mayo';break;
        case 6: text='Junio';break;
        case 7: text='Julio';break;
        case 8: text='Agosto';break;
        case 9: text='Septiembre';break;
        case 10: text='Octubre';break;
        case 11: text='Noviembre';break;
        case 12: text='Diciembre';break;
        default: text = 'undefined'; break;
      }
      return text
    },

    textomeslite(i){

      let t = ''
      
      switch(i){
        case '01': t='Jan';break;
        case '02': t='Feb';break;
        case '03': t='Mar';break;
        case '04': t='Apr';break;
        case '05': t='May';break;
        case '06': t='Jun';break;
        case '07': t='Jul';break;
        case '08': t='Aug';break;
        case '09': t='Sep';break;
        case '10': t='Oct';break;
        case '11': t='Nov';break;
        case '12': t='Dec';break;
        default: t = 'undefined'; break;
      }
      return t
    },

    fechalite(i) {
      try{
        var x = i.split("-")
        /*var format = x[2]+'-'+x[1]+'-'+x[0];*/
        var format = x[2]
        return format
      }catch(error){
        return ''
      } 
    },

    color_milestone(i){
    
      let temp = []

      switch(i.color){
          //grd
        case 1: temp = ['bg-gradient-to-r from-gray-100 to-red-400','text-red-500','text-gray-600']; break;
        case 3: temp = ['bg-gradient-to-r from-gray-100 to-yellow-400','text-yellow-500','text-gray-600']; break;
        case 5: temp = ['bg-gradient-to-r from-gray-100 to-green-400','text-green-500','text-gray-600']; break;
        case 7: temp = ['bg-gradient-to-r from-gray-100 to-blue-400','text-blue-500','text-gray-600']; break;
        case 9: temp = ['bg-gradient-to-r from-gray-100 to-indigo-400','text-indigo-500','text-gray-600']; break;
        case 11: temp = ['bg-gradient-to-r from-gray-100 to-purple-400','text-purple-500','text-gray-600']; break;
        case 13: temp = ['bg-gradient-to-r from-gray-100 to-pink-400','text-pink-500','text-gray-600']; break;
        case 15: temp = ['bg-gradient-to-r from-gray-100 to-gray-400','text-gray-500','text-black']; break;
          //lgrd
        case 2: temp = ['bg-gradient-to-r from-gray-100 to-red-300','text-red-400','text-gray-500']; break;
        case 4: temp = ['bg-gradient-to-r from-gray-100 to-yellow-300','text-yellow-400','text-gray-500']; break;
        case 6: temp = ['bg-gradient-to-r from-gray-100 to-green-300','text-green-400','text-gray-500']; break;
        case 8: temp = ['bg-gradient-to-r from-gray-100 to-blue-300','text-blue-400','text-gray-500']; break;
        case 10: temp = ['bg-gradient-to-r from-gray-100 to-indigo-300','text-indigo-400','text-gray-500']; break;
        case 12: temp = ['bg-gradient-to-r from-gray-100 to-purple-300','text-purple-400','text-gray-500']; break;
        case 14: temp = ['bg-gradient-to-r from-gray-100 to-pink-300','text-pink-400','text-gray-500']; break;
        case 16: temp = ['bg-gradient-to-r from-gray-100 to-gray-300','text-gray-400','text-gray-700']; break;
          //solid
        case 17: temp = ['bg-red-500','text-red-500','text-white']; break;
        case 18: temp = ['bg-yellow-500','text-yellow-500','text-white']; break;
        case 19: temp = ['bg-green-500','text-green-500','text-white']; break;
        case 20: temp = ['bg-blue-500','text-blue-500','text-white']; break;
        case 21: temp = ['bg-indigo-500','text-indigo-500','text-white']; break;
        case 22: temp = ['bg-purple-500','text-purple-500','text-white']; break;
        case 23: temp = ['bg-pink-500','text-pink-500','text-white']; break;
        case 24: temp = ['bg-gray-500','text-gray-500','text-white']; break;
          //lsolid
        case 25: temp = ['bg-red-400','text-red-400','text-gray-700']; break;
        case 26: temp = ['bg-yellow-400','text-yellow-400','text-gray-700']; break;
        case 27: temp = ['bg-green-400','text-green-400','text-gray-700']; break;
        case 28: temp = ['bg-blue-400','text-blue-400','text-gray-700']; break;
        case 29: temp = ['bg-indigo-400','text-indigo-400','text-gray-700']; break;
        case 30: temp = ['bg-purple-400','text-purple-400','text-gray-700']; break;
        case 31: temp = ['bg-pink-400','text-pink-400','text-gray-700']; break;
        case 32: temp = ['bg-gray-400','text-gray-100','text-white']; break;

      }

      return temp
    },

    // palabra_buscada, arreglo en que buscar, key del arreglo a comparar //
    buscador_texto(word,array,clave){ 
        
        let temp = []
        
        for(let index = 0; index < array.length; index++){

            let str_n = array[index][clave.toString()].toString().toLowerCase()
            let bool_n = str_n.includes(word.toString().toLowerCase())
            if(bool_n){ temp.push(array[index]) } 
    
        }

        // retorna areglo con las coincidencias
        return temp
    },

    codigo_sugerido(nombre,mark,referencia){

        var nombre_i = nombre.toString()
        var marca_i = mark.toString()
        let referencia_i = referencia.toString()

        var codigo= ''
        var bloques_n = nombre_i.split(' ')

        if(bloques_n.length >= 2){

            for(let index = 0; index <bloques_n.length; index++){

              codigo = codigo + bloques_n[index].charAt(0).toUpperCase()

            }

        }else{
            if(nombre_i.length >= 2){
                codigo = nombre_i.charAt(0).toUpperCase() + nombre_i.charAt(nombre_i.length - 1).toUpperCase()
            }else{
                codigo = nombre_i.charAt(0).toUpperCase()
            }
        }

        var marca= ''
        var bloques_m = marca_i.split(' ')

        if(bloques_m.length >= 2){

            for(let index = 0; index <bloques_m.length; index++){

              marca = marca + bloques_m[index].charAt(0).toUpperCase()

            }

        }else{
            if(marca_i.length >= 2){
                marca = marca_i.charAt(0).toUpperCase() + marca_i.charAt(marca_i.length - 1).toUpperCase()
            }
            else{
                marca = marca_i.charAt(0).toUpperCase()
            }
        }

        var code = ''
        
        if(nombre_i.length && marca_i.length && referencia_i){
            code = codigo +'-'+marca+'-'+ referencia_i.toUpperCase()
        }
        
        return code.slice(0,99)

    },

    generar_id(){

      let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  

      let string_length = 8
      let randomstringGenerator = ''
  
      for (let i=0; i<string_length; i++){

          let rnum = Math.floor(Math.random() * chars.length)
          randomstringGenerator += chars.substring(rnum,rnum+1)

      }

      return randomstringGenerator

    },

    check_config(vista,name_config){
	
      var vista_config = vista ? vista:[]
      var config = []

      let bool_config = localStorage.getItem(name_config) ? true : false

      if(bool_config){

        let config_ = JSON.parse(localStorage.getItem(name_config))

        if( typeof config_ == 'object'){
          config = config_
        }

      }

      var control0 = true 
      var control1 = true
      
      for (let index1 = 0; index1 < vista_config.length; index1++){
          
            let value_item_config = config[index1]
            let value_item_vista = vista_config[index1]
            
            if(typeof value_item_config == 'object' &&  Object.keys(value_item_config).length == Object.keys(value_item_vista).length){
    
                 var variables = Object.keys(value_item_vista).length
                
                  for(let index = 0; index < variables; index++){
                  
                   if(Object.keys(value_item_vista)[index] == Object.keys(value_item_config)[index]){
                   
                     if(index == 0 && value_item_vista[[Object.keys(value_item_vista)[index]]] !== value_item_config[[Object.keys(value_item_config)[index]]]){
                      
                        //console.log('fallo nombre')
                        control0 = false
    
                     }
                     
                     if(index == 1 && typeof value_item_config[[Object.keys(value_item_config)[index]]] != 'boolean'){
                         //console.log('fallo boolean')
                        control1 = false
                     }   
                     
                    
                   }
                   
    
                 }
            }else{
               control0 = false
               control1 = false
                
            }
    
      }
      
      if(control0 && control1){
          return config
      }else{
          return vista_config   
      }
      
    
    }
}

export default funciones
