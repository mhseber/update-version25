import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div>
            <h1 className='text-8xl text-amber-800'>Contacts Us</h1>
            <Link to="joinUs"><li><button className="btn btn-outline btn-success">JoinUs</button></li></Link>
            <Link to="login"><li><button className="btn btn-outline btn-success">Login</button></li></Link>
            <Link to="register"><li><button className="btn btn-outline btn-success">Register</button></li></Link>
        </div>
    );
};

export default Contact;