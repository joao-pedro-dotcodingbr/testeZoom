const express = require('express')

const app = express();

app.use(express.json());


app.get("/redirect", async (req, res) => {

  try {
     const { code } = req.query;
     console.log({ query: { code } });

     res.writeHead(301, {
       Location: `institutofb://MainTab/Documents/${code}`,
     });
     console.log({ Location: `institutofb://MainTab/Documents/${code}` });

     console.log({ ip: req.ip });
     return res.end();
  } catch (error) {
    console.log(error)
  }

});;

app.listen(process.env.PORT || 3535, () => {
  console.log('listening on port')
});
