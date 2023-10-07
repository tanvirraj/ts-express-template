import express, { Request, Response, NextFunction } from "express";
const app = express();
const port = 8080;

//custom middleware
const myLogger = function (req: Request, res: Response, next: NextFunction) {
  console.log("=====================================\n");
  const time = new Date().toLocaleString();
  console.log("time->", time);

  console.log("\n=====================================");
  next();
};

app.use(myLogger);

app.get("/", (req: Request, res: Response) => {
  res.json({ value: "hello" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
