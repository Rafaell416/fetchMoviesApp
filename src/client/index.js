'use strict'

import Client from './lib/client'

const createClient = (config) => new Client(config)

export default createClient
