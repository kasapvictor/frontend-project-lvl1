# Makefile
# https://guides.hexlet.io/makefile-as-task-runner
# https://www.youtube.com/watch?v=pK9mF5aK05Q
# https://ru.makefile.site/
# sudo npm link --force
install: # установка
	npm ci

publish: # публикация пакета, может потребоваться дополнительная команда sudo npm link --force
	npm publish --dry-run

lint: # проверка стиля кода
	npx eslint .

lint-fix: # проверка стиля кода + исправление
	npx eslint . --fix

brain-games: # вызов приложения
	node bin/brain-games.js
