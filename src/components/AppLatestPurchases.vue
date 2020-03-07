<template>
    <div class="mt-4">
        <router-link to="/customers">Go back</router-link>
        <hr/>

        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ customer.firstName + ' ' + customer.lastName }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ customer.email }}</h6>
            </div>
        </div>

        <h5>Products</h5>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in customer.prodcts" :key="product.id">
                <td>{{ product.name }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { customerService } from '../services/CustomerService'

    export default {
        props: ['id'],

        created() {
            this.customer = customerService.find(this.id)
        }
    }
</script>