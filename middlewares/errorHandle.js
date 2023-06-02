const errorHandle = (err, req, res, next) => {
    const status = err.status || 500;
    let message = err.message || "Something went wrong please try again!";

    if (status == 400) {
        message = `${JSON.stringify(err.fields.body)} : This payload is not accepted, Required payloads are ${err.fields.required} `;
    }

    res.status(status).json({
        message: message
    })
};

module.exports = errorHandle;