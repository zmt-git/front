/***
 * ?网易
 * *（1）先拿设计稿竖着的横向分辨率除以100得到body元素的宽度
 * *（2）布局时，设计图标注的尺寸除以100得到css中的尺寸
 * *（3）在dom ready以后，通过以下代码设置html的font-size
 * *    document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
 * *（4）font-size可能需要额外的媒介查询，并且font-size不能使用rem，如网易的设置
  * @media screen and (max-width:321px){
        .m-navlist{font-size:15px}
    }

    @media screen and (min-width:321px) and (max-width:400px){
        .m-navlist{font-size:16px}
    }

    @media screen and (min-width:400px){
        .m-navlist{font-size:18px}
    }
 * * <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">
 *
 * *当deviceWidth大于设计稿的横向分辨率时，html的font-size始终等于横向分辨率/body元素宽
 * *之所以这么干，是因为当deviceWidth大于640时，则物理分辨率大于1280（这就看设备的devicePixelRatio这个值了），应该去访问pc网站了。
 * *事实就是这样，你从手机访问网易，看到的是触屏版的页面，如果从pad访问，看到的就是电脑版的页面。如果你也想这么干，只要把总结中第三步的代码稍微改一下就行了
 * *var deviceWidth = document.documentElement.clientWidth;
 * *if(deviceWidth > 640) deviceWidth = 640;
 * *document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
 */

 /**
  *  !淘宝的做法
  * * 1.动态设置viewport的scale
  * *  var scale = 1 / devicePixelRatio;
  * *  document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  * 
  * * 2.动态计算html的font-size
  * *  document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
  *
  * * 3.局的时候，各元素的css尺寸=设计稿标注尺寸/设计稿横向分辨率/10
  *
  * * 4.font-size可能需要额外的媒介查询，并且font-size不使用rem，这一点跟网易是一样的
  * 
  * * 5.最后还有一个情况要说明，跟网易一样，淘宝也设置了一个临界点，当设备竖着时横向物理分辨率大于1080时，html的font-size就不会变化了，原因也是一样的，分辨率已经可以去访问电脑版页面了
  */