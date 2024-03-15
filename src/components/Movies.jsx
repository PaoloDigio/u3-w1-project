import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import Movie from "./Movie";

class Movies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?apikey=f3d13954";
    let response = await fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`);
    let moviesRequest = await response.json();
    this.setState({ movies: moviesRequest }, () => console.log(this.state.movies.Search));
  };
  render() {
    return (
      <>
        <h2>{this.props.category}</h2>
        <Col className="ms-5">
          {this.state.movies.Search &&
            this.state.movies.Search.slice(0, 8).map((movie) => <Movie key={movie.imdbID} img={movie.Poster} />)}
        </Col>
      </>
    );
  }
}
export default Movies;
