#!/usr/bin/env python3

from jinja2 import Template
import glob

template = None
with open('template.html', 'r') as f:
	data = f.read()
	template = Template(data)
images = glob.glob('images/he/????????_??????.jpg')
loImages = list(map(lambda path: path.split(".")[0], images))

print(template.render(loImages=loImages));
