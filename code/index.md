---
layout: default
title: code
---
<ul class="posts">
{% for post in site.posts %}
	{% if post.hidden != true %}
	  {% if post.categories contains 'code' %}
	  <li class="post {{post.categories}}">
	    <a href="{{ post.url }}">
	      <span>{{ post.title }}</span>
	      <!-- <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span> -->
	      <!-- {{ post.excerpt }} -->
	    </a>
	  </li>
	  {% endif %}
	{% endif %}
{% endfor %}
</ul>