import { app } from "./app";

app.listen(3333 || process.env.APP_PORT, ()=>{
  console.log("Server on http://localhost:3333");
})
