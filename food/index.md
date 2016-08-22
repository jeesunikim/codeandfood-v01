---
layout: default
title: food
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.category == 'food' %}
  <li class="post {{post.category}}">
    <a href="{{ post.url }}">
	  	<img src="{{post.image}}" />
	  </a>
  </li>
  {% endif %}
  {% else %}
  <h2>Busy cooking..</h2>
{% endfor %}
</ul>