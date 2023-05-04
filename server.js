const express = require('express')

const app = express();

app.use(express.json());


app.get("/redirect", async (req, res) => {
  const { code } = req.query;
  console.log({ query: { code } });

  res.writeHead(301, { Location: `institutofb://MainTab/Documents/${code}` });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.writeHead(301, { Location: `institutofb://MainTab/Documents/${code}` });

   console.log({ Location: `institutofb://MainTab/Documents/${code}` });
  return res.end();
});;

app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
