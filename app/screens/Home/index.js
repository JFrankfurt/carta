import React, { Component } from 'react'
import styled from 'styled-components'

const HomeRoot = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

// I added some row styles here
const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  width: 300px;
`

const Select = ({ movies, selectMovie }) => (
  <select onChange={selectMovie}>
    <option value="">select a movie</option>
    {movies.map(({ episode_id, title }) => (
      <option value={episode_id} key={episode_id}>
        {title}
      </option>
    ))}
  </select>
)

// Added headers
const Table = ({ movies, removeMovie }) => (
  <>
    <Row>
      <span>id</span>
      <span>title</span>
      <span />
    </Row>
    {movies.map(({ episode_id, title }) => (
      <Row key={`selected-${episode_id}`}>
        <span>{episode_id}</span>
        <span>{title}</span>
        <span
          onClick={() => removeMovie(episode_id)}
          style={{ cursor: 'pointer' }}>
          &times;
        </span>
      </Row>
    ))}
  </>
)

export default class Home extends Component {
  state = {
    movies: [],
    selectedMovies: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(x => x.json())
      .then(({ results }) => this.setState({ movies: results }))
  }

  removeMovie = id => {
    const removingId = parseInt(id, 10)
    const newSelected = this.state.selectedMovies.filter(
      movieId => movieId !== removingId
    )
    this.setState({ selectedMovies: newSelected })
  }

  selectMovie = ({ target: { value: id } }) => {
    const selectingId = parseInt(id, 10)
    this.setState({
      selectedMovies: [...this.state.selectedMovies, selectingId],
    })
  }

  render() {
    const { movies, selectedMovies } = this.state
    // I modified this to remove the double filter
    let selectMovies = []
    let tableMovies = []
    for (let movie of movies) {
      if (!selectedMovies.includes(movie.episode_id)) {
        selectMovies.push(movie)
      } else {
        tableMovies.push(movie)
      }
    }
    return (
      <HomeRoot>
        <Select movies={selectMovies} selectMovie={this.selectMovie} />
        <Table movies={tableMovies} removeMovie={this.removeMovie} />
      </HomeRoot>
    )
  }
}
