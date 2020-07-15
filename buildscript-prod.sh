#!/bin/bash

export NODE_OPTIONS=--max_old_space_size=8192

rm -rf www maps

# ionic cordova platform rm android
# ionic cordova platform add android --save

ng run app:ionic-cordova-build:production --source-map --platform=android

mkdir -p ./maps

for f in ./www/*.map; do
    mv "$f" ./maps
done

cordova build android --release

for f in ./maps/*.map; do
    mv "$f" ./www
done