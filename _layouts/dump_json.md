---
  title: dump_json
---
{% assign key = page.name | replace: '.json', '' %}
{% assign ipsum = site.ipsum | where: 'key', key %}{% assign ipsum = ipsum[0] %}{
  "title": "{{ ipsum.title }}",
  "description": "{{ ipsum.description }}",
  "author": "{{ ipsum.author }}",
  "titleColor": "{{ ipsum.titleColor }}",
  "descColor": "{{ ipsum.descColor }}",
  "genBtnTextColor": "{{ ipsum.genBtnTextColor }}",
  "genBtnBgColor": "{{ ipsum.genBtnBgColor }}",
  "genBtnText": "{{ ipsum.genBtnText }}",
  "labelTextColor": "{{ ipsum.labelTextColor }}",
  "labelBgColor": "{{ ipsum.labelBgColor }}",
  "labelBorderColor": "{{ ipsum.labelBorderColor }}",
  "text": {{ ipsum.text | jsonify }}
}