
// NEON EFFECT
$(document).ready(function() {
		$('#neonthis').novacancy({
                'reblinkProbability': 0.4,
         'blinkMin': 0.2,
         'blinkMax': 0.6,
         'loopMin': 1,
         'loopMax': 2,
         'color': 'red',
         'glow': ['0 0 80px red', '0 0 30px red', '0 0 6px red'],
         'off': 2,
         'blink': 0,
         'autoOn': true
              });
            });

!function(n){"use strict";n.fn.novacancyID=void 0===n.fn.novacancyID?0:n.fn.novacancyID,n.fn.novacancy=function(i){return n.each(this,function(o,t){new function(i,o){var t,a,l,e,c,r=this,s=n(i);if(this.repeat=function(){return!!s[0].novacancy||(s[0].novacancy=!0,!1)},this.setAppearance=function(){var i=++n.fn.novacancyID,o='[novacancy-id="'+i+'"]';s.attr("novacancy-id",i),r.addCSS(o)},this.addCSS=function(i){var o=r.css(i),t=n("<style>"+o+"</style>");n("body").append(t)},this.css=function(n){var i="",o="",a="";null!==t.color&&(i+="color: "+t.color+";",o+="color: "+t.color+"; opacity: 0.3;"),null!==t.glow&&(i+=a+="text-shadow: "+t.glow.toString()+";");var l="";return l+=n+" .novacancy."+t.classOn+" { "+i+" }\n",l+=n+" .novacancy."+t.classOff+" { "+o+" }\n"},this.rand=function(n,i){return Math.floor(Math.random()*(i-n+1)+n)},this.blink=function(n){r.off(n),n[0].blinking=!0,setTimeout(function(){r.on(n),r.reblink(n)},r.rand(t.blinkMin,t.blinkMax))},this.reblink=function(n){setTimeout(function(){r.rand(1,100)<=t.reblinkProbability?r.blink(n):n[0].blinking=!1},r.rand(t.blinkMin,t.blinkMax))},this.on=function(n){n.removeClass(t.classOff).addClass(t.classOn)},this.off=function(n){n.removeClass(t.classOn).addClass(t.classOff)},this.buildHTML=function(){var n=this.htmlString;s.html(n)},this.htmlString=function(){var i="";return n.each(s.contents(),function(o,a){if(3==a.nodeType){var l=a.nodeValue.split("");n.each(l,function(n,o){i+="<"+t.element+' class="novacancy '+t.classOn+'">'+o+"</"+t.element+">"})}else i+=a.outerHTML}),i},this.newArray=function(){var i,o=e.length,a=r.randomArray(o),l=t.off,c=t.blink;return l=Math.min(l,o),l=Math.max(0,l),i=a.splice(0,l),n.each(i,function(n,i){r.off(e.eq(i))}),c=0===c?o:c,c=Math.min(c,o-l),c=Math.max(0,c),a.splice(0,c)},this.randomArray=function(n){var i,o,t,a=[];for(i=0;i<n;++i)a[i]=i;for(i=0;i<n;++i)t=a[o=parseInt(Math.random()*n,10)],a[o]=a[i],a[i]=t;return a},this.loop=function(){var n,i;a&&0!==c.length&&(n=c[r.rand(0,c.length-1)],(i=e.eq(n))[0].blinking||r.blink(i),l=setTimeout(function(){r.loop()},r.rand(t.loopMin,t.loopMax)))},this.blinkOn=function(){a||(a=!0,l=setTimeout(function(){r.loop()},r.rand(t.loopMin,t.loopMax)))},this.blinkOff=function(){a&&(a=!1,clearTimeout(l))},this.bindEvents=function(){s.on("blinkOn",function(n){r.blinkOn()}),s.on("blinkOff",function(n){r.blinkOff()})},r.repeat())return!0;t=o,a=!1,l=0,r.buildHTML(),e=s.find(t.element+".novacancy"),c=r.newArray(),r.bindEvents(),r.setAppearance(),t.autoOn&&r.blinkOn()}(this,function(i){var o=n.extend({reblinkProbability:1/3,blinkMin:.01,blinkMax:.5,loopMin:.5,loopMax:2,color:"ORANGE",glow:["0 0 80px Orange","0 0 30px Red","0 0 6px Yellow"],off:0,blink:0,classOn:"on",classOff:"off",element:"data",autoOn:!0},i);return o.reblinkProbability*=100,o.blinkMin*=1e3,o.blinkMax*=1e3,o.loopMin*=1e3,o.loopMax*=1e3,o}(i))})}}(jQuery);

// TOOP ANIME
function TopAnime(subtype){
	$('#content').html(`
		<h2>top `+subtype+`</h5>
		<hr>
		`);
	$.ajax({
		url: 'https://api.jikan.moe/v3/top/anime/1/'+subtype,
		type: 'get',
		dataType: 'json',
		success: function(result){
				let anime = result.top;
				console.log(anime);
				
				$.each(anime, function(i, data){
					$('#content').append(`				 
		            
			              <div class="card mb-2 w-80">
			                <div class="row no-gutters">
			                  <div class="text-center">
			                    <img src="`+ data.image_url +`" class="card-img" >
			                  </div>
			                  <div class="col-md-8">
			                    <div class="card-body">
			                      <h5 class="card-title">#RANK `+ data.rank +` - `+ data.title +`</h5>
			                      <h6 class="card-subtitle mb-2 text-muted">`+ data.type +` (`+ data.episodes +` Eps)</h6>
			                      <h6 class="card-subtitle mb-4 text-muted">`+ data.start_date +` - `+ data.end_date +`</h6>
			                      <p class="card-text"><small class="text-muted">`+ data.members +` Member</small></p>
			                    </div>
			                  </div>
			                </div>
			              </div>

						`);
				}); 
		}
	});
}

