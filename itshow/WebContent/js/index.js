/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

/************시계****************/

var myVar = setInterval(myTimer, 1000);

function myTimer() {
	var d = new Date();
	document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

/*********************************/

function fade($ele) {
	$ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
		var $next = $(this).next('.quote');
		fade($next.length > 0 ? $next : $(this).parent().children().first());
	});
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {
	/*$('.main_nav').addClass('sticky');*/
	if ($(window).scrollTop() > 670) {
		$('.sticky').addClass('colorchange');
		$('#menu1').addClass('changea');
		$('#menu2').addClass('changea');
		$('#menu3').addClass('changea');
		$('#menu4').addClass('changea');
		$('#menu5').addClass('changea');
		$('#menu6').addClass('changea');
		$('#menu7').addClass('changea');
	} else {
		$('.sticky').removeClass('colorchange');
		$('#menu1').removeClass('changea');
		$('#menu2').removeClass('changea');
		$('#menu3').removeClass('changea');
		$('#menu4').removeClass('changea');
		$('#menu5').removeClass('changea');
		$('#menu6').removeClass('changea');
		$('#menu7').removeClass('changea');
	}
});

//Mobile Navigation
$('.mobile-toggle').click(function() {
	if ($('.main_nav').hasClass('open-nav')) {
		$('.main_nav').removeClass('open-nav');
	} else {
		$('.main_nav').addClass('open-nav');
	}
});

$('.main_nav li a').click(function() {
	if ($('.main_nav').hasClass('open-nav')) {
		$('.navigation').removeClass('open-nav');
		$('.main_nav').removeClass('open-nav');
	}
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {
	$('.main_nav').addClass('sticky');

	$('.smoothscroll').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

});

TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

/*slide-bar*/
$('.side-bar').click(function(){
	$(this).toggleClass('slide-bar');
});

$('.btn-toggle-side-bar').click(function() {
	$(this).toggleClass('cs-active');
});


var topBarHasClassTop = false;

$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();

	if ( scrollTop < 300 && topBarHasClassTop == false ) {
		topBarHasClassTop = true;
		$('#top-bar').addClass('top');
	}
	else if ( scrollTop >= 300 && topBarHasClassTop == true ) {
		topBarHasClassTop = false;
		$('#top-bar').removeClass('top');
	}
});



/*----------------------------------------------------*/
/* calendar
------------------------------------------------------ */
function info() {
   $.ajax(
      {
         type: "POST",
         url : "calendarList.do",
         success : function(data){
            if (data == "") {
               return;
            }
            var result = eval("(" + data + ")");
            var data=[{   eventName:'',
                     calendar:'콘서트',
                     color:'orange',
                     date:'',
                     num:'',
                     },
                     { eventName:'',
                      calendar:'뮤지컬',
                      color:'blue',
                      date:'',
                      num:''
                     },
                     { eventName:'',
                       calendar:'연극',
                       color:'green',
                       date:'',
                       num:''
                     }
                    ];
            for(var i = 0; i < result.data.length; i++) {
               data.push(
                  {
                     eventName:result.data[i].eventName,
                     calendar:result.data[i].calendar,
                     color:result.data[i].color,
                     date:result.data[i].date,
                     num:result.data[i].inum
                  }
               );
            }

            var calendar = new Calendar('#calendar',data);
         },
         error : function(e) {
            $('#result').html(e);
         }
      }      
   );
   start();
   myTimer();
}





