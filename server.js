const express = require('express')

const app = express();

app.use(express.json());


app.get("/get-code/:code", (req, res, next) => {
  try {

     const code = req.params?.code;
    return res
      .status(200)
      .json({ message: "Dados retornados", result: { code } });
  } catch (error) {
    next(error);
  }
});

app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
