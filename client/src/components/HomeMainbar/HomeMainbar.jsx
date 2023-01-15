import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { loadStripe } from '@stripe/stripe-js'


const HomeMainbar = () => {

    //comment

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    
    const checkAuth = () => {
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }



    const [customerId, setCustomerId] = useState(null);
      const [email, setEmail] = useState("");
      const [loading, setLoading] = useState(false);

      const stripePromise = loadStripe('pk_test_51MMqciSEZ9pOTfzidRYfEp7K516FgHnxmbMHacQOa3DuJwBOyXLxm0wOES027Ls4Mq92oss2JX0t9D0imKjpAlnY00oZ1Xzojg')

      const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const stripe = await stripePromise
        //const stripe = await stripePromise;
        const { error, customer } = await stripe.customers.create({
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
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ questionsList.data.length } questions</p>
                        <QuestionList questionsList={questionsList.data} />
                    </>
                }
            </div>

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

            <stripe-pricing-table pricing-table-id="prctbl_1MNbU7SEZ9pOTfziipXsSBwC"
            publishable-key="pk_test_51MMqciSEZ9pOTfzidRYfEp7K516FgHnxmbMHacQOa3DuJwBOyXLxm0wOES027Ls4Mq92oss2JX0t9D0imKjpAlnY00oZ1Xzojg">
            </stripe-pricing-table>
        </div>
    )
}

export default HomeMainbar
