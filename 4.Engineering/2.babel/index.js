/**
 * ?Babel
 * * Babel 是一个 JavaScript 编译器。
 * 
 * !Babel 只是转译新标准引入的语法
 * !对于新标准引入的全局变量、部分原生对象新增的原型链上的方法，Babel 表示超纲了
 * ^ 全局变量
  * ^ Promise
  * ^ Symbol
  * ^ WeakMap
  * ^ Set
 * ^includes
 * ^generator 函数
 * !上面的这些 API，Babel 是不会转译的，需要引入 polyfill 来解决。
 * 
 * ? Babel 编译的三个阶段
 * * 1 解析（Parsing）：将代码字符串解析成抽象语法树。
 * * 2 转换（Transformation）：对抽象语法树进行转换操作
 * * 3 生成（Code Generation）: 根据变换后的抽象语法树再生成代码字符串
 * 
 * ? AST  Abstract Syntax Tree 抽象语法树
 * ? AST 是怎么来的
 * * 1. 分词：将整个代码字符串分割成语法单元数组
  *  ^语法单元通俗点说就是代码中的最小单元
  *  ^ Javascript 代码中的语法单元主要包括以下这么几种
    *  ^ 关键字：const、 let、 var 等
    *  ^标识符：可能是一个变量，也可能是 if、else 这些关键字，又或者是 true、false 这些常量
    *  ^运算符
    *  ^数字
    *  ^空格
    *  ^注释：对于计算机来说，知道是这段代码是注释就行了，不关心其具体内容
 * * 2. 语法分析：建立分析语法单元之间的关系
 * 
 * ?转换（Transformation）
 * 
 * ?生成（Code Generation）
 * * 用 babel-generator 通过 AST 树生成 ES5 代码
 */