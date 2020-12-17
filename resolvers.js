const user = {
    _id: "1",
    name: "Paola",
    email: "paolagaray@yahoo.com",
    picture: "https://cloudinary.com/asdf"
}

module.export = {
    Query: {
        me: () => user
    }
}
