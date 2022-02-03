const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;

    let roomId;
    let isRoom = true;

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

  async open(req, res) {
    const db = await Database();
    const roomId = req.params.room;

    // pegando as questões no db da sala que estamos
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 0`
    );

    // pegando as questões lidas
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 1`
    );

    res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead });
  },
};
