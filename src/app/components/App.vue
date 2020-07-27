<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="#" class="navbar-brand">Epayco</a>
        </nav>

        <div class="container">
            <div class="row pt-5 d-flex justify-content-center">
                <div class="col-md-5">
                    <div class="card ">
                        <div class="card-header text-center">
                            <h5>AGREGAR CLIENTE</h5>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="addCliente">
                                <div class="form-group">
                                    <input type="text" 
                                    v-model="cliente.documento"
                                     placeholder="Documento" 
                                     class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="text"
                                    v-model="cliente.nombre"
                                     placeholder="Nombre" 
                                     class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="email"
                                     v-model="cliente.email"
                                     placeholder="Email" 
                                     class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="text"
                                     v-model="cliente.telefono"
                                     placeholder="Telefono" 
                                     class="form-control">
                                </div>
                                <button class="btn btn-primary btn-block">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="row pt-5 d-flex justify-content-center">
                <div class="col-md-12 ">
                    <table class="table table-responsive "> 
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Recargar billetera</th>
                                <th>Pagos</th>
                                <th>Consultar saldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cliente of listCliente" :key="cliente.id"> 
                                <td> {{cliente.documento}}  </td>
                                <td> {{cliente.nombre}}  </td>
                                <td> {{cliente.email}}  </td>
                                <td> {{cliente.telefono}}  </td>
                                <td><button @click="RecargarSaldo(cliente._id)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#recargarbillera">Recargar billetera</button></td>
                                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#recargarbillera">Pagos</button></td>
                                <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#consultarsaldo">Consultar Saldo</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    

            <!-- Modal recargar billetera -->
            <div class="modal fade" id="recargarbillera" tabindex="-1" role="dialog" aria-labelledby="recargarbillera" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Recargar billetera</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addCliente">
                            <div class="form-group">
                                <input type="text" 
                                v-model="cliente.documento"
                                v-bind="cliente.documento"
                                placeholder="Documento" 
                                class="form-control"
                                disabled>
                            </div>
                            <div class="form-group">
                                <input type="text"
                                v-model="cliente.telefono"
                                placeholder="Telefono" 
                                class="form-control"
                                disabled>
                            </div>
                           <div class="form-group">
                                <input type="text"
                                placeholder="Dinero" 
                                class="form-control">
                            </div>
                            <button class="btn btn-primary btn-block">Enviar</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Modal colsultar saldo -->
            <div class="modal fade" id="consultarsaldo" tabindex="-1" role="dialog" aria-labelledby="consultarsaldo" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Consultar saldo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addCliente">
                            <div class="form-group">
                                <input type="text" 
                                v-model="cliente.documento"
                                placeholder="Documento" 
                                class="form-control"
                                disabled>
                            </div>
                            <div class="form-group">
                                <input type="text" 
                                v-model="cliente.telefono"
                                placeholder="Documento" 
                                class="form-control"
                                disabled>
                            </div>
                            <span class="text-center">Tu saldo es:</span>
                            <button class="btn btn-primary btn-block">Enviar</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Guaedar</button>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    class cliente{
        constructor(documento,nombre,email,telefono){
            this.documento = documento;
            this.nombre = nombre;
            this.email = email;
            this.telefono = telefono;
        }
    }
    class saldo{
        constructor(documento,telefono){
            this.documento = documento;
            this.telefono = telefono;
        }
    }
    export default {
        data(){
            return{
                cliente: new cliente(),
                listCliente:[]
            }
        },
        created(){
            this.getCliente();
        },
        methods:{
            addCliente(){
                fetch('/clientes',{
                    method: 'POST',
                    body: JSON.stringify(this.cliente),
                    headers:{
                        'Accept' : 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(respon => respon.json())
                .then(data  => {
                    this.getCliente();
                })
                .then(data  => console.log(data));

                this.cliente = new cliente();
            },
            getCliente(){
                fetch('/clientes')
                    .then(respon => respon.json())
                    .then(data => {
                        this.listCliente = data;
                        //this.cliente = data;
                        //console.log(this.cliente);
                    });
            },
            RecargarSaldo(id){
                fetch('/clientes' + id)
                    .then(resquest => resquest.json())
                    .then(data => console.log(data))
                    .then(data => {
                        this.cliente = new cliente(data.documento, data.telefono);
                    })
            }
        }
    }
</script>