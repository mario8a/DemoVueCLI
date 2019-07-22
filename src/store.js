import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: [
            { nombre: 'Cuaderno', cantidad: 0 },
            { nombre: 'Plumas', cantidad: 0 },
            { nombre: 'Sacapuntas', cantidad: 0 },
        ]
    },
    mutations: {
        // index para detectar que elemento estoy seleccionando
        aumentar(state, index) {
            state.productos[index].cantidad++
        },
        reiniciar(state) {
            // forEach va recorrer todos los elementos y los va reiniciar
            state.productos.forEach(elemento => {
                elemento.cantidad = 0
            })
        }
    },
    actions: {

    }
})