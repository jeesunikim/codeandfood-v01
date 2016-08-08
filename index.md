---
layout: default
title: Code && Food
---
<ul class="posts">
{% for post in site.posts %}
  {% if post.hidden != true %}
  <li class="post {{ post.category }}">	
    <a href="{{ post.url }}">
      <span class="b m0">{{ post.title }}</span>
      <!-- <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span> -->
      {{ post.excerpt }}
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>
