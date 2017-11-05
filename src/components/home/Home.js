import React, { Component } from 'react';
import Jumbotron from './Jumbotron'
import Search from './Search'
import Locations from './Locations'
import { Route } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            original_list: [],
            displayed_list: []
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentWillMount() {
        fetch('/static/data/data.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                this.setState({
                    original_list: data,
                    displayed_list: data
                });
            })
            .catch(error => {
                console.error(`fetch operation failed: ${error.message}`);
            });
    }

    handleSearch(list) {
        this.setState({
            displayed_list: list
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <Jumbotron />
                <Search original_list={this.state.original_list} onHandleSearch={(list) => this.handleSearch(list)} />
                <Locations list={this.state.displayed_list} />
            </div>
        )
    }

}