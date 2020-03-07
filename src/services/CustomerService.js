let customers = [
    {

        firstName: 'pera',
        lastName: 'peric',
        email: 'peric@pera.com',
        boughtProducts: []
    },
    {

        firstName: 'mika',
        lastName: 'mikic',
        email: 'mikic@mika.com',
        boughtProducts: []
    }
]
export default class CustomerService {

    getAllCustomers() {
        return customers;
    }

    deleteCustomer(id) {
        customers = customers.filter(customer => customer.id !== id);
    }

    add(customer) {
        customers.push(customer)
    }
}
export const customerService = new CustomerService();