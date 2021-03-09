/**
 * ? DNS (Domain Name System)
 * ^由于ip长且难记，通过ip访问网站不方便。。所以后来通过发明了DNS服务器，这个时候我们访问网站输入网站域名，DNS服务器就解析我们的域名为ip。这样我们实际访问的就是对应的ip地址啦
 * _i 抽象点DNS就是 一个记录ip地址的超级分布式数据库
 * 
 * ?根域和根域服务器
 * _b 如何区分域
 * _w 当我们输入www.sunhao.win访问网站。实际上是访问了不同的域。
 * _w 其中”.”是DNS 命称空间，用来分割不同域
 * _w 意义上域名应该是这样。
 * 
 * _p www.sunhao.win.根域
 * _w 根域记录了所有win域(这一个位置的叫顶级域),
 * _w 它和sunhao(二级域),共同构成顶级域名sunhao.win
 * _w www(三级域)和sunhao.win叫二级域名www.sunhao.win
 * 
 * ! DNS主要通过UDP
 * 
 * _s 当我们访问www.sunhao.win的时候,
 * _w 如果本地dns服务器没有记录，
 * _b 那么它就会向根服务器去请求地址
 * 
 * 例如www.sunhao.win
 * win所在的位置就是顶级域
 *域名只是逻辑概念，并不代表计算机所在的物理地点。据2006年12月统计，现在顶级域名TLD(Top Level Domain)已有265个，分为三大类：
 *(1)国家顶级域名nTLD：采用ISO3166的规定。如：cn代表中国，us代表美国，uk代表英国，等等。国家域名又常记为ccTLD(cc表示国家代码contry-code)。
 *(2)通用顶级域名gTLD：最常见的通用顶级域名有7个，即：com(公司企业)，net(网络服务机构)，org(非营利组织)，int(国际组织)，gov(美国的政府部门)，mil(美国的军事部门)。
 *(3)基础结构域名(infrastructure domain)：这种顶级域名只有一个，即arpa，用于反向域名解析，因此称为反向域名。
 *顶级域名服务器主要负责管理在该顶级域名服务器注册的二级域名。
 */