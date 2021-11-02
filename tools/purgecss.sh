#!/bin/bash

echo 'starting purgecss.sh'
cd ./dist/static

pwd

CSS_FILE=`find * -iname *.css`
echo purging $CSS_FILE

mkdir -p temp_css

npx purgecss --css='$CSS_FILE' --output=./temp_css --content="./**/*.html"

mv ./temp_css/$CSS_FILE ./
