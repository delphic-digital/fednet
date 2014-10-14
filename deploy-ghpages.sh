#!/bin/bash
rm -rf out || exit 0;
mkdir out;
node build.js
( cd out
 git init
 git config user.name "jefftherobot"
 git config user.email "jeffy9@gmail.com"
 cd build
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)