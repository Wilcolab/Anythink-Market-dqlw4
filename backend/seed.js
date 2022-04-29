const res = db.items.insertMany(
    Array.from({ length: 10 }, (v, i) => ({
        title: "Title" + i, description: "About" + i, image: "Image" + i,
    })))

console.log(res)

const find = db.items.find({})
console.log(find)
