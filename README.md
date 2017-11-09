# 移动端toast提示窗

## 使用方法
1 引入js文件
```
<script src="./toast.js"></script>
```
2 在页面调用
```
$.toast(提示信息);
```
或者
```
$.toast({
    //背景
    bgColor:'rgba(0,0,0,0.8)',
    //字体颜色
    color:'#fff',
    //位置，取值：'bottom'(默认),'middle','top'					
    position:'bottom',
    //显示时间ms			
    speed:2000,		
    //提示信息，取值为string或者html				
    msg:"提示信息",
    //样式             
    style:{},
    //提示框消失后回调             
    callback:function(){}           
})
```
