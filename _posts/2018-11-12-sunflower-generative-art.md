---
layout: post
title: "Drawing a Sunflower with Code"
date: 2018-11-12 22:00:00
image: https://storage.googleapis.com/codeandfood/lab/generative_sunflower/generative_sunflower_thumbnail.jpg
desc: Drawing a sunflower using Phyllotaxis and Supershapes formula in Processing.
categories: [code, lab]
---

<div class="project-description">
	<h2>Drawing a Sunflower with Code</h2>
	<div class="desc">
		<span><strong>Date:</strong> November 2018</span>
		<span><strong>Type:</strong> Side Project</span>
		<span><strong>Role/Team:</strong> Lead Developer</span>
		<span><strong>Code Source:</strong> Code Snippets Below</span>
	</div>
	<div class="desc">
		<span><strong>Tool(s) Used:</strong></span>
		<ul>
			<li>Processing</li>
		</ul>
	</div>
</div>

<div class="project-image color--dark">
	<img class="is--no-border" src="https://storage.googleapis.com/codeandfood/lab/generative_sunflower/generative_sunflower.jpg" alt="Sunflower Generative Art" />
</div>

<p>The first time I encountered Generative Art was through Daniel Eden's blog post on <a href="https://daneden.me/2016/11/02/drawing-with-numbers/" target="_blank">Drawing with Numbers</a>. I used to be an avid drawer as a child and seeing that you can create visually interesting pieces with numbers, algorithms, and randomness was fascinating to me. You can see more of his generative art pieces <a href="https://art.daneden.me/" target="_blank">here</a>. In his post, you will see that each piece has an instruction that he followed to generate a piece. In Matt Deslauriers' video on <a href="https://frontendmasters.com/workshops/canvas-webgl/" target="_blank">Canvas WebGL</a> from Frontend Masters, he mentions the conceptual artist, Sol LeWitt, and its relevance to Generative Art. What Sol LeWitt did was to provide an instruction and let other people to draw it. His instructions are very much like code and they never reached the exact precision to allow some randomness to it so that it would be unique.</p>

<p>I followed Dan's advice from his blog post to use Processing instead of JavaScript since Processing is faster and I wanted to write code in a new syntax &ndash; in this case, Java syntax. I later appreciated Java's strict rule &ndash; for example, 1. How its array is a fixed size &ndash; which means I cannot just randomly increase my array later in my code, 2. Unlike JavaScript, its constructor must match its class name, 3. When passing an argument or declaring a variable, you also have to pass its data type next to it.</p>

<p>I was inspired to create this after watching many video tutorials of Daniel Shiffman (another Daniel in the same post?!) on <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw" target="_blank">The Coding Train</a>. I have always admired Creative Coders' ability to create something so visually exciting by using math and physics. It was intimidating at first to implement or recall all the math related subjects (especially, the trignometry). But with Daniel Shiffman's video tutorials, it has been a fun journey 🤗. So thank you, Daniel!</p>

<p>Let's dive into the process of creating a sunflower 🌻</p>

<h3>1. Creating an Individual Sunflower Seed</h3>
<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/lab/generative_sunflower/sunflowers_seeds_example.jpg" alt="sunflower example" />
	<img src="https://storage.googleapis.com/codeandfood/lab/generative_sunflower/step01_sunflower_seeds.jpg" alt="step01_sunflower_seeds" />
</div>

<p>As you can see in the picture of a sunflower head, not all seeds have the same shape. I simplified and grouped them into 3. The core inner part has the triangular shape seeds that are pointing towards the center (I made it less pointy in the code because I liked the look of it better), its surrounding inner area has a rounded square shape, and its border seeds have starfish shapes. In order to mimic these variety of shapes with just numbers, I used <a href="http://paulbourke.net/geometry/supershape/" target="_blank">Supershapes Formula</a> by Paul Bourke. Given certain input number value, this formula can mimic natural forms. If you would like to know more about 2D Supershapes, the link to the video tutorial by Daniel Shiffman is <a href="https://www.youtube.com/watch?v=ksRoh-10lak" target="_blank">here</a>.</p>

<div class="project-image">
	<code data-type="gist" gist="https://gist.github.com/jeesunikim/d2227ce4d314c9fd18f22b775610a10c.json"></code>
	<div class="gist-preview"></div>
	<span>Code Snippet not loading? Click <a href="https://gist.github.com/jeesunikim/d2227ce4d314c9fd18f22b775610a10c" target="_blank">here</a> to see the code</span>
</div>

<p>In the constructor, there are 4 variables &ndash; <i>n1, n2, n3, m</i>. This is where we assign real numbers to determine the shape of the seed. <i>toUpdateShape()</i> is where we call <i>supershape()</i> to determine its shape and its position of the seed to mimic the Sunflower's spiral pattern. This is the blue print for each individual seed for its Particle System to define and use later. </p>

<h3>2. Creating Sunflower Seeds Particle System</h3>

