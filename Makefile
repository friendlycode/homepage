.PHONY: all
all: build

.PHONY: run
run: depends
	bundle exec jekyll serve

.PHONY: ci
ci: build


.PHONY: build
build: depends
	bundle exec jekyll build
	# TODO: enable this after fixing links
	# bundle exec htmlproof ./_site

.PHONY: depends
depends: vendor
vendor/*: Gemfile*
	bundle install --path vendor
	@ touch vendor/*
