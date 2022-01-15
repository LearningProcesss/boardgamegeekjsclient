const { BggClient } = require("boardgamegeekclient")

const client = BggClient.Create()

client.thing.query({ id: 331787 }).then(result => JSON.stringify(result, null, 4))
