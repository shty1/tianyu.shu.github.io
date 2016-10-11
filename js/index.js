/**
 * Created by wcs on 2016/8/25.
 */

window.onload=function(){
//    调用轮播图的功能
    banner();
//    激活提示工具
    $('[data-toggle="tooltip"]').tooltip()

   // 产品模块 导航宽度
    productNav();
}

// 轮播图的功能
function banner(){
//     获取 目标元素
    var bannerBox=document.querySelector('.wjs-banner');
//    存储数据
    var startX=0;
    var moveX=0;
    var distanceX=0;
//    绑定touch事件

    bannerBox.addEventListener('touchstart',function(e){
        //     获取起始坐标
        startX= e.changedTouches[0].clientX;
    })

//    绑定移动事件
    bannerBox.addEventListener('touchmove',function(e){
        moveX= e.changedTouches[0].clientX;
        //     计算距离差
        distanceX=moveX-startX;
    })
//    绑定结束事件
    bannerBox.addEventListener('touchend',function(){
        //     判断 确定用户操作
        if(distanceX>0){
            //    图片上一张
            console.log('上一张');
         $('.carousel').carousel('prev');
        }

        if(distanceX<0){
            //    图片下一张
            console.log('下一张');
            $('.carousel').carousel('next');

        }

        startX=0;
        moveX=0;
        distanceX=0;
    })


//    根据用户操作
//   让图片滑动

}

// 产品模块 导航宽度
function productNav(){

    var nav=$('.wjs-nav-tabs');
//    获取所有的li
    var lis=nav.find('li');
    // 记录累加数据
    var w=0;
//    累加 li的宽度
    $.each(lis,function(index,item){
    //     累加
        w+=$(item).innerWidth();
    })

//    把宽度加给 nav
    nav.width(w);

//
}
