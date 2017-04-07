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
{% for ed in education %}
<u>{{ ed.title }}</u> {{ ed.complement }}
{{ ed.content }}
{% endfor %}
<br>

<h3>Experience</h3>

{% assign experience = site.CV_items | where: "category", "experience" | sort: "duration" %}
{% for ex in education %}
<u>{{ ex.title }}</u> {{ ex.duration }}
{{ ex.content }}
{% endfor %}
<br>

<h3>Skills</h3>

<ul>
    <li>C/C++</li>
    <li>Python</li>
    <li>HTML5</li>
    <li>English (Fluent)</li>
    <li>Portuguese</li>
    <li>French (Intermediate)</li>
</ul>

<h3>Other</h3>