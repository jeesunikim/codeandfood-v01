---
layout: default
title: Code && Food
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.hidden != true %}
  <li class="post {{post.categories}}">
		
    <a href="{{ post.url }}">
      <span class="post-image" style="background-image: url('{{ post.image }}'); background-position-y:50%;"></span>
    </a>
    {% if post.categories contains 'food' %}
    <div class="post-desc">
    {% else %}
    <div class="post-desc">
    {% endif %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.desc }}</p>
    </div>
    
  </li>
  {% endif %}
{% endfor %}
</ul>