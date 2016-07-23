/*-------------------------------------------------------------------------

	Theme Name: CARTEL - html - v.1
	
	For any questions concerning this theme please refer to documention or
	our forum at support.udfrance.com.

/*------------------------------------------------------------------------

//GENERAL FUNCTONS ///////////////////////////////////////////////////////

-------------------------------------------------------------------------*/

$(document).ready(function(){
	
	var width = $(window).width();
	
    
	var isMobile = false;
	
			if( navigator.userAgent.match(/Android/i) || 
				navigator.userAgent.match(/webOS/i) ||
				navigator.userAgent.match(/iPhone/i) || 
				navigator.userAgent.match(/iPad/i)|| 
				navigator.userAgent.match(/iPod/i) || 
				navigator.userAgent.match(/BlackBerry/i)){
								
					isMobile = true;
							
			}
			
			var cols = 3
				var masonry = $('#grid');
			
				calculateCols();
		
				// initialize masonry
				masonry.imagesLoaded(function(){
					
					masonry.masonry({
						itemSelector: '.thumb',
						isResizable: true,
						columnWidth:Math.floor((masonry.width()/ cols))
					  });
					
				});
				
			  /*resize*/
			  $(window).resize(function(){
					
					width = $(window).width();
					if (width > 960) {
					    $("#goldrush").attr("height","462");
					}else if ((width < 960) && (width > 768)){
					    $("#goldrush").attr("height","334");
					}else if ((width < 768) && (width > 480)){ 
					    $("#goldrush").attr("height","212");
					}else if (width < 480) { 
					    $("#goldrush").attr("height","140");
					}
					
					calculateCols();
					
					masonry.imagesLoaded(function(){
					
					  masonry.masonry({
						itemSelector: '.thumb',
						isResizable: false,
						 isAnimated: false,
						columnWidth:Math.floor((masonry.width() / cols))
					  });
				
					});
					
				});
				
				function calculateCols (){
				
					if(masonry.width() <= 426){
					
						 cols=2;
					 
					}else{
				
						cols=3;
				
					}
				}

						   
	
	/*vars used throughout*/
	var toggleMenu =$('.mobileMenuToggle'),			//Mobile menu ref.
	    menuLink=$('ul.navigation li'),
		lightboxTransition = 'fade',				//Fancybox transition type
	 	overlayOpacity =0.8,						//Fancybox overlay opacity
	 	overlayColor = '#000',						//Fancybox overlay color	
	 	videoWidth = 663,							//Fancybox video width
	 	videoHeight = 374;							//Fancybox video height
		lazyload = true;							//Whether to use lazy load or not


	
	//MOBILE MENU ---------------------------------------------------------------------------/

	/* Clone navigation for mobile */
	
	$('#header-inner header nav').clone().addClass('mobile-nav').appendTo('#header-inner header').find('.navigation').addClass('mobile-navigation');
	
	/* Use mobile navigation on iPad Landscape */
	
	if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i)){
		$('#header-inner').addClass('is_tablet');
		$('#header-inner .mobile-nav').css('display','block');
		$('#header-inner ul.navigation, #header-inner ul.mobile-navigation').css('display','none');
		$('#header-inner .mobileMenuToggle').css('display','block');
	}

	$('.mobileMenuToggle').on('click', function() {
		if($(this).hasClass('open')) {
			$('ul.mobile-navigation').slideUp('normal','easeInOutQuint');
			$(this).removeClass('open');
		} else {
			$('ul.mobile-navigation').slideDown('normal','easeInOutQuint');
			$(this).addClass('open');
		}
		return false;
	});

	
	$('.thumb a').on('mouseover', function(){
		$(this).children('.over').stop(true,true).fadeIn();
	});
	
	$('.thumb a').on('mouseout', function(){
		$(this).children('.over').stop(true,true).fadeOut();
	});
	
	$('.thumb a').on('click', function(){
		var projectID = $(this).attr('id');
		
		
		if(projectID == 'goldrush'){
			$('#project_title').html(goldrushTitle);
			$('#project_copy').html(goldrushCopy);
			if (width > 960) {
                $("#goldrush").attr("height","462");
            }else if ((width < 960) && (width > 768)){
                $("#goldrush").attr("height","334");
            }else if ((width < 768) && (width > 480)){
                $("#goldrush").attr("height","212");
            }else if (width < 480) {
                $("#goldrush").attr("height","140");
            }
		}else if(projectID == 'wired'){
			$('#project_title').html(wiredTitle);
			$('#project_copy').html(wiredCopy);
		}else if(projectID == 'jd'){
			$('#project_title').html(jdTitle);
			$('#project_copy').html(jdCopy);
		}else if(projectID == 'omega'){
			$('#project_title').html(omegaTitle);
			$('#project_copy').html(omegaCopy);
		}else if(projectID == 'Honda'){
			$('#project_title').html(hondaTitle);
			$('#project_copy').html(hondaCopy);
		}else if(projectID == 'glenmo'){
			$('#project_title').html(glenmoTitle);
			$('#project_copy').html(glenmoCopy);
		}else if(projectID == 'megafon'){
			$('#project_title').html(megafonTitle);
			$('#project_copy').html(megafonCopy);
		}else if(projectID == 'moneygram'){
			$('#project_title').html(moneygramTitle);
			$('#project_copy').html(moneygramCopy);
		}else if(projectID == 'google'){
			$('#project_title').html(googleTitle);
			$('#project_copy').html(googleCopy);
		}else if(projectID == 'drunk'){
			$('#project_title').html(drunkTitle);
			$('#project_copy').html(drunkCopy);
		}else if(projectID == 'sr'){
			$('#project_title').html(srTitle);
			$('#project_copy').html(srCopy);
		}else if(projectID == 'heineken'){
			$('#project_title').html(heinekenTitle);
			$('#project_copy').html(heinekenCopy);
		}
		
		$('#project').slideDown(400);
		$('body, html').animate({scrollTop: '0px'},400);
		
	});
	
	$('#close_project').on('click', function(){
		$('#project').slideUp();
	});
	
	var goldrushTitle = "DISCOVERY CHANNEL GOLD RUSH<br /><span>Flash, PHP/SQL</span>";
	var goldrushCopy = "<iframe id='goldrush' class='featured_image active' src='http://player.vimeo.com/video/41134163?title=0&amp;byline=0&amp;badge=0&amp;api=1' width='100%' height='100' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><p>Aimed at gaining publicity and hype for a new realty TV series based around gold mining, this integrated Digital & Experiential campaign for Discovery Channel gave participants the chance to win $25,000 of Alaskan Gold.</p><p>The public were brought to the site through a series of ads and poster advertising the show. Once registered, they were tasked with completing six games, each themed on a different aspect of the gold mining process, reflecting real scenarios and characters from the show, so as to provide a taste of what was to come. From keeping the camp safe by shooting ferocious grizzly bears, to guiding a bulldozer through treacherous river crossings, the games required simple navigational controls to be deployed at the right time, creating an addictive but fun experience.</p><p>Users had a month from the beginning of the campaign to compete the tasks and be entered into the draw, those that did not complete the tasks and opted in to email marketing were sent personalised reminders a few days before the close encouraging them to 'strike it rich'.</p><p>Once closed, winners were chosen and invited to London for a treasure hunt around the capital, the first team to complete the hunt were rewarded with $25,000 of Alaskan Gold.</p>";
	
	var wiredTitle = "WIRED / SAMSUNG<br /><span>HTML5, CSS3, Javascript, PHP/SQL, InDesign, DPS</span>";
	var wiredCopy = "<img src='img/wired_01.jpg' width='100%' /><img src='img/project_wired_02.jpg' width='100%' /><p>For the launch of the Galaxy Note 10.1, Samsung and WIRED teamed up to create the very first android edition of WIRED Magazine. I was tasked with developing an interactive ad that would showcase the drawing capabilities of the tablet as well as giving users the chance to win a Samsung Galaxy SIII.</p><p>Through the use of HTML5 and CSS3 I created a canvas on which the user would draw their passion. The user could choose from a range of colours and brush sizes in order to create their masterpiece, before being given the option to submit their creation to the competition. The drawing was saved locally to the device whenever the user lifted the stylus meaning their drawing was saved for later, or should the user wish to start again, they could simply clear the canvas.</p><p>On submitting an drawing, if the user was online, the entry was uploaded to a database. If a user tried to enter offline their entry would be saved and pushed to the database next time they took the magazine online.</p><p>Plans are to port this to the iPad in the near future</p><p><a href='http://johnhudson.net/examples/wired/' target='_blank'>Click here</a> to try it out for yourself (best view on a iPad)</p>";
		
	var jdTitle = "JD WLLIAM<br /><span>HTML, CSS, Javascript, PHP, Symfony</span>";
	var jdCopy = "<img src='img/project_jd_01.jpg' width='100%' /><p>For the launch of their Summer Style range JD Williams required a hub that would house their products and display them in an interesting, appealing manner.</p><p>The site is built using Symfony as it's backbone, connecting to an in-house CMS to store content. For the front end, we wanted to deliver a site that ustilised the latest tchniques in order to produces a visually satisfying website across all devices. A few these techniques include the use of viewport with and height in order to dynamically adjust the font sizes accordingly and using a custom built SASS library to mange responsive layouts.</p><p><a href='http://jdwilliams.womanmagazine.co.uk/' target='_blank'>Click here</a> to visit the site</p>";
	
	var omegaTitle = "OMEGA / ESQUIRE<br /><span>HTML, CSS3, Javascript, InDesign, DPS, SQL</span>";
	var omegaCopy = "<img src='img/project_omega_01.jpg' width='100%' /><img src='img/project_omega_02.jpg' width='100%' /><p>For the latest instalment of Esquire's quarterly style guide The 'Big Black Book', OMEGA bought the only interactive advertorial spot in the digital edition. It was my job to produce an engaging, interactive ad, that would make users stop and experience the quality of OMEGA.</p><p>Taking lead from the print designs, the liquid gold background, slowly flows adding a feel of decadence. On load the hands spin and set to the current device time, with the navigation emerging from within the watch.</p><p>The ad includes video, store locator, registration form and download links. As well as the visible elements. I also included hand coded analytics, which track impressions, video plays, and click tracking. Should the user be offline when viewing the ad, analytics are stored locally and sent when the user is next online.</p><p><a href='http://freshads.kodudigital.com/ad-demos/omega/open_version/' target='_blank'>Click here</a> to view the ad (best viewed on iPad)</p>";
	
	var hondaTitle = "HONDA / DAILY MAIL<br /><span>HTML, CSS3, Javascript, InDesign, DPS, SQL</span>";
	var hondaCopy = "<img src='img/project_honda_01.jpg' width='100%' /><p>To advertise the new 2013 Honda Civic I was asked to produce an interactive ad feature that would engage the user and entice them into booking a test drive</p><p>As the theme of the ad was to explore the Civic's features, I decided on using a 3D model of the car that the user could spin 360 degrees. This was done by creating a sequence of images from a rotating model and detecting which should currently be shown by the users current finger position.</p><p>The ad also included a phot gallery to further show the car's inner features to the Mail Plus readers. </p><p><a href='http://freshads.kodudigital.com/ad-demos/honda/' target='_blank'>Click here</a> to view the ad (best viewed on iPad)</p>";
	
	var glenmoTitle = "GLENMORANGIE<br /><span>HTML, CSS, Javascript, PHP/SQL, Drupal</span>";
	var glenmoCopy = "<img src='img/project_glenmo_01.jpg' width='100%' /><img src='img/project_glenmo_03b.jpg' width='100%' /><img src='img/project_glenmo_02.jpg' width='100%' /><p>There are a lot of golf courses around the world, some are better than others, then there are those courses that are unnecessarily well made. Glenmorangie have teamed with four well known golfing experts to find them.</p><p>My task was to create a portal in which users could find out about some of the worlds best golf courses, see who which courses the Glenmorangie Ambassadors prefer and even nominate their own local course. After the entry period closes, the users are then able to vote on their favourite courses, which then get whittled down leaving the worlds greatest 18 courses.</p><p>For the basic back end I implemented a Druapl CMS, but for the more complicated sections, such as the user uploads, voting system and entry moderation mechanic, I hand coded all of the interface to database interactions as the CMS didn't allow as for the level of control as was required.</p><p>The project eventually closed with over five thousand entries.</p>";

	var megafonTitle = "MEGAFON<br /><span>Flash, Actionscript, Photoshop</span>";
	var megafonCopy = "<img src='img/project_megafon_01.jpg' width='100%' /><img src='img/project_megafon_02.jpg' width='100%' /><p>During the London 2012 Olympic Games, 'Sochi Park' was set up in London's Hyde Park as a way to entice visitors to the 2014 winter games in Sochi, Russia. As one of the premium sponsors of the winter games, Megafon wanted to give visitors the chance to experience everything Sochi had to offer, from the snowed filled ski resorts in it's mountains, to the sun drenched beaches at it's coast.</p> <p>To accomplish this, we produced an interactive balloon adventure which gave the player the control of a Megafon branded hot air balloon. The player had to navigate their way through the mountains and over the ranges down to the sunny beach, all the while trying to avoid the adverse weather conditions that would appear randomly. This was done through the use of a touch screen for the player to control the balloon. The touchscreen was linked to an 80 inch screen for others to see the action, and to also entice them to have a try.</p><p>The game was deemed a success after the event, with hundreds of visitors signing up for interest in visiting Sochi for the 2014 Winter Olympics as well as the President of the Olympic Committee Jacques Rogge also trying out the game on his visit.</p>"

	var googleTitle = "GOOGLE ADWORDS<br /><span>HTML, CSS3, Javascript, Closure</span>";
	var googleCopy = "<img src='img/project_google_01.jpg' width='100%' /><img src='img/project_google_02.jpg' width='100%' /><p>Every day Google returns 1 billion search results, which means getting to the top of the results can be a tricky task. Adwords is Google's advertising platform aimed at businesses that want to be at the top of those results.</p><p>With a revenue of over $40 billion dollars a year, Adwords is clearly working, but Google were finding that they were still losing a lot of customers part way through the sign up process. My job was to develop and test a new user interface for their Adwords platform that converted those lost clicks into revenue. Through a lot of A-B testing and incremental changes to significant elements, it was found that the majority of lost conversion were from mobile user. With this information in hand, the process of buying Adwords on mobile was revamped to be simple and intuitive to use. Initially, the redesign was rolled out to the EMEA markets, but after positive results, it is currently being rolled out to further markets across the globe.</p>";

	var drunkTitle = "OTHER WORDS FOR BEING DRUNK<br /><span>HTML, CSS3, Javascript, JSON</span>";
	var drunkCopy = "<img src='img/project_drunk_01.jpg' width='100%' /><p>Inspired by a Michael McIntyre sketch, based on the assumption that middle class people can use any word for describing how drunk they are, this site started out as nothing more than an amusing side project.</p><p>After launch the site was sent to a few friends for their amusement, but soon caught hold of public attention. Amassing over forty thousand views in its first week, the site made numerous appearances of web design showcase pages such as OnePageLove.com and HTMLinspiration.com.</p><p>Now, a month after launch the fanfare is still reasonably high with over one thousand hits a day as well as daily twitter mentions.</p><p><a href='http://www.otherwordsforbeingdrunk.com' target='_blank'>Click here</a> to view the site</p>";

	var srTitle = "STEPHANIE ROBYN<br /><span>HTML, CSS3, Javascript, Wordpress, Illustrator</span>";
	var srCopy = "<img src='img/project_sr_01.jpg' width='100%' /><p>When my wife decided to open her own business the first thing I thought was 'Cool, I get to make her a custom website'. Had I thought about it a little more I should have relasied this would have been one of the hardest jobs I have ever worked on.</p><p>With just a few inital scamps to go on I started on the design of the logo. The only restrictions I had were that it had to include a robin and it had to be fat (so it looked like it had eaten a lot of cake). After several rounds of amends and font changes as well as a few days hunkered down in Illustrator I came up with the logo that is currently in use across the website and all marketing materials.</p><p>For the wesbite we decided on wordpress, frst and foremost becuase it gives Stephanie a high level of control and independance over the site, but it also meant a lot less work to get the site up and running, which was key with tme being a large factor in this build. The design of the site came together quite quickly as the content was all pre-written so dicated a lot of the layout. </p><p>Finally came the photogrpahy, what we belived was one of the most important parts of the site, and again, I took on this role myself. We tried to keep a theme running throughout all of he photogrpahs, shooting as many products as we could on a wodden surface to give the site a rustic feel. Having been up and running for around 3 months we have received very positive feedback as well as receiving several orders on the back of publisising the site.</p><p><a href='stephanierobyn.com/' target='_blank'>Click here</a> to view the site</p>";

	var heinekenTitle = "HEINEKEN<br /><span>HTML, CSS3, Javascript, Facebook</span>";
	var heinekenCopy = "<img src='img/project_heineken_01.jpg' width='100%' /><img src='img/project_heineken_02.jpg' width='100%' /><p>This Facebook fan page was created with the sole purpose of treating the loyal fans. The page tab gave fans four opportunities to win Heineken prizes ranging from free beers in the Henieken fan bar to a full transformation of your living room into a Personalised Fan bar for the Champions League Final. </p><p><a href='https://apps.facebook.com/startreatment/' target='_blank'>Click here</a> to view the Facebook App</p>";


	
				

	
});