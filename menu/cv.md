---
layout: page
title: Augusto Sales de Queiroz
---

<address>
    Phone: +55 (81) 98187-7707<br>
    email: <a href="mailto:asq@cin.ufpe.br">asq@cin.ufpe.br</a>
</address>

<h3>Education</h3>
{% for ed in site.education | sort: "listing-priority" %}
<u>{{ ed.title }}</u> &mdash; {{ ed.complement }}
{{ ed.content }}
{% endfor %}
<br>

<h3>Experience</h3>
{% for ex in site.experience | sort: "duration" %}
<u>{{ ex.title }}</u> &mdash; {{ ex.duration }}
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