import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaArrowCircleRight } from 'react-icons/fa';

const Faq = () => {
    return (
        <div className='mt-5'>
            <h2 className='fw-bold text-decoration-underline mb-5'>Frequently Asked Question.</h2>
            <Accordion className='container' defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><p className='fs-3 fw-semibold text-primary'>1. How to start a course?</p></Accordion.Header>
                    <Accordion.Body className='fs-4 text-start'>
                        <FaArrowCircleRight className='text-success' /> To start a course, please do the following:
                        <ul>
                            <li>Register or Login to your Alison Account.. </li>
                            <li> Once you log in, you can search for a course by going to that page.</li>
                            <li>Select the course you want to study and select Start Now.</li>
                        </ul>
                        This courses are designed to be self-paced, meaning you can take as much or as little time to complete a course as you wish. Most Certificate courses generally take a learner 2-3 hours to complete and Diploma courses take 15 hours to complete.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p className='fs-3 fw-semibold text-primary' >2.How can i pay for my certificate??</p></Accordion.Header>
                    <Accordion.Body className='fs-4 text-start'>
                        <FaArrowCircleRight className='text-success' /> There are a number of payment options available:
                        <ul>
                            <li>Credit/ Debit Card (facilitated by Stripe) - this is the quickest and easiest option as you can pay through the shopping cart in your Alison Account. </li>
                            <li> PayPal (if PayPal is operational in your country) - you can also access this payment method through the shopping cart in your Alison Account.</li>
                            <li>Bank Transfer </li>
                        </ul>
                        If you pay by Bank Transfer you will need to reference your Alison ID Number (which you will find on your Dashboard on the left of your screen) and Name (as per your Alison account details) on the transfer so that we know the payment is for you when it is credited to our Bank.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><p className='fs-3 fw-semibold text-primary'>3. How do i continue a course? </p></Accordion.Header>
                    <Accordion.Body className='fs-4 text-start'>
                        <FaArrowCircleRight className='text-success' /> To locate and continue studying your courses on your Alison account please do the following: 
                        <ul>
                            <li> Log in to your account. </li>
                            <li> Go to your Dashboard. You will see the recent course you have studied:</li>
                            <li>This will open your active courses. You can then select the course you wish to continue, by clicking Continue Learning:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><p className='fs-3 fw-semibold text-primary'>4.How do i download my digital certificate?</p></Accordion.Header>
                    <Accordion.Body className='fs-4 text-start'>
                        <FaArrowCircleRight className='text-success' /> Once you have completed your purchase, your Digital Certificate/Digital Diploma and Transcript are available to download from the Dashboard of your this Account.

                        When you are logged in, expand the Your Completed Courses & Claimed Certificates widget.
                        <br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;