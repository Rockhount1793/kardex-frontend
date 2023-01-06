<template lang="">
    
    <div class="mt-5 absolute bottom-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 flex-col place-items-end w-full text-sm  text-center">

        <b class="text-gray-600 no-underline hover:no-underline">&copy; KARDEX 2022 </b>
        <span class="text-green-600">_vr. {{version_num}} _</span>
        <b class="text-gray-600">  NZCAICEDO  </b>

        <Router-link class="text-green-600" to="/terminos">Terminos y Condiciones</Router-link>

    </div>

</template>

<script>

import Store from '@/store'

export default {
    
    'name':'footer',

    computed:{
        version_num(){
            return Store.state.version_num
        }
    }

}
</script>

<style lang="">
    
</style>