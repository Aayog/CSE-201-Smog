#!/bin/bash
echo "Welcome to Smog by Nozzle"
echo "Let's start the build process"
echo "Do you have npm and angular already installed? y/n"
read -e choice
if [ "$choice" != "y" ]
then
    x=1 
    while [ $x -eq 1 ]
    do
        echo -e "Select Operating system [mac|ubuntu]"
        read OS
        if [ "$OS" = "mac" ]
        then
            brew install node
            x=0
        elif [ "$OS" = "ubuntu" ]
        then
            sudo apt update
            sudo apt install nodejs npm
            yes | npm install -g @angular/cli
            x=0
        else
            echo "Select correct Operating System"
            x=1
        fi
    done
fi

echo "Does this machine have php installed? y/n"
read -e php 
if [ "$php" = "y" ] 
then 
    echo "Ready to run npm"
else
    sudo apt install software-properties-common
    sudo add-apt-repository ppa:ondrej/php
    sudo apt install php7.3 php7.3-common php7.3-opcache php7.3-cli php7.3-gd php7.3-curl php7.3-mysql
fi

cd php
php -S localhost:8000 &
cd ..
cd Smog
yes | npm install --save-dev @angular-devkit/build-angular
ng serve --sourcemap=false&