!function() {

   var today = moment();

   function Calendar(selector, events) {
      var category = document.querySelector("#category");
      this.el = document.querySelector(selector);
      this.events = events;
      this.current = moment().date(1);
      this.events.forEach(function(ev) {
         ev.date = moment(ev.date);
      });
      this.draw();
      var current = document.querySelector('.today');
      if(current) {
         var self = this;
         window.setTimeout(function() {
            self.openDay(current);
         }, 500);
      }

   }

   Calendar.prototype.draw = function() {
      //Create Header
      this.drawHeader();

      //Draw Month
      this.drawMonth();

      this.drawLegend();
   }

   Calendar.prototype.drawHeader = function() {
      var self = this;
      if(!this.header) {
         //Create the header elements
         this.header = createElement('div', 'header');
         this.header.className = 'header';

         this.title = createElement('h1');

         var right = createElement('div', 'right');
         right.addEventListener('click', function() { self.nextMonth(); });

         var left = createElement('div', 'left');
         left.addEventListener('click', function() { self.prevMonth(); });

         //Append the Elements
         this.header.appendChild(this.title); 
         this.header.appendChild(right);
         this.header.appendChild(left);
         this.el.appendChild(this.header);
      }

      this.title.innerHTML = this.current.format('YYYY-MM');
   }

   Calendar.prototype.drawMonth = function() {
      var self = this;


      if(this.month) {
         this.oldMonth = this.month;
         this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
         this.oldMonth.addEventListener('webkitAnimationEnd', function() {
            self.oldMonth.parentNode.removeChild(self.oldMonth);
            self.month = createElement('div', 'month');
            self.backFill();
            self.currentMonth();
            self.fowardFill();
            self.el.appendChild(self.month);
            window.setTimeout(function() {
               self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
            }, 16);
         });
      } else {
         this.month = createElement('div', 'month');
         this.el.appendChild(this.month);
         this.backFill();
         this.currentMonth();
         this.fowardFill();
         this.month.className = 'month new';
      }
   }

   Calendar.prototype.backFill = function() {
      var clone = this.current.clone();
      var dayOfWeek = clone.day();

      if(!dayOfWeek) { return; }

      clone.subtract('days', dayOfWeek+1);

      for(var i = dayOfWeek; i > 0 ; i--) {
         this.drawDay(clone.add('days', 1));
      }
   }

   Calendar.prototype.fowardFill = function() {
      var clone = this.current.clone().add('months', 1).subtract('days', 1);
      var dayOfWeek = clone.day();

      if(dayOfWeek === 6) { return; }

      for(var i = dayOfWeek; i < 6 ; i++) {
         this.drawDay(clone.add('days', 1));
      }
   }

   Calendar.prototype.currentMonth = function() {
      var clone = this.current.clone();

      while(clone.month() === this.current.month()) {
         this.drawDay(clone);
         clone.add('days', 1);
      }
   }

   Calendar.prototype.getWeek = function(day) {
      if(!this.week || day.day() === 0) {
         this.week = createElement('div', 'week');
         this.month.appendChild(this.week);
      }
   }

   Calendar.prototype.drawDay = function(day) {
      var self = this;
      this.getWeek(day);

      //Outer Day
      var outer = createElement('div', this.getDayClass(day));
      outer.addEventListener('click', function() {
         self.openDay(this);
      });

      //Day Name
      var name = createElement('div', 'day-name', day.format('ddd'));

      //Day Number
      var number = createElement('div', 'day-number', day.format('DD'));


      //Events
      var events = createElement('div', 'day-events');
      this.drawEvents(day, events);

      outer.appendChild(name);
      outer.appendChild(number);
      outer.appendChild(events);
      this.week.appendChild(outer);
   }

   Calendar.prototype.drawEvents = function(day, element) {
      if(day.month() === this.current.month()) {
         var todaysEvents = this.events.reduce(function(memo, ev) {
            if(ev.date.isSame(day, 'day')) {
               memo.push(ev);
            }
            return memo;
         }, []);

         todaysEvents.forEach(function(ev) {
            var evSpan = createElement('span', ev.color);
            element.appendChild(evSpan);
         });
      }
   }

   Calendar.prototype.getDayClass = function(day) {
      classes = ['day'];
      if(day.month() !== this.current.month()) {
         classes.push('other');
      } else if (today.isSame(day, 'day')) {
         classes.push('today');
      }
      return classes.join(' ');
   }

   Calendar.prototype.openDay = function(el) {
      var details, arrow;
      var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
      var day = this.current.clone().date(dayNumber);

      var currentOpened = document.querySelector('.details');

      //Check to see if there is an open detais box on the current row
      if(currentOpened && currentOpened.parentNode === el.parentNode) {
         details = currentOpened;
         arrow = document.querySelector('.arrow');
      } else {
         //Close the open events on differnt week row
         //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
         if(currentOpened) {
            currentOpened.addEventListener('webkitAnimationEnd', function() {
               currentOpened.parentNode.removeChild(currentOpened);
            });
            currentOpened.addEventListener('oanimationend', function() {
               currentOpened.parentNode.removeChild(currentOpened);
            });
            currentOpened.addEventListener('msAnimationEnd', function() {
               currentOpened.parentNode.removeChild(currentOpened);
            });
            currentOpened.addEventListener('animationend', function() {
               currentOpened.parentNode.removeChild(currentOpened);
            });
            currentOpened.className = 'details out';
         }

         //Create the Details Container
         details = createElement('div', 'details in');

         //Create the arrow
         var arrow = createElement('div', 'arrow');

         //Create the event wrapper

         details.appendChild(arrow);
         el.parentNode.appendChild(details);
      }

      var todaysEvents = this.events.reduce(function(memo, ev) {
         if(ev.date.isSame(day, 'day')) {
            memo.push(ev);
         }
         return memo;
      }, []);

      this.renderEvents(todaysEvents, details);

      arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
   }

   Calendar.prototype.renderEvents = function(events, ele) {
      //Remove any events in the current details element
      var currentWrapper = ele.querySelector('.events');
      var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

      events.forEach(function(ev) {
         var div = createElement('div', 'event');
         var square = createElement('div', 'event-category ' + ev.color);
         var span = createElement('span', '', ev.eventName);
         span.addEventListener('click', function() {
            location.href = "infoContent.do?num="+ev.num;});
         div.appendChild(square);
         div.appendChild(span);
         wrapper.appendChild(div);
      });

      if(!events.length) {
         var div = createElement('div', 'event empty');
         var span = createElement('span', '', 'No Events');

         div.appendChild(span);
         wrapper.appendChild(div);
      }

      if(currentWrapper) {
         currentWrapper.className = 'events out';
         currentWrapper.addEventListener('webkitAnimationEnd', function() {
            currentWrapper.parentNode.removeChild(currentWrapper);
            ele.appendChild(wrapper);
         });
         currentWrapper.addEventListener('oanimationend', function() {
            currentWrapper.parentNode.removeChild(currentWrapper);
            ele.appendChild(wrapper);
         });
         currentWrapper.addEventListener('msAnimationEnd', function() {
            currentWrapper.parentNode.removeChild(currentWrapper);
            ele.appendChild(wrapper);
         });
         currentWrapper.addEventListener('animationend', function() {
            currentWrapper.parentNode.removeChild(currentWrapper);
            ele.appendChild(wrapper);
         });
      } else {
         ele.appendChild(wrapper);
      }
   }

   Calendar.prototype.drawLegend = function() {
      var legend = createElement('div', 'legend');
      var calendars = this.events.map(function(e) {
         return e.calendar + '|' + e.color;
      }).reduce(function(memo, e) {
         if(memo.indexOf(e) === -1) {
            memo.push(e);
         }
         return memo;
      }, []).forEach(function(e) {
         var parts = e.split('|');
         var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
         legend.appendChild(entry);
      });
      //$('#category').append(legend);
      category.appendChild(legend);
   }

   Calendar.prototype.nextMonth = function() {
      this.current.add('months', 1);
      this.next = true;
      this.draw();
   }

   Calendar.prototype.prevMonth = function() {
      this.current.subtract('months', 1);
      this.next = false;
      this.draw();
   }

   window.Calendar = Calendar;

   function createElement(tagName, className, innerText) {
      var ele = document.createElement(tagName);
      if(className) {
         ele.className = className;
      }
      if(innerText) {
         ele.innderText = ele.textContent = innerText;
      }
      return ele;
   }
}();

