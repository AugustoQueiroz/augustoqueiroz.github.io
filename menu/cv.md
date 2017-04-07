---
layout: page
title: Augusto Sales de Queiroz
---

<address>
    Phone: +55 (81) 98187-7707
    email: <a href="mailto:asq@cin.ufpe.br">asq@cin.ufpe.br</a>
</address>

<h3>Education</h3>

{% assign education = site.CV_items | where: "category", "education" | sort: "listing-priority" %}
{% for item in education %}
<u>{{ item.title }}</u> {{ item.complement }}<br>
{{ item.content }}
{% endfor %}
<br>