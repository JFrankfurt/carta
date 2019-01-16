import React, { Component } from 'react'
import styled from 'styled-components'

const HomeRoot = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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
    const selectMovies = movies.filter(
      movie => !selectedMovies.includes(movie.episode_id)
    )
    const tableMovies = movies.filter(movie =>
      selectedMovies.includes(movie.episode_id)
    )
    return (
      <HomeRoot>
        <Select movies={selectMovies} selectMovie={this.selectMovie} />
        <Table movies={tableMovies} removeMovie={this.removeMovie} />
      </HomeRoot>
    )
  }
}

// select component
// table component
// star wars api to
