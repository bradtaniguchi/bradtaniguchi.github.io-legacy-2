#!/bin/bash

# **note** dotfiles execution will setup nvim

# Setup local dev environment
npm ci

# Get latest from repo
git fetch

# install and setup nvm version
nvm use
nvm install
npm config delete prefix
nvm alias default node

# install global nx cli, not always required but useful to have
npm i -g @nrwl/cli

# install neovim, required by dotfiles
sudo apt install -y --no-install-recommends neovim


# we need google-chrome to run lighthouse tests, install it
# mkdir ./tmp
# wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# mv google-chrome-stable_current_amd64.deb ./google-chrome-stable_current_amd64.deb
# sudo apt install ./tmp/google-chrome-stable_current_amd64.deb

# clean up  codespace install
# rm -rf ./tmp
