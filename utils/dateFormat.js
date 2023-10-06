const dayjs = require ("dayjs");

const timeStamp = () => {
    const date = dayjs().format("DD, MMM, YYYY");
    return date
}


module.exports = timeStamp