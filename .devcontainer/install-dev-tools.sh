#!/bin/bash

# set vim as git editor
git config --global core.editor "vim"

# set vim as other editors in general
export VISUAL=vim
export EDITOR="$VISUAL"

echo "export VISUAL=vim" >> ~/.bashrc
echo "export EDITOR=\"$VISUAL\"" >> ~/.bashrc

# setup git completion
echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc

# Setup local dev environment
npm ci

# Get latest from repo
git fetch

# install and setup nvm version
nvm install
npm config delete prefix
nvm use
nvm alias default node

# install global nx cli, not always required but useful to have
npm i -g @nrwl/cli
