# Makefile
# https://guides.hexlet.io/makefile-as-task-runner
# https://www.youtube.com/watch?v=pK9mF5aK05Q
# https://ru.makefile.site/

install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
