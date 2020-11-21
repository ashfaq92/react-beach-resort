import React from 'react'
import Title from './Title'
import { useContext } from "react"
import { RoomContext } from "../context"

//get all unique values
const getUnique = (items, value) => [...new Set(items.map(item => item[value]))]

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    // console.log(context)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
    // get unique types
    let types = getUnique(rooms, "type")
    // add "all"
    types = ["all", ...types]
    types = types.map((item, index) =>
        <option key={index} value={item}>{item}</option>)

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) =>
        <option key={index} value={item}>{item}</option>)
    // console.log(types)
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        className="form-control"
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end of select type */}

                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        className="form-control"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end of guests */}

                {/* start of price */}
                <div className="form-group">
                    <label htmlFor="price">Price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* start of price */}

                {/* start of size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input
                        type="number"
                        name="minSize"
                        value={minSize}
                        id="size"
                        onChange={handleChange}
                        className="size-input"
                    />
                    <input
                        type="number"
                        name="maxSize"
                        value={maxSize}
                        id="size"
                        onChange={handleChange}
                        className="size-input"
                    />
                </div>
                {/* end of size */}

                {/* start of extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
