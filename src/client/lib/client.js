'use strict'

export default class Client {
  constructor(config){
    this.config = config || {}
  }

  handleError (err, msg) {
    console.warn(`${msg} ==> ${err}`)
  }

  async getSugestions (id=10) {
    try {
      const uri = `${this.config.client.endpoints.sugestions}?movie_id=${id}`
      const res = await fetch(uri)
      const { data } = await res.json()
      return data.movies
    } catch (e) {
        this.handleError(e, 'There was an error getting sugestions')
    }
  }

  async getMovies () {
    try {
      const uri = this.config.client.endpoints.movies
      const res = await fetch(uri)
      const { data } = await res.json()
      return data.movies
    } catch (e) {
      this.handleError(e, 'There was an error getting movies')
    }
  }
}
