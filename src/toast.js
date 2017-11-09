;(function($){
    $.extend({
        /**
         *名称：toast
         *
         **/
        /*使用实例
        $.toast(提示信息);
        或
        $.toast({
            bgColor:'rgba(0,0,0,0.8)',	//背景
            color:'#fff',					//字体颜色
            position:'bottom',				//位置，取值：'bottom'(默认),'middle','top'
            speed:2000,						//显示时间ms
            msg:"提示信息",                  //提示信息，取值为string或者html
            style:{}                        //样式文件
            callback:function(){}           //提示框消失后回调
        });
        */
        toast:function(option, cb){
			var defaults = {
				bgColor:'rgba(0,0,0,0.8)',	//背景
				color:'#fff',					//字体颜色
				position:'bottom',				//位置，取值：'bottom'(默认),'middle','top'
				speed:2000						//显示时间ms
			};
			var options = null;
			//处理数据
			if(typeof option === 'string'){
				defaults.msg = option;
				options = $.extend({},defaults);
			}else if(typeof option === 'object'){
				options = $.extend({},defaults,option);
			}
			//主题元素
			var html = '<div class="toast">'+options.msg+'</div>';
			$('body').append(html);
			//设置toast位置
			var top = "0px";
			if(options.position=='bottom'){
				top = "80%";
			}else if(options.position=='middle'){
				top = "50%";
			}else if(options.position=='top'){
				top = "20%";
			}
			//设置toast样式
			var $toast = $('.toast');
            var basicCssRules = {
				'background-color': options.bgColor,
				'color': options.color,
				'top': top,
			    'padding': '5px 15px',
			    'border-radius': '5px',
			    'z-index': '10000',
			    'max-width': '70%',
				'position': 'fixed',
			    'margin': 'auto',
			    'display':'none',
			    'text-align': 'justify'
			};
            var cssRules = null;
            if(typeof options.style === "object"){
                cssRules = $.extend({},basicCssRules,options.style);
            }else{
                cssRules = basicCssRules;
            }
			$toast.css(cssRules);
			//toast水平居中
			$toast.css('margin-left',($(window).width()-$toast.width())/2-15+'px');
			//toast动画--默认为淡入淡出
			$toast.fadeIn();
			setTimeout(function(){
				$toast.fadeOut(function(){
					$toast.remove();
                    if(typeof cb === "function") cb();
                    if(typeof options.callback === "function") callback();
				});
			}, options.speed);
		}
    })
}(jQuery))

window.toast = $.toast;
