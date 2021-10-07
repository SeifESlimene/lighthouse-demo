#!/bin/bash

set -euxo pipefail
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee -a /etc/apt/sources.list.d/google.list
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo apt-get update
sudo apt-get install -y google-chrome-stable
export CHROME_PATH=$(which google-chrome-stable)
export LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL="$BUILD_URL"