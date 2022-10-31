import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen bg-base-200 flex justify-center'>
            <div className='w-3/5 mx-auto p-8 m-10 rounded-lg shadow-lg bg-blue-50'>
                <h2 className='text-3xl font-semibold py-4'>1. What is cors?</h2>
                <hr />
                <p className='text-lg font-medium text-justify'>
                    <b>Note: Cross-origin resource sharing (CORS)</b> <br />

                    In this section, we will explain what cross-origin resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based attacks, and discuss how to protect against these attacks. This topic was written in collaboration with PortSwigger Research, who popularized this attack class with the presentation <br />
                    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                </p>

                <h2 className='text-3xl font-semibold py-4'>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <hr />
                <p className='text-lg font-medium text-justify'>
                    <b> Why are you using firebase?</b> <br />

                    Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.<br /> <br />
                    <b>What other options do you have to implement authentication?</b> <br />
                    Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                    Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.
                </p>

                <h2 className='text-3xl font-semibold py-4'>3. How does the private route work?</h2>
                <hr />
                <p className='text-lg font-medium text-justify'>
                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                    In this article, we can see. How to create public and private routes using react-router for your react apps.
                </p>

                <h2 className='text-3xl font-semibold py-4'>4. What is Node? How does Node work?</h2>
                <hr />
                <p className='text-lg font-medium text-justify'>
                    <b> What is Node?</b> <br />
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                    <b> How does Node work?</b> <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node.js basically works on two concept

                    Asynchronous
                    Non-blocking I/O
                </p>

            </div>
        </div>
    );
};

export default Blog;