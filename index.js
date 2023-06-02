const express = require("express");
const cors = require("cors");
const app = express();

const ImageGalleryRoute = require('./routes/imageGallery');
const { userInfo } = require("./middlewares/userInfo");
const errorHandle = require("./middlewares/errorHandle");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//Application Level middleware
app.use(userInfo);

app.use("/", ImageGalleryRoute);

app.use(errorHandle);

app.use("*", (req, res) => {
    res.status(404).json({
        message: "This Route does not exist",
    });
});


const PORT = 3008;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));