;(function(w,d,$){
	$.extend({
		toast:function(option){
			var defaults = {
				background:'rgba(0,0,0,0.8)',	//背景
				color:'#fff',					//字体颜色
				position:'bottom',				//位置，取值：'bottom'(默认),'middle','top'
				speed:2000						//显示时间ms
			}
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
			$toast.css({
				'background':options.background,
				'color':options.color,
				'top':top,
			    'padding': '5px 15px',
			    'border-radius': '5px',
			    'z-index': '1000',
			    'max-width': '70%',
				'position': 'absolute',
			    'margin': 'auto',
			    'display':'none',
			    'text-align': 'justify'
			});
			//toast水平居中
			$toast.css('margin-left',($(window).width()-$toast.width())/2-15+'px');
			//toast动画--默认为淡入淡出
			$toast.fadeIn();
			setTimeout(function(){
				$toast.fadeOut(function(){
					$toast.remove();
				});
			},options.speed);
		}
	})
	window.toast = function(msg){
		$.toast(msg);
	}
})(window,document,jQuery);