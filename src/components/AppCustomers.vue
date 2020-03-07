<template>
<div>
    <h3>Add new customer</h3>
    <form>

        <label for="firstName">First name</label>
        <input v-model="newCustomer.firstName" id="firstName" class="form-control" type="text">
        <label for="lastName">Last name</label>
        <input v-model="newCustomer.lastName" id="lastName" class="form-control" type="text">
        <label for="email" >Email</label>
        <input v-model="newCustomer.email" id="email" class="form-control" type="text">
        <br>
        <button v-show="!editMode" @click.prevent="addCustomer" class="btn btn-info">Create customer</button>

    </form>

    <h3>Customers list</h3>
        <table class="table">
            <tr>

                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Vidi listu proizvoda</th>
            </tr>
            <tr v-for="(customer, i) in customers" :key="i">

                <td>{{ customer.firstName }}</td>
                <td>{{ customer.lastName }}</td>
                <td>{{ customer.email }}</td>
                <td><button @click="removeCustomer(customer)" class="btn btn-danger">Delete</button></td>
                <td><button class="btn btn-success">Lista proizvoda</button></td>
            </tr>
        </table>

    </div>


</template>

<script>
    import {customerService} from "../services/CustomerService";

    export default {
        name: 'AppCustomers',
        data(){
            return {
                editMode: false,
                newCustomer: {},
                customers: customerService.getAllCustomers()
            }
        },

        methods: {
            removeCustomer(customer){
                let id = customer.id
                customerService.deleteCustomer(id)
                this.customers = this.customers.filter(customer => customer.id !== id)
            },

            addCustomer() {
                customerService.add(this.newCustomer)
                this.newCustomer = {}
            },


        }
    }
</script>

<style>
</style>