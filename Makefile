cjs-build-tag:
	echo 'create tag cjs'
	docker build --pull --rm -f "Dockerfile.buildtest.cjs" -t boardgamegeekjsclient:cjs "."
cjs-build-run: cjs-build-tag
	docker run boardgamegeekjsclient:cjs
esm-build-tag:
	echo 'create tag esm'
	docker build --pull --rm -f "Dockerfile.buildtest.esm" -t boardgamegeekjsclient:esm "."
esm-build-run: esm-build-tag
	docker run boardgamegeekjsclient:esm
react-build-tag:
	echo 'create tag react'
	docker build --pull --rm -f "Dockerfile.buildtest.react" -t boardgamegeekjsclient:react "."
react-build-run: react-build-tag
	# docker run -it --user root -p 3000:3000 boardgamegeekjsclient:react sh
	docker run -p 3000:3000 boardgamegeekjsclient:react
build-run-all: cjs-build-run esm-build-run react-build-run