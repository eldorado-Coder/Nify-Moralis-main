module.exports = {
    folderName: "nify/",
    appId: process.env.MORALIS_APP_ID,
    serverUrl: process.env.MORALIS_SERVER_URL,
    jwtSecret: process.env.JWT_SECRET,
    appUrl: process.env.APP_URL + ':' + process.env.PORT,
}