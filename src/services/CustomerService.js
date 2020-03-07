let customers = [
    {
        id: 1,
        firstName: 'pera',
        lastName: 'peric',
        email: 'peric@pera.com',
        boughtProducts: []
    },
    {
        id: 2,
        firstName: 'mika',
        lastName: 'mikic',
        email: 'mikic@mika.com',
        boughtProducts: []
    }
]

let nextId = 3;
export default class CustomerService {

    getAllCustomers() {
        return customers;
    }

    find(id) {
        return customers.find(customer => customer.id == id);
    }

    deleteCustomer(id) {
        customers = customers.filter(customer => customer.id !== id);
    }

    add(customer) {
        customer.id = nextId
        customers.push(customer)
        nextId++
    }
}
export const customerService = new CustomerService();