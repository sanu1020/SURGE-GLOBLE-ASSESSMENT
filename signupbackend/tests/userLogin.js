// 1. if not a registered user email found then we should return an error

// 2. if not a matched password is found then we should return an error Invalid email and user id

// 3. if valid email and password is found then we should display a success message

const expect = require('chai').expect;
const request = require('request');

describe('login user api',()=>{

    describe('Not a registered email found provided validation error', () => {
  
        const email = 'test@gmail.com'
    
        it('Status', done => {
          request.post(`http://localhost:4000/app/userLogin`, {email}, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
    
        it('Content', done => {
          request.post(`http://localhost:4000/app/userLogin`, {email}, (_, response) => {
            const body = JSON.parse(response.body)
            expect(body.errors[0]).to.equal('You have to provide a registered email')
            done()
          })
        })
      })
  
      describe('Not matched password provided validation error', () => {
  
        const email = "sanuuthaya02@gmail.com"
        const password = "test123"
  
      it('Status', done => {
        request.post(`http://localhost:4000/app/userLogin`, {email,password}, (_, response) => {
          expect(response.statusCode).to.equal(400)
          done()
        })
      })
  
      it('Content', done => {
        request.post(`http://localhost:4000/app/userLogin`, {email,password}, (_, response) => {
          const body = JSON.parse(response.body)
          
          expect(body.errors[1]).to.equal('you have to provide a valid password')
          done()
        })
      })
    })

    describe('Valid login provided validation error', () => {
  
        
  
      it('Status & Content', done => {
        request.post(`http://localhost:4000/app/userLogin`, { json: {
            
            email: "dhoni@gmail.com",
            password: "d"
            
          }}, (_, response) => {
          
          expect(response.statusCode).to.equal(200)
          
          done()
        })
      })
    })

    
    
  })