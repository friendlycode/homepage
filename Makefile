URL := "friendlycode.org"

.PHONY: all
all: build

.PHONY: ci
ci: build

# INSTALL ######################################################################

VENDOR_DIR := vendor
INSTALLED_FLAG := $(VENDOR_DIR)/.installed

.PHONY: install
install: $(INSTALLED_FLAG)
$(INSTALLED_FLAG): Gemfile Gemfile.lock Makefile
	bundle install --path vendor
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

.PHONY: update
update: install
	bundle update
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

# BUILD ########################################################################

.PHONY: build
build: install
	bundle exec jekyll build --quiet
	echo ${URL} > _site/CNAME
	# TODO: enable this after fixing links
	# bundle exec htmlproof ./_site

# RUN ##########################################################################

.PHONY: run
run: install
	bundle exec jekyll serve --baseurl ""

.PHONY: launch
launch: install
	eval "sleep 5; open http://localhost:4000" & make run

# CLEAN ########################################################################

.PHONY: clean
clean:
	rm -rf .bundle $(VENDOR_DIR)
	rm -rf _site
