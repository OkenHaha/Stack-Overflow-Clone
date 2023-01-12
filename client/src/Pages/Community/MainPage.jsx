import React from 'react'
import './MainPage.css'

//import Payment from '../Payment/Payment'
import LeftBar from './LeftBar'
import Post from './Post'
import RightSidebar from '../../components/RightSidebar/RightSidebar'


const MainPage = () => {
	return (
		<div className="home-container-3">
			<LeftBar/>
			<div className="home-container-4">
				<Post/>
				<RightSidebar/>
			</div>
		</div>
	)
}

export default MainPage