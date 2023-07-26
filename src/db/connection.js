const mongoose=require("mongoose")
mongoose
  .connect("mongodb://0.0.0.0:27017/Jobs_Api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conection succesfull");
  })
  .catch((e) => {
    console.log(e);
  });
