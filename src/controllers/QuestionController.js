const Database = require("../db/config");

module.exports = {
  async index(req, res) {
    const db = await Database();

    // vars do form da modal
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    // pega as infos da sala que tem o mesmo id que a nossa
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);
    // verifica se a senha da sala que pegamos anteriormente bate com a senha que vamos usar
    if (verifyRoom.pass == password) {
      // comandos SQL para os botões de marcar como lida e excluir (só passa para frente se a senha da sala for igual a que iremos usar)
      if (action == "delete") {
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
      } else if (action == "check") {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
      }

      res.redirect(`/room/${roomId}`);
      
    } else {
      res.render("passincorrect", { roomId: roomId });
    }
  },

  // inserindo a questão no db
  async create(req, res) {
    const db = await Database();

    const question = req.body.question;
    const roomId = req.params.room;

    await db.run(`INSERT INTO questions (
      title, 
      room,
      read
    ) VALUES (
      "${question}",
      ${roomId},
      0
    )`);

    res.redirect(`/room/${roomId}`);
  },
};
