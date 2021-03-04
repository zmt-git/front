/**
 * ? diff 
 * * 1. 比较只会在同层级进行, 不会跨层级比较
 * 
 * ? diff比较逻辑
 * * 1、旧头 == 新头
 * ^ 相同下一轮比较， 不用移动dom   newStartIdx ++ ， oldStartIdx ++
 * 
 * * 2、旧尾 == 新尾
 * 
 * ^ 相同下一轮比较， 不用移动dom   newEndIdx -- ， oldEndIdx --
 * 
 * * 3、旧头 == 新尾
 * ^ 相同下一轮比较， 移动dom  parentElm.insertBefore( oldStartVnode.elm, oldEndVnode.elm.nextSibling) ; newEndIdx -- ， oldStartIdx ++
 * 
 * * 4、旧尾 == 新头
 * ^ 相同下一轮比较， 移动dom  parentElm.insertBefore( oldEndVnode.elm, oldStartVnode.elm) ; oldEndIdx -- ， newStartIdx ++
 * 
 * * 5、单个查找
 *  * 5.1 生成map 表
 * 
 *  * 5.2 判断 新子节点是否存在旧子节点数组中
 * 
 *  * 5.3 不存在旧子节点数组中
 * 
 *    ^ 直接创建DOM，并插入oldStartVnode 前面
 * 
 *  * 5.4 存在旧子节点数组中
 *    ^ 找到这个旧子节点，然后判断和新子节点是否 sameVnode
 *    ^ 如果相同，直接移动到 oldStartVnode 前面
 *    ^ 如果不同，直接创建插入 oldStartVnode 前面
 * 
 * * 6.处理可能剩下的节点
 *   ^ 在updateChildren 中，比较完新旧两个数组之后，可能某个数组会剩下部分节点没有被处理过，所以这里需要统一处理
 * 
 *  * 6.1 新子节点遍历完了
 *    ^ newStartIdx > newEndIdx
 *    ^ 新子节点遍历完毕，旧子节点可能还有剩,所以我们要对可能剩下的旧节点进行 批量删除！就是遍历剩下的节点，逐个删除DOM
 *    !for (; oldStartIdx <= oldEndIdx; ++oldStartIdx) {
 *    !  oldCh[oldStartIdx]
 *    !  .parentNode
 *    ! .removeChild(el);
 *    !}
 *  * 6.2 旧子节点遍历完了
 *    ^ oldStartIdx > oldEndIdx
 *    ^旧子节点遍历完毕，新子节点可能有剩,所以要对剩余的新子节点处理,很明显，剩余的新子节点不存在 旧子节点中，所以全部新建
 *    ! for (; newStartIdx <= newEndIdx; ++newStartIdx) {
 *    !  createElm(
 *    !      newCh[newStartIdx], 
 *    !      parentElm, 
 *    !      refElm
 *    !);
 *    ! }
 *    ! var newEnd = newCh[newEndIdx + 1]
 *    !refElm = newEnd ? newEnd.elm :null;
 *    ^ refElm 获取的是 newEndIdx 后一位的节点
 *    ^ 当前没有处理的节点是 newEndIdx
 *    ^ 也就是说 newEndIdx+1 的节点如果存在的话，肯定被处理过了
 *    ^ 如果 newEndIdx 没有移动过，一直是最后一位，那么就不存在 newCh[newEndIdx + 1]
 *    ^ 那么 refElm 就是空，那么剩余的新节点 就全部添加进 父节点孩子的末尾
 *    ^ 如果 newEndIdx 移动过，那么就逐个添加在 refElm 的前面
 * 
 */