import React from 'react';
import {link} from 'react-router-dom';

const navLinks = [
    {
        title: 'home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'login',
        path: '/login'
    }
]

export default function Navigation () {
    return (
    <nav className="site-navigation">
        <span>My React Blog</span>
        <ul>
            { navLinks.map((link, index)=> (
                <li key={index}>
                    <link to={link.path}>{link.title}</link>
                </li>
            ))
            }
        </ul>
    </nav>)
}