/*** 실시간 인기순위 ***/

function start() {
	var msg1 = "";
	var msg2 = "";
	var msg3 = "";
	$.ajax(
			{
				url : "infoRanking.do",
				success : function(data) {
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					for(var i=0;i<result.Data[0].code_1_infoDto.length;i++) {
						msg1 += "<div class='ranklist'>"+(i+1)+". ";
						msg1 += "<a href='infoContent.do?num="+result.Data[0].code_1_infoDto[i].i_num+"' style='color:black;'>";
						msg1 += result.Data[0].code_1_infoDto[i].i_name + "</a></div>";
						if(i != result.Data[0].code_1_infoDto.length-1) {
							msg1 += "<br>";
						}
					}
					msg1 += "<div class='ranktime'>"
						msg1 += result.Data[3].time + " 기준" + "</div>";
					$('#concertranking').html(msg1);

					for(var i=0;i<result.Data[1].code_2_infoDto.length;i++) {
						msg2 += "<div class='ranklist'>"+(i+1)+". ";
						msg2 += "<a href='infoContent.do?num="+result.Data[1].code_2_infoDto[i].i_num+"' style='color:black;'>";
						msg2 += result.Data[1].code_2_infoDto[i].i_name + "</a></div>";
						if(i != result.Data[1].code_2_infoDto.length-1) {
							msg2 += "<br>";
						}
					}
					msg2 += "<div class='ranktime'>"
						msg2 += result.Data[3].time + " 기준" + "</div>";
					$('#dramaranking').html(msg2);

					for(var i=0;i<result.Data[2].code_3_infoDto.length;i++) {
						msg3 += "<div class='ranklist'>"+(i+1)+". ";
						msg3 += "<a href='infoContent.do?num="+result.Data[2].code_3_infoDto[i].i_num+"' style='color:black;'>";
						msg3 += result.Data[2].code_3_infoDto[i].i_name + "</a></div>";
						if(i != result.Data[2].code_3_infoDto.length-1) {
							msg3 += "<br>";
						}
					}
					msg3 += "<div class='ranktime'>"
						msg3 += result.Data[3].time + " 기준" + "</div>";
					$('#musicalranking').html(msg3);
				}
			}
	);
	setInterval("start()", 30000);
}

