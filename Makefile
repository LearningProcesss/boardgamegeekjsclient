# SHELL:=/bin/bash
packageversion = $(shell cat package.json | jq -r '.version')

.EXPORT_ALL_VARIABLES:
docker_image_cjs=$(shell docker images -q boardgamegeekjsclient:cjs)
docker_image_esm=$(shell docker images -q boardgamegeekjsclient:esm)
docker_image_react=$(shell docker images -q boardgamegeekjsclient:react)

check:
	@echo $(docker_image_cjs)
	@echo $(packageversion)
    ifneq ($(strip $(docker_image_cjs)),)
	@echo 'image target exists. to delete'
	docker rm (docker ps -a -q --filter ancestor=$(docker_image_cjs))
    else
	@echo 'image target not exists. to create'
    endif
cjs-build-tag:
	@echo 'create tag cjs -> package version build test: $(packageversion)'
	docker build --pull --rm -f "Dockerfile.buildtest.cjs" -t boardgamegeekjsclient:cjs --build-arg VERSION=$(packageversion) "."
cjs-run:
	docker run boardgamegeekjsclient:cjs
cjs-build-run: cjs-build-tag
	docker run boardgamegeekjsclient:cjs
esm-build-tag:
	@echo 'create tag esm -> package version build test: $(packageversion)'
	docker build --pull --rm -f "Dockerfile.buildtest.esm" -t boardgamegeekjsclient:esm --build-arg VERSION=$(packageversion) "."
esm-build-run: esm-build-tag
	docker run boardgamegeekjsclient:esm
react-build-tag:
	@echo 'create tag react -> package version build test: $(packageversion)'
	docker build --pull --rm -f "Dockerfile.buildtest.react" -t boardgamegeekjsclient:react --build-arg VERSION=$(packageversion) "."
react-build-run: react-build-tag
	docker run -p 3000:3000 boardgamegeekjsclient:react
build-run-all: cjs-build-run esm-build-run react-build-run