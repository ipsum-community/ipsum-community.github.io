---
  title: dump_json
---
{% assign key = page.name | replace: '.json', '' %}
{% assign ipsum = site.ipsum | where: 'key', key %}{% assign ipsum = ipsum[0] %}{
  "title": "{{ ipsum.title }}",
  "key": "{{ ipsum.key }}",
  "description": "{{ ipsum.description }}",
  "site": "{{ ipsum.site }}",
  "author": "{{ ipsum.author }}",
  "collaborative": "{{ ipsum.collaborative }}",
  "language": {{ ipsum.language | jsonify }}
}