import React from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaCoffee } from "react-icons/fa"

export default class Services extends React.Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Dansk Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker Suomi "
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Dansk Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker Suomi "
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Dansk Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker Suomi "
            },
            {
                icon: <FaCoffee />,
                title: "strongest coffee",
                info: "Dansk Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker Suomi "
            }
        ]
    }
    render() {
        const items = this.state.services.map((item, index) => {
            return <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        })
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {items}
                </div>
            </section>
        )
    }
}
