# express-route-autoloader [![npm](https://img.shields.io/npm/v/express-route-autoloader.svg?style=flat-square)]() [![npm](https://img.shields.io/npm/dm/express-route-autoloader.svg?style=flat-square)]() [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![npm](https://img.shields.io/npm/l/express-route-autoloader.svg)](LICENSE)
Automatically loads routes from a directory structure

## Install

```
npm i -S express-route-autoloader
or
npm install --save express-route-autoloader
```

## Use

Put your routes in `src/routes`:

```
src/
- routes/
--- index.js   -> maps to /
--- auth.js    -> maps to /auth
--- v1/
----- model1.js -> maps to /v1/model1
----- model2.js -> maps to /v1/model2
```

Load routes in your app:

```
const express = require('express')
const routeLoader = require('express-route-autoloader')

const app = express()
routeLoader(app)
```

## Related

[sequelize-express-findbyid](https://github.com/DiegoRBaquero/sequelize-express-findbyid)


## License

MIT Copyright © [Diego Rodríguez Baquero](https://diegorbaquero.com)