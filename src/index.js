import Post from '@models/Post'
import '@/styles/styles.css'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log(post.toString())

console.log(json)

console.log('XML: ', xml)

console.log('CSV: ', csv)

