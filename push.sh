#!/bin/bash
cd /home/whitehotrobot/cobbmtn
mkdir /home/whitehotrobot/cobbmountain_flowers/
rm -rf /home/whitehotrobot/cobbmountain_flowers/*
cp /home/whitehotrobot/cobbmtn/dist/. /home/whitehotrobot/cobbmountain_flowers/. -r
cd /home/whitehotrobot/cobbmountain_flowers
git add .
git commit -m 'sync'
echo "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"
git push origin main
cd /home/whitehotrobot/cobbmtn
