#!/bin/bash

# will make the script throw an error and exit
set -e
echo ">> starting purgecss.sh..."

echo ">> changing directory to ./dist/client"
cd ./dist/client

echo ">> getting CSS_FILE variable"
CSS_FILE=`find * -iname styles.*.css`
echo ">> found file:" $CSS_FILE

echo ">> creating temp_css folder"
mkdir -p temp_css

echo ">> running purgecss for file " $CSS_FILE
npx purgecss --css=$CSS_FILE --output=./temp_css --content ./**/*.html ./**/*.js

echo ">> replacing existing styles file"
mv ./temp_css/$CSS_FILE ./

echo ">> removing temp_css folder"
rmdir ./temp_css

echo ">> purgecss.sh done!"
