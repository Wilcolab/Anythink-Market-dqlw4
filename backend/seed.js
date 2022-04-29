const res = db.items.insertMany(
    Array.from({ length: 100 }, (v, i) => ({
        title: "Title" + i, description: "About" + i, image: "Image" + i,
    })))

console.log(res)

const find = db.items.find({})
console.log(find)

const users = db.users.insertMany(
    Array.from({ length: 100 }, (v, i) => (
        { username: "User"+i, email: "email"+i }
    ))
)
console.log(users)
