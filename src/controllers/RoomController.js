const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;

    let roomId;
    let isRoom = false;

    while (isRoom) {
      // gera o número da sala
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      // verifica se esse número de sala já existe
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);

      // para no primeiro id que já existir e retorna
      isRoom = roomsExistIds.some((roomExistId) => {
        roomExistId === roomId;
      });
    }

    // se não achar nenhuma sala que bate com o roomId que geramos ele inseri esse id na tabela
    if (!isRoom) {
      // Inseri a sala no banco
      await db.run(`INSERT INTO rooms (
        id, 
        pass
      ) VALUES (
        ${parseInt(roomId)},
        ${pass}
      )`);
    }

    await db.close();

    res.redirect(`/room/${roomId}`);
  },

  open(req, res) {
    const roomId = req.params.room;
    res.render("room", { roomId: roomId });
  },
};
