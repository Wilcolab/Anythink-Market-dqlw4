const res = db.items.insertMany(
    Array.from({ length: 100 }, (v, i) => ({
        title: "Title" + i, description: "About" + i, image: "Image" + i,
    })))

console.log(res)

const users = db.users.insertMany(
    Array.from({ length: 100 }, (v, i) => (
        { username: "User" + i, email: "email" + i }
    ))
)
console.log(users)

const comments = db.comments.insertMany(
    Array.from({ length: 100 }, (v, i) => (
        { body: "Body" + i }
    ))
)
console.log(comments)
