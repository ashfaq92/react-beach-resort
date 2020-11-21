import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'


const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Our rooms" subtitle="">
                <Link className="btn-primary" to="/">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </div>
    )
}
export default Rooms 