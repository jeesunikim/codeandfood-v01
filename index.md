---
layout: default
title: Code && Food
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.hidden != true %}
  <li class="post {{post.categories}}">
  	{% if post.categories contains 'food' %}
  	<a href="{{ post.url }}">
	  	<img src="{{post.image}}" />
	  </a>
		{% else %}
    <a href="{{ post.url }}">
      <span class="post-image" style="background-image: url('{{ post.image }}')"></span>
    </a>
    <div class="post-desc">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.desc }}</p>
    </div>
    {% endif %}
  </li>
  {% endif %}
{% endfor %}
</ul>