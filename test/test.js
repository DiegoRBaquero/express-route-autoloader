import test from 'ava'

test('Route is loaded', async t => {
  t.plan(1)

  const res = await request(server)
    .get('/health')

  t.is(res.status, 200)
})