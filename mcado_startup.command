#! /bin/sh
echo ">>>>>STARTING MCADO APP"
ls
cd ./
ls
git config credential.helper store
git pull
ng serve --watch --open