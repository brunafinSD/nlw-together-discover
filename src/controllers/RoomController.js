const Database = require('../db/config')

module.exports = {
  async create(req, res){
    const db = await Database()
    const pass = req.body.password
    let roomId

    for (let index = 0; index < 6; index++) {
      index == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
      roomId += Math.floor(Math.random() * 10).toString()
    }

    await db.run(`INSERT INTO rooms (
      id,
      pass
    ) VALUES (
      ${parseInt(roomId)},
      ${pass}
    )`)

    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}