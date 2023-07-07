#!/bin/bash
cd /home/whitehotrobot/cobbmtn
mkdir /home/whitehotrobot/cobbmountain_flowers/
rm -rf /home/whitehotrobot/cobbmountain_flowers/*
cp /home/whitehotrobot/cobbmtn/dist/. /home/whitehotrobot/cobbmtn/dist_public/. -r
cp /home/whitehotrobot/cobbmtn/dist_public/. /home/whitehotrobot/cobbmountain_flowers/. -r
cd /home/whitehotrobot/cobbmountain_flowers
chmod 777 . -R
git add .
git commit -m 'sync'
cat ~/github_token
git push origin main
cd /home/whitehotrobot/cobbmtn
