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
        echo -e "Select Operating system [mac|linux]"
        read OS
        if [ "$OS" = "mac" ]
        then
            ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
            brew update
            brew doctor
            export PATH="/usr/local/bin:$PATH"
            brew install node
            npm install -g @angular/cli
            x=0
            if [ $? == 0 ]
            then
                x=1
            fi
        elif [ "$OS" = "linux" ]
        then
            sudo apt update
            sudo apt install nodejs npm
            npm install npm@latest -g
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
ng update
ng serve &
if [ "$OS" = "mac" ]
then
    open http://localhost:4200
else
    gnome-open http://localhost:4200
fi