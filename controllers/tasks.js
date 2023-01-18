import pool from "../util/db.js";

export const getTasks = (req, res, next) => {
  try {
    pool
      .query("select * from tasks order by createAt DESC")
      .then((results) => {
        const [result] = results;
        res.json(result);
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message });
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTask = (req, res, next) => {
  try {
    pool
      .query("select * from tasks where id= ?", [req.params.id])
      .then((results) => {
        const [result] = results;

        if (result.length === 0) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.json(result[0]);
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message });
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createTask = (req, res, next) => {
  try {
    const { title, description } = req.body;
    pool
      .query("INSERT INTO tasks (title, description) VALUES (?, ?)", [
        title,
        description,
      ])
      .then((results) => {
        if (results) {
          const [result] = results;
          res.json({
            id: result.insertId,
            title,
            description,
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message });
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  //res.send("creando tareas: " + req.body.title);
};

export const updateTask = (req, res, next) => {
  try {
    pool
      .query("update tasks set ? where id =?", [req.body, req.params.id])
      .then(([result]) => {
        res.json(result);
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const [result] = await pool.query("delete from tasks where id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
