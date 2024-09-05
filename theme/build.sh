#!/bin/sh
RESOURCES="./dist/themes"

rm -rf build

npm run sass

mkdir $RESOURCES

cp build/themes/lara/lara-dark/green/theme.css $RESOURCES/lara-dark-green.css
cp build/themes/lara/lara-light/green/theme.css $RESOURCES/lara-light-green.css

rm -rf build