// LATER SEASON
function LaterSeason(){
	$('#content').html(`
		<h2>Later Season</h5>
		<hr>
		`);
	$.ajax({
		url: 'https://api.jikan.moe/v3/season/later',
		type: 'get',
		dataType: 'json',
		success: function(result){
				let anime = result.anime;
				console.log(anime);
			
				$.each(anime, function(i, data){
					$('#content').append(`		

						<div class="card mb-2 w-80">
				          <div class="row no-gutters">
				            <div class="text-center">
				              <img src="`+ data.image_url +`" class="card-img">
				            </div>
				            <div class="col-md-9">
				              <div class="card-body mb-4 mr-2" style="max-height: 167px; >
				                	<h5 class="card-title">`+data.title+`</h5>
					                <h6 class="card-subtitle mb-1 text-muted">Type &nbsp;&nbsp;&nbsp;&nbsp;: `+data.type+`</h6>
					                <h6 class="card-subtitle mb-3 text-muted">Source : `+data.source+`</h6>
					                <h6 class="card-text">`+data.synopsis+`</p>
				              </div>
				            </div>
				          </div>
				        </div>	  
				                
						`);
				}); 
		}
	});
}



//SCHEDULE ANIME
function ScheduleAnime(subtype){
	$('#content').html(`
		<h2>`+subtype+`</h2>
		<hr>
		`);
	$.ajax({
		url: 'https://api.jikan.moe/v3/schedule/'+subtype,
		type: 'get',
		dataType: 'json',
		success: function(result){
				let anime;
				if(subtype === "sunday"){
					anime = result.sunday;
				}else if(subtype === "monday"){
					anime = result.monday;
				}else if(subtype === "tuesday"){
					anime = result.tuesday;
				}else if(subtype === "wednesday"){
					anime = result.wednesday;
				}else if(subtype === "thursday"){
					anime = result.thursday;
				}else if(subtype === "friday"){
					anime = result.friday;
				}else if(subtype === "saturday"){
					anime = result.saturday;
				}
				console.log(anime);
				
				$.each(anime, function(i, data){
					$('#content').append(`				 
		              	
		              	<div class="card mb-3 w-80 h-60" style="max-height: 400px;">
				          <div class="row no-gutters">
				            <div class="col-md-3 mb-3 mt-3 text-center">
				              <img src="`+ data.image_url +`" class=" alt="...">
				            </div>
				            <div class="col-md-9">
				              <div class="card-body mb-4" style="max-height: 380px; >
				                <h5 class="card-title">`+ data.title +`</h5>
				                <h6 class="card-subtitle mb-2 text-muted">Type &nbsp;&nbsp;: `+ data.type +`</h6>
				                <h6 class="card-subtitle mb-2 text-muted">Score : `+ data.score +`</h6>
				                <p class="card-text">`+data.synopsis+`</p>
				                <p class="card-text"><small class="text-muted">`+ data.members +` Member</small></p>
				              </div>
				            </div>
				          </div>
				        </div>	        
						`);
				});			 
		}
	});
}

function searchAnime(){
	$.ajax({
		url: 'https://api.jikan.moe/v3/',
		type: 'get',
		dataType: 'json',
		// data: {
		// 	'q': $('#search-input').val(),
		// 	'page' : '1'
		// },
		success: function(result, next){
			console.log(result);
		}
	});
}


// Method Search
$('#search-button').on('click', function () {
	subtype ='/search/anime/?q=naruto&page=1';
	searchAnime();
});

$('#search-input').on('keyup', function(event){
	if(event.keyCode === 13){
		subtype = '/search/anime/?q=naruto&page=1';
		searchAnime();
	}
});

// DROPDOWN
$('.dropdown-item').on('click', function(){
	let kategori = $(this).html();

	if(kategori == "Top Upcoming Anime"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');
		
		subtype = 'upcoming';
		TopAnime(subtype);
	}

	if(kategori == "Top Airing Anime"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'airing';
		TopAnime(subtype);
	}

	if(kategori == "Most Popular Anime"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'bypopularity';
		TopAnime(subtype);
	}

	// SCHEDULE
	if(kategori == "Sunday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'sunday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Monday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'monday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Tuesday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'tuesday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Wednesday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'wednesday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Thursday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'thursday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Friday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'friday';
		ScheduleAnime(subtype);
	}

	if(kategori == "Saturday"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');

		subtype = 'saturday';
		ScheduleAnime(subtype);
	}		
})
	

// FUNGSI BARU
$('.nav-link').on('click', function() {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();

	if(kategori == "Home"){
		home();
	}

	if(kategori == "`Bout Me"){
		$('.maincontainer').html(`
			<div class="hero"></div> 
                          
	          <!-- NEON TEXT -->
	          <div class="neon-text">
	            <p id="neonthis">
	                      C O O M I N G<br>
	                      &nbsp;&nbsp;&nbsp;&nbsp;S O O N;<br>
	            </p>
	          </div>
	          <div class="container-content" id="content">
	          </div>
			`);
	}

	if(kategori =="Later Season"){
		$('#content').html('');
		$('.hero').removeClass('hero');
		$('.neon-text').html('');
		LaterSeason();
	}

	
});