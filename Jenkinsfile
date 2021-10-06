pipeline {
	agent any
	stages {
		stage("Build") {
			steps {
				sh "sudo npm install"
				sh "sudo npm run build"
			}
		}
		stage("Lighthouse") {
			environment {
				LHCI_GITHUB_TOKEN = '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'
			}
			steps {
				sh '''#!/bin/bash
					set -euxo pipefail
					echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee -a /etc/apt/sources.list.d/google.list
					wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
					sudo apt-get install -y google-chrome-stable
					export CHROME_PATH=$(which google-chrome-stable)
					export LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL="$BUILD_URL"
					npm install -g @lhci/cli@0.8.x
					lhci autorun
				'''
			}
		}
		stage("Deploy") {
			steps {
				sh "sudo rm -rf /var/www/dev-shoptounsi"
				sh "sudo cp -r ${WORKSPACE}/build/ /var/www/dev-shoptounsi/"
			}
		}
	}
}