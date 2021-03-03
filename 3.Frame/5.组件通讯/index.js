/**
 * ? 组件通讯
 * * 1. props / $emit
 * ^ 父组件通过props的方式向子组件传递数据，而通过$emit 子组件可以向父组件通信
 * !  prop 只可以从上一级组件传递到下一级组件（父子组件），即所谓的单向数据流。而且 prop 只读，不可被修改，所有修改都会失效并警告
 *
 * * 2. $children / $parent
 * ^$parent和$children就可以访问组件的实例，访问此组件的所有方法和data
 * ! 如在#app上拿$parent得到的是new Vue()的实例，在这实例上再拿$parent得到的是undefined，
 * !而在最底层的子组件拿$children是个空数组。
 * !也要注意得到$parent和$children的值不一样，$children 的值是数组，而$parent是个对象
 * ! 父子组件之间的通信， 而使用props进行父子组件通信更加普遍; 二者皆不能用于非父子组件之间的通信
 * * 3. provide / reject
 * ^ 简单来说就是父组件中通过provide来提供变量, 然后再子组件中通过inject来注入变量。
 * !这里不论子组件嵌套有多深, 只要调用了inject 那么就可以注入provide中的数据，而不局限于只能从当前父组件的props属性中回去数据
 * 
 * * 4. ref / refs
 * ^ 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据
 * 
 * * 5. eventBus
 * ^ 事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件
 * ! eventBus也有不方便之处, 当项目较大,就容易造成难以维护的灾难
 * 
 * * 6. Vuex
 * 
 * 
 * * 7. localStorage / sessionStorage
 * ^ window.localStorage.getItem(key)获取数据 通过window.localStorage.setItem(key,value)存储数据
 * ! 注意用JSON.parse() / JSON.stringify() 做数据格式转换 localStorage / sessionStorage可以结合vuex, 实现数据的持久保存,同时使用vuex解决数据和状态混乱问题.
 * * 8. $attr / $listeners
 * 
 * 
 */