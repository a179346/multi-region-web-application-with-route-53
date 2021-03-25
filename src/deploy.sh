#!/bin/bash
echo "copy files ..."

rm -rf dist
mkdir dist

cp -R ./system/ ./dist/system/
cp -R ./utils/ ./dist/utils/
cp -R ./package.json ./dist/package.json
cp -R ./index.js ./dist/index.js