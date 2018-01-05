const debug = require('debug')('express:routeAutoLoader')
const fs = require('fs')
const path = require('path')

const ROUTES_PATH = 'src/routes'

module.exports = (app, routerPath = ROUTES_PATH) => {
  fs.readdirSync(routerPath).forEach(file => {
    const filePath = path.join(routerPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      debug('Loading dir %s', filePath.replace(ROUTES_PATH, ''))
      routeLoader(app, filePath)
      debug('Loaded dir %s', filePath.replace(ROUTES_PATH, ''))
    } else {
      let route = filePath.replace(ROUTES_PATH, '').replace('.js', '').replace('index', '')
      let requireFilePath = path.resolve(filePath)
      app.use(route, require(requireFilePath))
      debug('Loaded route %s', route)
    }
  })
}
