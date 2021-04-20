import _ from 'lodash'
import './reset.css'
import bgImg from './bg2.jpg'
import person from './config.json'
import 'babel-polyfill'

function component () {
  const element = document.createElement('div')

  let str =`姓名: ${person.name} -- 年龄: ${person.age}岁 -- 性别：${person.sex ? '男' : '女'}`

  element.innerHTML = _.join(['hello', 'webpack']) + str

  element.classList.add('hello')

  const bg = new Image()

  bg.src = bgImg

  bg.classList.add('hello-img')

  element.appendChild(bg)

  console.log('watch')
  console.log('watch')
  console.log(process.env.NODE_ENV)

  return element
}

document.body.appendChild(component())
