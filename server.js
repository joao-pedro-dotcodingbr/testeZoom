const express = require('express')

const app = express();

app.use(express.json());


app.get("/redirect", (req, res) => {
  const { code } = req.query;
  console.log({ query: { code } });
  res.writeHead(301, { Location: `institutofb://UpdateSchedule/${code}` });
   console.log({ Location: `institutofb://UpdateSchedule/${code}` });
  return res.end();
});;

app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
