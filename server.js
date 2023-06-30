const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/redirect", async (req, res) => {
  const { code } = req.query;
  console.log({ query: { code } });
  res.writeHead(301, { Location: `institutofb://UpdateSchedule/${code}` });
  return res.end();
});;


app.post("/iugu", async (req, res) => {
  console.log(
    "============================== teste ========================================"
  );

    const idInvoice = req.body["data[id]"];
  console.log({ body: req.body, idInvoice });
  console.log(
    "============================== end teste ========================================"
  );

  return res.end();
});;

app.post("/iugu/credit", async (req, res) => {
  console.log('============================== teste ========================================')
  console.log({ body: req.body });
  console.log(
    "============================== end teste ========================================"
  );

  return res.end();
});;



app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
