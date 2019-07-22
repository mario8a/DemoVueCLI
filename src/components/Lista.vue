<template>
    <div>
        <ul class="list-group">
        <!--recomendable tener una key que nos dira que el vfor tiene elementos unicos -->
        <!--Se remplazo en vfor prodcutos por arrayOrdenar para ordenar la lista  -->
            <li v-for="(item, index) of arrayOrdenar" :key="item.id" @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{index + 1}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
    </div>
</template>


<script>
//Estamos ocupando una mutacion que esta dentro de store.js
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Lista',
        computed: {
            // ([state])
            ...mapState(['productos']),
            arrayOrdenar(){
                // sort compara dos parametros y los ordena de mayor a menor
                return this.productos.sort( (a,b) => b.cantidad - a.cantidad )
            }
        },
        methods: {
            ...mapMutations(['aumentar', 'reiniciar'])
        }

    }
</script>
