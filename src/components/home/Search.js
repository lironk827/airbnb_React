import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
    }

    getFilteredList(ctx) {
        let text = ctx
        let guests = this.guests.value
        let original_list = this.props.original_list
        let filtered_list = []
        if (text !== ' ') {
            filtered_list = original_list.filter((item, index) => {
                return (item.city.name.includes(text) && item.maxGuests >= guests)
            })
        } else {
            filtered_list = original_list.filter((item, index) => {
                return (item.maxGuests >= guests)
            })
        }
        this.props.onHandleSearch(filtered_list)
    }

    onSearch(event) {
        switch (event.target.tagName) {
            case 'INPUT':
                this.getFilteredList(event.target.value)
                break
            case 'SELECT':
                this.getFilteredList(this.location.value)
                break
            default:
                break
        }
    }

    render() {
        return (
            <div className="infoBlock">
                <div className="whereBlock designlabels">
                    <label className="paddings" htmlFor="Where">Where</label>
                    <input className='placeholder' ref={element => this.location = element} onChange={(event) => this.onSearch(event)} type="text" placeholder="Anywhere" />
                </div>
                <div className="whenBlock designlabels">
                    <label className="paddings" htmlFor="When">When</label>
                    <input className="placeholder" type="date" placeholder="Anytime" />
                </div>
                <div className="whoBlock designlabels">
                    <label className="paddings" htmlFor="">Guests</label>
                    <select onChange={this.onSearch} ref={(element) => this.guests = element} >
                        <option value="1">1 Guests</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                    </select>
                </div>
            </div>
        )
    }

}