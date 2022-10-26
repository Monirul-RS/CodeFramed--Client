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
                    <FaArrowCircleRight className='text-success' /> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><p className='fs-3 fw-semibold text-primary' >2.How do i continue a course?</p></Accordion.Header>
                <Accordion.Body className='fs-4 text-start'>
                    <FaArrowCircleRight className='text-success' /> Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    <br />
                    <FaArrowCircleRight className='text-success'/> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through :-
                    <ul>
                        <li>Cards</li>
                        <li>Retina Scans</li>
                        <li>Voice Recognition</li>
                        <li>Fingerprints</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><p className='fs-3 fw-semibold text-primary'>3. How can i pay for my certificate?</p></Accordion.Header>
                <Accordion.Body className='fs-4 text-start'>
                    <FaArrowCircleRight className='text-success' /> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><p className='fs-3 fw-semibold text-primary'>4.What is Node? How does Node Work?</p></Accordion.Header>
                <Accordion.Body className='fs-4 text-start'>
                    <FaArrowCircleRight className='text-success' /> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools.
                    <br />
                    <FaArrowCircleRight className='text-success' /> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    );
};

export default Faq;