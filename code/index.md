---
layout: default
title: code
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.categories contains 'code' %}
  <li data-post="scroll-in-view" class="post">
    <a href="{{ post.url }}">
      <span class="b m0">{{ post.title }}</span>
      <!-- <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span> -->
      {{ post.excerpt }}
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>