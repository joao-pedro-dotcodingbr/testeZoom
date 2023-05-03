const express = require('express')

const app = express();

app.use(express.json());


app.get("/redirect", (req, res) => {

  console.log('entrou')
  const { code } = req.query;
  console.log({ code });
  res.writeHead(301, { Location: `ifb://UpdateSchedule/${code}` });
  return res.end();
});;

app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
