'use strict'
let app = require('express')()
let bodyParser = require('body-parser')
let contactRoute = require('./routes/contact')

let PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/contact', contactRoute)
app.listen(PORT, () => {
  console.log('Contacts server listening on port %s.', PORT)
})
