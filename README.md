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
    background:'rgba(0,0,0,0.8)',	//背景
    color:'#fff',					//字体颜色
    position:'bottom',				//位置，取值：'bottom'(默认),'middle','top'
    speed:2000,						//显示时间ms
    msg:"提示信息",                  //提示信息，取值为string或者html
    style:{}                        //样式文件
    callback:function(){}           //提示框消失后回调
})
```
