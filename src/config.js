'use strict'

const host = 'https://yts.am/api/v2'

const config = {
  client: {
    endpoints: {
      sugestions: `${host}/movie_suggestions.json`,
      movies: `${host}/list_movies.json`
    }
  }
}

export default config
