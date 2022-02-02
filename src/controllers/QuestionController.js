module.exports = {
  index(req, res) {
    // vars do form da modal
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(roomId, questionId, action, password);
  },
};
