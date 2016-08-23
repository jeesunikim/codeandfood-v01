---
layout: post
title:  "Barbarian Seating Chart"
date:   2016-02-26 19:18:20
image: https://storage.googleapis.com/codeandfood/work/tbg/superdesk-thumbnail.png
desc: Created a seating chart for the Superdesk at the Barbarian Group built on MEAN stack
categories: [code, work]
---

<div class="project-description">
	<h2>Barbarian Seating Chart</h2>
	<div class="desc">
		<span><strong>Date:</strong> February 2016</span>
		<span><strong>Type:</strong> Personal Project</span>
		<span><strong>Code Source:</strong> <a href="https://github.com/jeesunikim/superdesk" target="_blank">Github</a></span>
	</div>
	<div class="desc">
		<span><strong>Tools Used:</strong></span>
		<ul>
			<li>MongoDB</li>
			<li>Express</li>
			<li>AngularJS</li>
			<li>Node</li>
			<li>Gulp</li>
		</ul>
	</div>
</div>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/superdesk.png" alt="The Barbarian Group Default Image" />
</div>

<p>I built a seating chart for the Barbarian Group using MEAN stack as an independent project at Fullstack. However, the majority of the functionality and refactoring were done after I left Fullstack.</p>

<p>Whenever I was asked the question "what app do you want to build?", I couldn't answer to it right away because nowadays there is an app for everything. When I thought of one, there was a 99% chance that someone else had already built it.</p>

<p>BUT - no one has built a seating chart app for the Barbarian Group.</p>

<p>The Barbarian Group's <a href="http://www.architectmagazine.com/technology/detail/innovative-detail-the-superdesk-at-the-barbarian-group-office_o" target="_blank">Superdesk</a> is pretty famous in the agency and architecture world for its design andconcept.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/desk-01.png" alt="TBG Desk News #1" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/desk-03.png" alt="TBG Desk News #2" />
</div>

<p>The problem is that it can get confusing for new Barbarians when it comes to finding conference rooms, departments, or even people.</p>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/new-people.jpg" alt="new people and their seating map" />
	<p>(This picture isn't a setup. <u>It's real</u>)</p>
</div>

<p>
	This project is where I learned the most about MEAN stack. I had neither the best backend student nor the best angular student in the class - both frontend and backend part of this project was all on me. The goal during that time was to finish the project, which means often students forgot to implement the best practice. Followings are the refactoring that I implemented after I graduated.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/http-01.png" alt="http request wrong way" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/http-02.png" alt="http request correct way" />
</div>

<p>The code on the left is the code I wrote as a student. I put pretty much everything in controller. My controllers at that time was a big giant code without much of modularity. I didn't use service at all because it worked fine putting them in controller instead of service. But as I read more about angular pattern, I learned that any shared requests that will be used throught out the app need to be put in service, in this case, $http requests.</p>

<p>Another problem was the frequent use of $rootScope.</p>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/avoid-rootscope-01.png" alt="avoid rootscope #1" />
</div>

<p>$rootScope is like using '!important' in CSS. It just overwrites everything. This may be okay if it's being used once or twice - but in this project, I used it way too frequently throughout my code as you can see from the code above.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/factory-service.png" alt="factory service" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/avoid-rootscope-02.png" alt="avoid rootscope #2" />
</div>

<p>The correct way to do is, again, put all the shared functionalities in service. That way later when we need to debug the code, we know where to go.</p>

<p>The following codes are adding SVG dots into HTML and save its x &amp; y coordination and radius into the backend (Mongo), and list all of the dots in HTML via ng-repeat</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/add-dot-01.png" alt="add dot #1" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/add-dot-02.png" alt="add dot #2" />
</div>

<p>To protect the Barbarians' privacy, I reduced the number of the Barbarians and renamed them with the characters of Mad Men. I am working on deploying this app via google cloud platform. Meanwhile, enjoy the video below and if you see me in person with my laptop, I would love to show it to you in person.</p>

<div class="project-image">
	<iframe src="https://player.vimeo.com/video/179829826" width="640" height="522" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>