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
					./machine-setup
					./job
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