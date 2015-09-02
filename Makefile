URL := "friendlycode.org"

.PHONY: all
all: build

.PHONY: ci
ci: build

# INSTALL ######################################################################

.PHONY: depends
depends: Gemfile.lock
Gemfile.lock: Gemfile
	bundle install --path vendor
	@ touch Gemfile.lock

# BUILD ########################################################################

.PHONY: build
build: depends
	bundle exec jekyll build --quiet
	echo ${URL} > _site/CNAME
	# TODO: enable this after fixing links
	# bundle exec htmlproof ./_site

# RUN ##########################################################################

.PHONY: run
run: depends
	bundle exec jekyll serve --baseurl ""

.PHONY: launch
launch: depends
	eval "sleep 5; open http://localhost:4000" & make run
