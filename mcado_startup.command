#! /bin/sh
echo ">>>>>STARTING MCADO APP"
cd mcado
git pull
npm install
ng serve --watch --open