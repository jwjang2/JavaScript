		var Body = {
			setColor : function(color) {
				document.querySelector('body').style.color = color;
			},
			setBackgrounCole : function(color) {
				document.querySelector('body').style.backgroundColor = color;
			}
		}

		function LinksSetColor(color){
			var aList = document.querySelectorAll('a');
			var i = 0;
			while(i < aList.length) {
				aList[i].style.color = color;
				i = i + 1;
			}
		}

		function nigthDaySetColor(self){
			var target = document.querySelector('body');
			if(self.value === 'night') {
				Body.setBackgrounCole('black');
				Body.setColor('white');
				self.value = 'day';
				LinksSetColor('powderblue');
			} else {
				Body.setBackgrounCole('white');
				Body.setColor('black');
				self.value = 'night';
				LinksSetColor('blue');
			}
		}
