---
layout: default
title: armlessJohn404
description: Test page
---
{% for item in site.posts %}
  <article class="blog-post">
    <h1 class="post-title"> {{ item.title }}</h1>
    <h3 class="post-title"> {{ item.date }} </h3>
    {{ item }}
  </article>
{% endfor %}
