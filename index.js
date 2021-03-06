const debug = require('debug')('express:routeAutoLoader')
const fs = require('fs')
const path = require('path')

const ROUTES_PATH = 'src/routes'

function routeLoader (app, routerPath = ROUTES_PATH) {
  fs.readdirSync(routerPath).forEach(file => {
    const filePath = path.join(routerPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      debug('Loading dir %s', filePath.replace(ROUTES_PATH, ''))
      routeLoader(app, filePath)
      debug('Loaded dir %s', filePath.replace(ROUTES_PATH, ''))
    } else {
      const route = filePath.replace(ROUTES_PATH, '').replace('.js', '').replace('index', '')
      const requireFilePath = path.resolve(filePath)
      debug('Loading route %s', route)
      app.use(route, require(requireFilePath))
      debug('Loaded route %s', route)
    }
  })
}

module.exports = routeLoader
