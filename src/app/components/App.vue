<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="#" class="navbar-brand">Epayco</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-4">
                    <div class="card">
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
                <div class="col-md-8">
                    <table class="table table-bordered table-responsive"> 
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cliente of cliente" :key="cliente.id"> 
                                <td> {{cliente.documento}}  </td>
                                <td> {{cliente.nombre}}  </td>
                                <td> {{cliente.email}}  </td>
                                <td> {{cliente.telefono}}  </td>
                            </tr>
                        </tbody>
                    </table>
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
    export default {
        data(){
            return{
                cliente: new cliente()
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
                        this.cliente = data;
                        console.log(this.cliente);
                    });
            }
        }
    }
</script>