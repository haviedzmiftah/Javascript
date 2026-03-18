const users = [
  { name: "andi", age: 20 },
  { name: "budi", age: 17 },
  { name: "citra", age: 25 }
]

function getAdultUser(users) {
    return users.filter(a => a.age > 17).length;
}

console.log(getAdultUser(users));