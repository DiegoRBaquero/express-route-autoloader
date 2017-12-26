import test from 'ava'
const request = require('supertest')

let server = null

process.chdir('./example')

test.before(t => {
  server = require('../example/src/app')
  server.listen(8080)
})

test('/ route is loaded and responds', async t => {
  t.plan(1)

  const res = await request(server)
    .get('/')

  t.is(res.status, 200)
})

test('/v1/inside route is loaded and responds', async t => {
  t.plan(1)

  const res = await request(server)
    .get('/v1/inside')

  t.is(res.status, 200)
})
