// 下拉菜单交互脚本
document.addEventListener('DOMContentLoaded', function() {
  // 下拉菜单交互
  Array.from(document.querySelectorAll('.dropdown')).forEach(function(drop){
    var trigger = drop.querySelector('span');
    var list = drop.querySelector('.dropdown-list');
    
    // 鼠标进入下拉菜单区域
    drop.addEventListener('mouseenter', function(){
      drop.classList.add('active');
      list.classList.add('show');
    });
    
    // 鼠标离开下拉菜单区域
    drop.addEventListener('mouseleave', function(){
      drop.classList.remove('active');
      list.classList.remove('show');
    });
  });
  
  // 给body加padding-top防止内容被遮挡
  if(!document.body.style.paddingTop){
    document.body.style.paddingTop='48px';
  }
}); 