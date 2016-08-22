---
layout: post
title:  "Samsung Upgrade Program"
date:   2016-07-31 19:18:20
image: https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/sup-thumbnail.png
desc: Samsung Upgrade Program is a static landing page that is written in HTML and SCSS.
categories: [code, work]
---

<div class="project-description">
	<h2>Samsung Upgrade Program</h2>
	<div class="desc">
		<span><strong>Date:</strong> July 2016</span>
		<span><strong>Client:</strong> Samsung</span>
		<span><strong><a href="http://www.samsung.com/us/explore/samsung-upgrade-program/" target="_blank">Currently Live</a></strong></span>
	</div>
	<div class="desc">
		<span><strong>Tools Used:</strong></span>
		<ul>
			<li>JavaScript/jQuery</li>
			<li>Bootstrap (Collapse.js)</li>
			<li>Handlebars.js</li>
			<li>SCSS</li>
			<li>Gulp</li>
		</ul>
	</div>
</div>



<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/samsung-upgrade-program.png" alt="Samsung Upgrade Program Default Image" />
</div>

<p>Samsung Upgrade Program is a static landing page that is written in HTML and SCSS. It has bootstrap's <a href="http://v4-alpha.getbootstrap.com/components/collapse/" target="_blank">Collapse</a> functionality for FAQs module. It wasn't difficult to build. Its difficulty came in when the client asked us to remove tagging in expanded state in FAQs module.</p> 

<p>Its function would be</p>
	{% highlight javascript %}
	if ( a state is expanded ) {
		remove tagging
	} else {
		add the tagging back
	}
	{% endhighlight %}
<p>This is a simple task - but I kept getting a conflict with bootstrap's code. I thought of removing bootstrap javascript code and start building my own collapse javascript from scratch. But given its deadline, I kept the bootstrap and tested each functionality of Bootstrap's collapse.js instead to get the result the client wanted.</p>

<p>I made a mistake of calling my custom function <strong>getAttribute</strong> before</p>
	{% highlight javascript %}
	Plugin.call($target, option)
	{% endhighlight %} 
<p>which resulted in returning a wrong value for 'aria-expanded'. Once, I moved my custom function after Plugin.call, everything worked out great.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/faq.gif" alt="Samsung Upgrade Program FAQ" />
	<script src="https://gist.github.com/jeesunikim/ae58ec1186173236ad8c4d8a99f62ac6.js"></script>
</div>

<p>I used to think that Bootstrap was a hindrance to learning because it makes everything so easy and stayed away from using it. But going through its code line by line, I appreciated its structure and learned how to use OOP better.</p>