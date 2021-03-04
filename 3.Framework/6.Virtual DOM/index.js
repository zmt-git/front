/**
 * ? Virtual DOM
 * *Virtual DOM是对DOM的抽象,本质上是JavaScript对象,这个对象就是更加轻量级的对DOM的描述.
 *
 * ? 为什么需要Virtual DOM
 * *前端性能优化的一个秘诀就是尽可能少地操作DOM,不仅仅是DOM相对较慢,更因为频繁变动DOM会造成浏览器的回流或者重绘,
 * *这些都是性能的杀手,因此我们需要这一层抽象,在patch过程中尽可能地一次性将差异更新到DOM中,这样保证了DOM不会出现性能很差的情况.
 * *其次,现代前端框架的一个基本要求就是无须手动操作DOM,一方面是因为手动操作DOM无法保证程序性能,多人协作的项目中如果review不严格,可能会有开发者写出性能较低的代码,
 * *另一方面更重要的是省略手动DOM操作可以大大提高开发效率.
 * *最后,也是Virtual DOM最初的目的,就是更好的跨平台,比如Node.js就没有DOM,如果想实现SSR(服务端渲染),那么一个方式就是借助Virtual DOM,因为Virtual DOM本身是JavaScript对象.
 * 
 */

import { createElement, render, renderDom } from './element.js'
import { diff } from './diff.js'
import { patch } from './patch'
 let virtualDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'list-item' }, ['skye']),
  createElement('li', { class: 'list-item' }, ['may']),
  createElement('li', { class: 'list-item' }, ['babi'])
 ])

 let virtualDom2 = createElement('ul', { class: 'list2' }, [
  createElement('li', { class: 'list-item2' }, ['skye2']),
  createElement('li', { class: 'list-item2' }, ['may2']),
  createElement('li', { class: 'list-item2' }, ['babi2'])
 ])

 const el = render(virtualDom)

 renderDom(el, document.querySelector('#app'))


const patches = diff(virtualDom, virtualDom2)

patch(el, patches)

