---
layout: page
title: Blog Archive
---
<ul class="posts">
{% if site.posts %}
  {% for post in site.posts %}

    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3>{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}

    <li itemscope>
      <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
      <p class="post-date"><span><i class="fa fa-calendar" aria-hidden="true"></i> {{ post.date | date: "%B %-d" }} - <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}</span></p>
    </li>

  {% endfor %}
{% else %}
  <div style="text-align: center">    
    <h1>Hey there! Thanks for checking in. There are no posts yet, but look at this cute dog.</h1>
    
    <img src="{{site.github.link}}/images/dog.png" />
    
    <p>Also, you can go ahead and check out my <a href="{{site.github.url}}/menu/cv">CV</a> if you're interested. Or if you just want to know more about me, the <a href="{{site.github.url}}/menu/about">about me</a> section is also ready.</p>
  </div>
{% endif %}
</ul>