<p>As I mentioned earlier, array is fixed in Java so I set the maximum size <i>2800</i> when creating the array. <i>toCreateInnerHead()</i> is where I am storing a new instance of the <i>SunflowerSeed</i> class as each array's value &ndash; a total of 2800 seeds. We are passing number values as parameters to create the shape that we want. Its core inner seeds are using asymmetric forms with a value of <strong>n1 = 60, n2 = 55, n3 = 30, and m = 1</strong>. Its surrounding inner area is using a value of <strong>n1 = n2 = n3 = 1 and m = 2</strong> to add rotational symmetry to the shape. Its border seeds are using values that create starfish shapes <strong>n1 = 0.1, n2 = 1.7, n3 = 1.7, and m = 5</strong>. You can see more shapes using different numbers in Paul Bourke's article that I mentioned previously.</p>

<div class="project-image">
	<code data-type="gist" gist="https://gist.github.com/jeesunikim/493827756bbc78308a5a97fd2b348eb5.json"></code>
	<div class="gist-preview"></div>
	<span>Snippet not loading? Click <a href="https://gist.github.com/jeesunikim/493827756bbc78308a5a97fd2b348eb5" target="_blank">here</a> to see the code</span>
</div>

<p><i>toCreateOuterHead()</i> is used to create the Sunflower's spiral pattern. <i>radians(137.5)</i> is the magic number. This formula is the planar model that can be found in this <a href="http://algorithmicbotany.org/papers/abop/abop-ch4.pdf" target="_blank">document</a> on page 2 to create Phyllotaxis. More in-depth tutorial on Phyllotaxis can be found <a href="https://www.youtube.com/watch?v=KWoJgHFYWxY" target="_blank">here</a> by Daniel Shiffman.</p>

<p class="is--centered"><i><strong>angle = n ∗ 137.5, r = c√n</strong></i></p>

<p><i>n</i> is the number of dots and <i>c</i> contributes to a scaling factor. If you change <i>c</i> from 11 to 1, you will see that our seeds get extremely small. Since this formula gives an angle and radius, we can convert it to x and y by using Polar Coordinates (r,θ) to Cartesian Coordinates (x,y) transformation <i><strong>x = r * cos(angle); y = r * sin(angle)</strong></i>.</p>

<h3>3. Creating Sunflower Petals</h3>
<div class="project-image">
	<code data-type="gist" gist="https://gist.github.com/jeesunikim/c8b5ddb3cee02ce54603fab171403ba5.json"></code>
	<div class="gist-preview"></div>
	<span>Snippet not loading? Click <a href="https://gist.github.com/jeesunikim/c8b5ddb3cee02ce54603fab171403ba5" target="_blank">here</a> to see the code</span>
</div>

<p>class <i>SunflowerPetals</i> is the blue print of our petals. Later in our <i>setup()</i>, we are going to pass the sunflower head's magnitude (length) into our newly created SunflowerPetals instance to position the petals correctly around its sunflower head. In between <i>beginShape()</i> and <i>endShape()</i>, we can set any number of arbitrary vertices. You can set vertex or any kind of vertex over and over again. In <i>createPetals()</i>, we are calling <i>drawPetal()</i> to draw around the circle. We are converting from Polar Coordinates (r,θ) to Cartesian Coordinates (x,y) to draw vertices around the circle. Curves require additional points that control the entry and exit of the curve. We have <i>vertex(0, 0)</i> in the beginning because all shapes created with beginShape() must start with a <i>vertex()</i> to define the starting point of the shape.</p>

<p>Having only one <i>bezierVertex()</i> can be enough as petals but I used two to give more volume to it. <i>noise()</i> returns the Perlin noise value, which is a random sequence generator that is more natural than the standard <i>random()</i> function. This creates the look of threads around the petals. I encourage you to play with <i>bezierVertex()</i> with random number values. I got some crazy looking shapes during my experiments. For example, the below <i>bezierVertex()</i> creates crazy circular + sunflower petals shape.</p>

<p class="is--centered"><i><strong>bezierVertex(50, -60 * noise(frameCount + 3), 100, -30 * noise(frameCount + 1), +150  * noise(frameCount + 1), -50);</strong></i><br/>
<i><strong>bezierVertex(100, 30 * noise(frameCount + 3), 50, 30 * noise(frameCount + 1), 0, 0);</strong></i></p>
<h3>4. Its Setup</h3>
<div class="project-image">
	<code data-type="gist" gist="https://gist.github.com/jeesunikim/874286fad0d03032eede55439861eb73.json"></code>
	<div class="gist-preview"></div>
	<span>Snippet not loading? Click <a href="https://gist.github.com/jeesunikim/874286fad0d03032eede55439861eb73" target="_blank">here</a> to see the code</span>
</div>
<p>This is where we declare <i>SunflowerSeeds</i> and <i>Petals</i> variables and assign them a new instance of the classes that we have created &ndash; <i>SunflowerSeedsSystem</i> and <i>SunflowerPetals</i>. It's important that we call <i>Petals()</i> after <i>SunflowerSeeds()</i> to pass in the correct Seeds (or Sunflower Head) magnitutde.</p>

<div class="project-image color--dark">
	<iframe class="is--no-border is--narrow-height" src="https://player.vimeo.com/video/300428339" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
