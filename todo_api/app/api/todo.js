module.exports = (app, todo) => {
  //모든 todo 조회
  app.get("/todos", (req, res) => {
    return todo.findAll().then(result => res.json(result));
  });

  //특정 todo 조회
  app.get("/todo/:id", (req, res) => {
    const { id } = req.params;
    return todo.findByPk(id).then(result => res.json(result));
  });

  //todo 생성
  app.post("/todo", (req, res) => {
    const { title, content, deadline, priority } = req.body;
    return todo.create({ title, content, deadline, priority }).then(result => res.json(result));
  });

  //특정 todo 수정
  app.put("/todo/:id", (req, res) => {
    const { title, content, status, deadline, priority } = req.body;
    const { id } = req.params;

    return todo
      .update(
        { title, content, status, deadline, priority },
        {
          where: { id }
        }
      )
      .then(result => res.json(result));
  });

  //특정 todo 삭제
  app.delete("/todo/:id", (req, res) => {
    const { id } = req.params;
    return todo
      .destroy({
        where: { id }
      })
      .then(result => res.json(result));
  });
};
