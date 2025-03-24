import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {FormSelect, Form, Col, Row} from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
// import { addUser } from '../../../../redux/slices/userslice';
// import axios from "axios"
import { toast } from 'react-toastify';
import { useGlobalContext } from '../Cart/ContextAndReducer/cartContext';

function Login() {
  const {email, setEmail, password, setPassword
    ,validated, setValidated, error, setError } = useGlobalContext()
 
 

  // const dispatch = useDispatch()
  let navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault();
    try {
        // const response = await axios.post("https://job-search-api-wyvc.onrender.com/register",
        //   {username,email,password,town,province,postalCode})
         
          if(email==""){
            setValidated(true)
          }
          if(password==""){
            setValidated(true)
          }
        
       
    //    else if(response.data.status){
    //     navigate("/login")
    //   toast.success(response.data.message)
    //   dispatch(addUser(response.data))
    //   console.log(response.data)
    //   setError(false)
    //    }
       else{
        // setError(true)
        navigate("/")
        // console.log("error")
       }
  
    } catch (error) {
      console.log('error')
    }
   
   
}
  return (
    <Form  style={{margin:"30px"}}noValidate validated={validated} onSubmit={handleSubmit}>
      <h3 >Login</h3>
      <Row className="mb-2">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          {/* <Form.Label>First name</Form.Label> */}
          <Form.Control
            required
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          {/* <Form.Label>Last name</Form.Label> */}
          <Form.Control
            required
            type="password"
            onChange={(e)=>setPassword(e.target.value)}

            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">Please provide a correct password</Form.Control.Feedback>
        </Form.Group>
      </Row>
    
       
      
      
        {/* <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control type="date"
                      onChange={(e)=>setDateOfBirth(e.target.value)}
           placeholder="Province" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid DOB.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom08">
          <Form.Label>Gender</Form.Label>
          <FormSelect onChange={(e)=>setGender(e.target.value)}>
           <option value="Female">Female</option>
           <option value="Male">Male</option>
          </FormSelect>
          <Form.Control.Feedback type="invalid">
           Gender value is required
          </Form.Control.Feedback>
        </Form.Group>
        </Row> */}
    
      
      <Link style={{color:"blue"}} to="/register">Don't have an account?</Link>
      {error?<p style={{color:"red"}}>Incorrect password or email</p>:null}
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Login;