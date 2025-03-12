const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      `mongodb+srv://akshupokalekar98:abs3RQmybubUAWch@abawatapi.jno4y.mongodb.net/?retryWrites=true&w=majority&appName=abawatApi`
    )
    .then((res) => {
      console.log(`Database connected successfully`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnect;
