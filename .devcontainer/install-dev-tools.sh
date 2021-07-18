#!/bin/bash

# **note** dotfiles execution will setup nvim

# Get latest from repo
echo ">> fetching"
git fetch

# install and setup nvm version
echo ">> updating nvm"
nvm install
nvm use
npm config delete prefix
nvm alias default node


# install neovim and cypress deps, required by dotfiles
echo ">> installing dependencies"
sudo apt install -y --no-install-recommends neovim libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb


# we need google-chrome to run lighthouse tests, install it
echo ">> installing chrome for lighthouse"
mkdir ./tmp
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
mv google-chrome-stable_current_amd64.deb ./tmp/google-chrome-stable_current_amd64.deb
sudo apt install ./tmp/google-chrome-stable_current_amd64.deb

# clean up  codespace install
echo ">> cleaning up chrome install"
rm -rf ./tmp

# install npm packages
echo ">> installing node deps"
npm ci

# install global nx cli, not always required but useful to have
npm i -g @nrwl/cli
echo ">> done"
