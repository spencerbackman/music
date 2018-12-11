import React from 'react';
import SongPlayer from './SongPlayer';
import '../styles/songSearch.css';
import {connect} from 'react-redux';
import {searchSongs} from '../redux/songs';

class Songsearch extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            data: []
        }
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.searchSongs(this.state.term)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchSongs(this.state.term)
        this.setState({
          term: ''
        })
    }

    render() {
        console.log(this.props.songs)
        return (
            <div className="search-page">
                <form className="search-form" onSubmit={ this.handleSubmit }>
                    <input
                    type="text"
                    name="term"
                    value= { this.state.term }
                    placeholder="  Search..."
                    onChange={ this.handleChange }
                    id="search"
                    />
                </form>
                <SongPlayer data={this.props.songs}/>
            </div>
        )
    }
}

export default connect(state => state, {searchSongs})(Songsearch);
