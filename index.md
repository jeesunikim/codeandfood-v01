---
layout: default
title: Code && Food
---
<ul class="unl post-list">
{% for post in site.posts %}
  {% if post.hidden != true %}
  <li class="post-list__item ml">
    <a href="{{ post.url }}">
      <span class="b m0">{{ post.title }}</span>
      <span class="meta h4 b">{{ post.date | date: "%A %-d %B %Y" }}</span>
      {{ post.excerpt }}
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>
