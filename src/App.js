import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {

  state = {}

  componentWillMount(){

  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return (
        <Movie 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          genres={movie.genres} 
          key={movie.id} 
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callAPI();
    this.setState({
      movies
    })
    // same as (modern javascript? or what!)
    // this.setState({
    //   movies: movies
    // })
  }

  _callAPI = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(res => res.json())
      .then(json => json.data.movies)  //(modern javascript? or what!)returning data same as '{return json.data.movies;}
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
