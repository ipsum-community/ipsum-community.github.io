---
  title: dump_json
---
{% assign ipsum = site.ipsum | where: 'key', page.key %}{% assign ipsum = ipsum[0] %}{
  "title": "{{ ipsum.title }}",
  "id": "{{ ipsum.id }}",
  "key": "{{ ipsum.key }}",
  "description": "{{ ipsum.description }}",
  "site": "{{ ipsum.site }}",
  "author": "{{ ipsum.author }}",
  "collaborative": "{{ ipsum.collaborative }}",
  "language": {{ ipsum.language | jsonify }}
}