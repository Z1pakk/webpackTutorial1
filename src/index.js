import * as $ from 'jquery'
import Post from '@models/Post'
import '@/styles/styles.css'
import '@/styles/less.less'
import '@/styles/sass.scss'

import '@/babel'

import json from './assets/json'
import WebpackLogo from './assets/webpack-logo'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post('Webpack Post Title2', WebpackLogo)

$('pre').html(post.toString())

console.log(json)

console.log('XML: ', xml)

console.log('CSV: ', csv)

