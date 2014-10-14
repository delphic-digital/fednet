#!/bin/bash
( cd build
 git init
 git config user.name "jefftherobot"
 git config user.email "jeffy9@gmail.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)