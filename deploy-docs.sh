#!/usr/bin/env sh

# abort on errors
set -e

rm -rf docs/.vuepress/dist

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'update docs'

# git push -f git@github.com:vlvovlv/markdown-it-vue-demo-block.git master:gh-pages

cd -
