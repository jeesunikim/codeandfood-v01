---
layout: default
title: Code && Food
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.hidden != true %}
  <li data-post="scroll-in-view" class="post {{post.categories}}">
  	{% if post.categories contains 'food' %}
  	<a href="{{ post.url }}">
	  	<img src="{{post.image}}" />
	  </a>
		{% else %}
    <a href="{{ post.url }}">
      <span>{{ post.title }}</span>
      <!-- <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span> -->
      {{ post.excerpt }}
    </a>
    {% endif %}
  </li>
  {% endif %}
{% endfor %}
</ul>
