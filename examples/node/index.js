const { BggClient } = require("boardgamegeekjsclient")

const client = BggClient.Create()

client.thing.query({ id: 331787 }).then(result => console.log(result))
