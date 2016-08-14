---
layout: default
title: work
---
<ul class="posts">
{% for post in site.posts %}
  	{% if post.categories contains 'work' %}
  <li data-post="scroll-in-view" class="post {{post.categories}}">
    <a href="{{ post.url }}">
      <span>{{ post.title }}</span>
      <!-- <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span> -->
      {{ post.excerpt }}
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>