# FROM node:16-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS packer
# WORKDIR /usr/src/boardgamegeekclient-packfase
# COPY . .
# RUN yarn pack 

# FROM node:16-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS commmonjstester
# ARG VERSION
# RUN echo "received: ${VERSION}"
# WORKDIR /usr/src/boardgamegeekclient-test
# COPY --from=packer /usr/src/boardgamegeekclient-packfase/boardgamegeekclient-v${VERSION}.tgz .
# COPY --from=packer /usr/src/boardgamegeekclient-packfase/buildtest/cjs/ .
# ENV NODE_ENV production
# RUN yarn add file:/usr/src/boardgamegeekclient-test/boardgamegeekclient-v${VERSION}.tgz
# RUN adduser -D apprunneruser 
# USER apprunneruser
# CMD [ "yarn", "start" ]

FROM node:16-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS packer
WORKDIR /usr/src/boardgamegeekclient-packfase
COPY . .
RUN yarn pack

FROM node:16-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS compiler
WORKDIR /usr/src/boardgamegeekclient-compilerfase
COPY --from=packer /usr/src/boardgamegeekclient-packfase/test/unit/utils utils
COPY --from=packer /usr/src/boardgamegeekclient-packfase/buildtest/cjs/ .
COPY --from=packer /usr/src/boardgamegeekclient-packfase/buildtest/cjs/tsconfig.cjs.json .
RUN yarn add global typescript && npx tsc -p tsconfig.cjs.json && mv utils/reflection/reflectionexport.json dist-utils/reflection/reflectionexport.json

FROM node:16-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS commmonjstester
ARG VERSION
RUN echo "received: ${VERSION}"
WORKDIR /usr/src/boardgamegeekclient-test
COPY --from=packer /usr/src/boardgamegeekclient-packfase/boardgamegeekclient-v${VERSION}.tgz .
COPY --from=compiler /usr/src/boardgamegeekclient-compilerfase/dist-utils dist-utils
COPY --from=compiler /usr/src/boardgamegeekclient-compilerfase/index.test.js .
COPY --from=compiler /usr/src/boardgamegeekclient-compilerfase/package.json .
ENV NODE_ENV production
RUN yarn add file:/usr/src/boardgamegeekclient-test/boardgamegeekclient-v${VERSION}.tgz && yarn add jest
RUN adduser -D apprunneruser 
USER apprunneruser
CMD [ "yarn", "test" ]