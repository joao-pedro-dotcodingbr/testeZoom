const express = require('express')

const app = express();

app.use(express.json());


app.get("/redirect", async (req, res) => {
  const { code } = req.query;
  console.log({ query: { code } });
  res.writeHead(301, { Location: `institutofb://UpdateSchedule/${code}` });
  return res.end();
});;


app.get("/iugu", async (req, res) => {
  console.log({ body: req.body, query: req.query, headers: req.headers });
  return res.end();
});;

app.get("/iugu/credit", async (req, res) => {
  console.log({ body: req.body, query: req.query, headers: req.headers });
  return res.end();
});;



app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
