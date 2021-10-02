# Makefile
# https://guides.hexlet.io/makefile-as-task-runner
# https://www.youtube.com/watch?v=pK9mF5aK05Q
# https://ru.makefile.site/
# sudo npm link --force
install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
