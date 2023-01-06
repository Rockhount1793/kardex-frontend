import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {   
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "usuario" */ '../componentes/general/Perfil.vue')
    },
    {   
        path: '/reporte',
        name: 'Reporte',
        component: () => import(/* webpackChunkName: "reporte" */ '../componentes/general/Reporte.vue')
    },
    {   
        path: '/productos',
        name: 'Productos',
        component: () => import(/* webpackChunkName: "productos" */ '../componentes/general/Productos.vue')
    },
    {   
        path: '/productos/crear',
        name: 'CrearProducto',
        component: () => import(/* webpackChunkName: "crear_producto" */ '../componentes/secundario/Crear_Producto.vue')
    },
    {   
        path: '/ubicaciones',
        name: 'Ubicaciones',
        component: () => import(/* webpackChunkName: "ubicaciones" */ '../componentes/general/Ubicaciones.vue')
    },
    {   
        path: '/ubicaciones/crear',
        name: 'CrearUbicacion',
        component: () => import(/* webpackChunkName: "crear_ubicacion" */ '../componentes/secundario/Crear_Ubicacion.vue')
    },
    {  
        path: '/proveedores',
        name: 'Proveedores',
        component: () => import(/* webpackChunkName: "proveedores" */ '../componentes/general/Proveedores.vue')
    },
    {
        path: '/proveedores/crear',
        name: 'CrearProveedor',
        component: () => import(/* webpackChunkName: "crear_proveedor" */ '../componentes/secundario/Crear_Proveedor.vue')
    },
    {   
        path: '/entradas',
        name: 'Entradas',
        component: () => import(/* webpackChunkName: "entradas" */ '../componentes/general/Entradas.vue')
    },
    {
        path: '/entradas/crear',
        name: 'CrearEntrada',
        component: () => import(/* webpackChunkName: "crear_entrada" */ '../componentes/secundario/Crear_Entrada.vue')
    },
    {   
        path: '/salidas',
        name: 'Salidas',
        component: () => import(/* webpackChunkName: "salidas" */ '../componentes/general/Salidas.vue')
    },
    {
        path: '/salidas/crear',
        name: 'CrearSalida',
        component: () => import(/* webpackChunkName: "crear_salida" */ '../componentes/secundario/Crear_Salida.vue')
    },
    {
        path: '/entrar',
        name: 'Entrar',
        component: () => import(/* webpackChunkName: "entrar" */ '../views/Entrar.vue')
    },
    {
        path: '/registro',
        name: 'Registro',
        component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
    },  
    {
        path: '/acerca',
        name: 'Acerca',
        component: () => import(/* webpackChunkName: "acerca" */ '../views/Acerca.vue')
    },  
    {   
        path: '/terminos',
        name: 'Terminos',
        component: () => import(/* webpackChunkName: "terminos" */ '../views/Terminos.vue')
    },
    {
        path: '/recuperar/:email/:key',
        name: 'Recuperar',
        component: () => import(/* webpackChunkName: "recuperar" */ '../views/Recuperar.vue')
    },  
    {
        path: '/restaurar',
        name: 'Restaurar',
        component: () => import(/* webpackChunkName: "restaurar" */ '../views/Restaurar.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
    }
]


const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
