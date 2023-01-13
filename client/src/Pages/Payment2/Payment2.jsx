import React, { useState, useEffect} from 'react'
//import { loadStripe } from '@stripe/stripe-js'

//

const Payment2 = () => {
		//const stripe = await loadStripe('sk_test_51MMqciSEZ9pOTfziCcCRBHflDHpCyFCJynuiDwGUANw3FXwzRmgiFBsdNYEG02O3MEWK4WAd5XFZ5e7Dw9AhvH9o00QPw8aHyf')
	  const [customerId, setCustomerId] = useState(null);
	  const [email, setEmail] = useState("");
	  const [loading, setLoading] = useState(false);

	  const handleSubmit = async (event) => {
	    event.preventDefault();
	    setLoading(true);
	    const stripe = await stripePromise;
	    const { error, customer } = await stripe.createCustomer({
	      email: email,
	    });
	    if (error) {
	      console.error(error);
	    } else {
	      setCustomerId(customer.id);
	    }
	    setLoading(false);
	  };

	return (
		<div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <button type="submit" disabled={loading}>
          Create customer
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : customerId ? (
        <p>Customer ID: {customerId}</p>
      ) : (
        <p>Enter your email and press create customer</p>
      )}
    </div>
	)
}

export default Payment2