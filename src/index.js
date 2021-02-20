import Post from './Post'
import './styles/styles.css'
import json from './assets/json.json'

const post = new Post('Webpack Post Title')

console.log(post.toString())

console.log(json)
