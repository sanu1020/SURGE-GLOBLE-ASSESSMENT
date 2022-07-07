// 1. if there is no id provided then we should return an error message which says that you have to provide a id

// 2. if there is a id provided and that id is not a valid id then we will send an error which says please provide a valid id

// 3. if there is a valid id then api should return a message which says that user id deleted successfully

const expect = require('chai').expect;
const request = require('request');


describe('delete user api',()=>{

  describe('No Delete id provided validation error', () => {

    const id = ' '

    it('Status', done => {
      request.delete(`http://localhost:4000/app/${id}/delete`, {}, (_, response) => {
        expect(response.statusCode).to.equal(400)
        done()
      })
    })

    it('Content', done => {
      request.delete(`http://localhost:4000/app/${id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.errors[0]).to.equal('You have to provide a id')
        done()
      })
    })
  })

  describe('Invalid Delete id provided validation error', () => {

    const id = '5da946c270ff9000941623b0'

    it('Status', done => {
      request.delete(`http://localhost:4000/app/${id}/delete`, {}, (_, response) => {
        expect(response.statusCode).to.equal(400)
        done()
      })
    })

    it('Content', done => {
      request.delete(`http://localhost:4000/app/${id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.errors[0]).to.equal('Please provide a valid id')
        done()
      })
    })
  })

  describe('Valid Delete id provided validation error', () => {

    const id = '62c35d84ba8526f7549db240'

    it('Status & Content', done => {
      request.delete(`http://localhost:4000/app/${id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(response.statusCode).to.equal(200)
        expect(body.message).to.equal('User deleted successfully')
        done()
      })
    })
  })

  
})