/*
 ************* WEATHER
 */

function titleCase(str) {
	return str.split(' ').map(function (word) {
		return word[0].toUpperCase() + word.substring(1);
	}).join(' ');
}

function fullDay(str) {
	switch (str) {
	case 'Tue':
		return 'Tuesday';
	case 'Wed':
		return 'Wednesday';
	case 'Thu':
		return 'Thursday';
	case 'Sat':
		return 'Saturday';
	default:
		return str + 'day';
	}
}

$(function() {
	$(document).ready(function() {
		var data = "SEOUL";
		getWeather(data);
	});

	var $wrapper2 = $('.wrapper2'),
	$panel = $wrapper2.find('.panel'),
	$city = $panel.find('#city'),
	$weather = $panel.find('.weather'),
	$group = $panel.find('.group'),
	$dt = $group.find('#dt'),
	$description = $group.find('#description'),
	$wind = $group.find('#wind'),
	$humidity = $group.find('#humidity'),
	$temperature = $weather.find('#temperature'),
	$temp = $temperature.find('#temp'),
	$icon = $temp.find('#condition'),
	$tempNumber = $temp.find('#num'),
	$celsius = $temp.find('#celsius'),
	$fahrenheit = $temp.find('#fahrenheit'),
	$forecast = $weather.find('#forecast'),
	$search = $wrapper2.find('search'),
	$form = $search.find('form'),
	$button = $form.find('#button');

	function getWeather(input) {

		var appid = '58b6f7c78582bffab3936dac99c31b25';
		var requestWeather = $.ajax({
			dataType: 'json',
			url: '//api.openweathermap.org/data/2.5/weather',
			data: {
				q: input,
				units: 'imperial',
				appid: appid
			}
		});
		var requestForecast = $.ajax({
			dataType: 'json',
			url: '//api.openweathermap.org/data/2.5/forecast/daily',
			data: {
				q: input,
				units: 'imperial',
				cnt: '6',
				appid: appid
			}
		});

		$icon.removeClass();
		// $button.removeClass().addClass('button transparent');

		requestWeather.done(function(data) {

			var weather = document.getElementById('weather');
			if (data.cod === '404') {
				$city.html('city not found');
				//setBackground('color404', 'button404');
				weather.style.display = 'none';
			} else weather.style.display = '';

			var dt = new Date(data.dt * 1000).toString().split(' ');

			var title = data.sys.country
			? data.name + ', ' + data.sys.country
					: data.name;

			$city.html(title);
			$tempNumber.html(Math.round((data.main.temp - 32) * (5 / 9)));
			$description.html(titleCase(data.weather[0].description));
			$wind.html('풍량 : ' + data.wind.speed + ' mph');
			$humidity.html('습도 :' + data.main.humidity + '%');
			$dt.html(fullDay(dt[0]) + ' ' + dt[4].substring(0, 5));

			function toCelsius() {
				$tempNumber.html(Math.round((data.main.temp - 32) * (5 / 9)));
			}

			switch (data.weather[0].icon) {
			case '01d':
				$icon.addClass('wi wi-day-sunny');
				break;
			case '02d':
				$icon.addClass('wi wi-day-sunny-overcast');
				break;
			case '01n':
				$icon.addClass('wi wi-night-clear');
				break;
			case '02n':
				$icon.addClass('wi wi-night-partly-cloudy');
				break;
			}

			switch (data.weather[0].icon.substr(0, 2)) {
			case '03':
				$icon.addClass('wi wi-cloud');
				break;
			case '04':
				$icon.addClass('wi wi-cloudy');
				break;
			case '09':
				$icon.addClass('wi wi-showers');
				break;
			case '10':
				$icon.addClass('wi wi-rain');
				break;
			case '11':
				$icon.addClass('wi wi-thunderstorm');
				break;
			case '13':
				$icon.addClass('wi wi-snow');
				break;
			case '50':
				$icon.addClass('wi wi-fog');
				break;
			}
		});

		requestForecast.done(function(data) {
			var forecast = [];
			var length = data.list.length;
			for (var i = 1; i < length; i++) {
				forecast.push({
					date: new Date(data.list[i].dt * 1000).toString().split(' ')[0],
					celsius: {
						high: Math.round((data.list[i].temp.max - 32) * (5 / 9)),
						low: Math.round((data.list[i].temp.min - 32) * (5 / 9))
					}
				});
			}

			function toCelsius() {
				doForecast('celsius');
			}

			function doForecast(unit) {
				var arr = [];
				var length = forecast.length;
				for (var i = 0; i < length; i++) {
					arr[i] = ("<div class='block2'><h5 class='secondary'>" + forecast[i].date + "</h5><h5 class='high'>" + forecast[i][unit].high + "&deg;</h5><h5 class='secondary'>" + forecast[i][unit].low + "&deg;</h5></div>");
				}
				$forecast.html(arr.join(''));
			}

			doForecast('celsius');
		});
	}

	$form.submit(function(event) {
		var input = document.getElementById('search').value;
		var localmang = "";
		$.ajax(
				{
					url : "localhost.jsp",
					success : function(data) {
						var list = eval("("+data+")");
						for(var i=0;i<list.locals.local.length;i++) {
							if(input==list.locals.local[i].localname) {
								localmang = list.locals.local[i].realname;
								getWeather(localmang);
							}
						}
						var length = localmang.length;
						if(!length) {
							getWeather(input);
						}
					},
					error : function(e) {
						alert(e);
					}
				}		
		);
		event.preventDefault();
	});
});