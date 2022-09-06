const home = (req, res) => {
  console.log("home route reloaded");
  return res.status(200).send("<h1>This is TIK TOK CLONE</h1>");
};
export { home };
