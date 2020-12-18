const user = {
    _id: "1",
    name: "Paola",
    email: "paolagaray@yahoo.com",
    picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}
