import React from 'react'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'
import './LeftBar.css'

const LeftBar = () => {
	return (
		<div className='leftbar'>
            <nav className='left-nav'>
                <NavLink to='/' className='left-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='left-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='left-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='left-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='left-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                    <NavLink to='/Community' className='left-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Community</p>
                    </NavLink>
                    <NavLink to='/test' className='left-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>asd</p>
                    </NavLink>
                </div>
            </nav>
        </div>
	)
}

export default LeftBar