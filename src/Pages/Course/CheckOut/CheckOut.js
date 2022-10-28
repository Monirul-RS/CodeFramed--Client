import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const CheckOut = () => {


    return (

        <div>
            <div>
                <h2 className=''>Check Out</h2>
            </div>
            <Form className='w-50 mx-auto text-start'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label className='fs-4'>Payment Method :</Form.Label>
                    <div className='d-flex '>
                        <Form.Check className='me-3' type="checkbox" label="bkash" />
                        <Form.Check className='me-3' type="checkbox" label="paypal" />
                        <Form.Check  type="checkbox" label="nagad" />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>

    );
};

export default CheckOut;