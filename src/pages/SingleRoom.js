import React, { Component } from 'react'
import Banner from '../components/Banner'
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        // console.log(this.props.match.params.slug)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        }
    }
    static contextType = RoomContext
    componentDidMount() {

    }
    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [mainImg, ...defaultImgs] = images
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImgs.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            {/* {console.log(description.content[0].content[0].value)} */}
                            <p>{description.content[0].content[0].value}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: $ {price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity: {capacity} {capacity > 1 ? "people" : "person"}</h6>
                            <h6>{pets ? "" : "No"} Pets allowed</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index)=> {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>

        )
    }
}
