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
