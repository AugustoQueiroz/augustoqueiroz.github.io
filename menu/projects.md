---
layout: page
title: My Projects
---

{% for project in site.projects %}
<h3><a href="{{ project.link }}">{{ project.title }}</a></h3>
{{ project.content }}
{% endfor %}