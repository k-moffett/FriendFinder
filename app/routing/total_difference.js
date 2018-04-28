let fs = require('fs')
let express = require('express')
let app = express()

const reducer = (accumulator, currentValue) => accumulator*1 + currentValue*1
const subtract = (a,b) => { return Math.abs(a*1 - b*1)}

const total_difference = () => {

    let data = fs.readFileSync('./app/data/friends.js','utf8')
    let all_friends = data.split('\r\n')
    let all_friend_levels = []

all_friends.map((item, index) => {
    let temp = JSON.parse(all_friends[index])
    let array = Array.from(temp.results.split(","))
    let total_result = array.reduce(reducer)
    all_friend_levels.push(total_result)
})

    let current_user = all_friend_levels.pop()
    let absolute_val = []

all_friend_levels.map((item) => {
    absolute_val.push(subtract(current_user, item))
})

    let final_index = absolute_val.indexOf(Math.min(...absolute_val))
    let match = all_friends[final_index]
    return match

};//total_difference

module.exports = total_difference