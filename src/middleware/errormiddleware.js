const errorMiddlewar = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    succes: false,
    message: "Something went wrong",
    err,
  };
  if (err.name === "ValidationError") {
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)

      .join(",");
  }
  res.json({ message: defaultError.message });
};
module.exports = errorMiddlewar;

