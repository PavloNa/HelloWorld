import React from "react";
import { Button } from "@mui/material";
import "./Navbar.css"

export const Navbar = () => {
    return (
    <>
        <nav>
            <p className='title'>Pavlo Nazarchuk</p>
            <ul className='NavBar'>
                <li><a href='https://www.google.com'>LinkedIn</a></li>
                <li><a href='https://www.google.com'>GitHub</a></li>
            </ul>
            <Button variant="contained" className="button" sx={ { borderRadius: 28, backgroundColor: 'white', color: 'black' } }>CV</Button>
        </nav>
        <div class="line"></div>
    </>
    );
}