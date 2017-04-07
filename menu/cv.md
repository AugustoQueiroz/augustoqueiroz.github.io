---
layout: page
title: Augusto Sales de Queiroz
---

<address>
    Phone: +55 (81) 98187-7707<br>
    email: <a href="mailto:asq@cin.ufpe.br">asq@cin.ufpe.br</a>
</address>

<br>
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

<br>
<h3>Other</h3>
During the 2013-2014 academic year, I went on Rotary's Youth Exchange to the United States of America, spending one year of High School in Burlington, IA. During that year I played JV Basketball, Varsity Tennis, and performed in the school's production of <i>The Lion, the Witch, and the Wardrobe</i>, playing the role of Maugrim, the Wolf. I started playing JV Baseball, but stopped in order to take a trip around the country before coming back to Brazil. I also worked as a helper for the IT department of the school, mostly helping students fix minor problems with their school tablets, the Kunos.<br>
I play the guitar and the ukulele, and enjoy doing so particularly with friends.