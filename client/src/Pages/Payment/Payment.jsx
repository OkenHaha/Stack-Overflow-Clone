import React, { useState, useEffect} from 'react'
import { loadStripe }from '@stripe/stripe-js'

const stripe = await loadStripe('sk_test_51MMqciSEZ9pOTfziCcCRBHflDHpCyFCJynuiDwGUANw3FXwzRmgiFBsdNYEG02O3MEWK4WAd5XFZ5e7Dw9AhvH9o00QPw8aHyf')

const Payment = () => {

	const [customerId, setCustomerId] = useState()
	const [email, setEmail] = useState()

	useEffect(() => {
		async function createCustomer() {
			const stripe = await stripPromise;
			const { error, customer } await stripe.createCustomer({
				email: email,
			})
			if (error) {
				console.error(error)
			}
			else{
				setCustomerId(customer.id)
			}
		}
		createCustomer()
	}, [])

	return (
		<div>
			{customerId ? <p>Customer ID: {customerId}</p> : <p>Loading...</p>}
		</div>
	)
}

export default Payment