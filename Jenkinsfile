pipeline {
	agent any
	stages {
		stage("Build") {
			steps {
				sh '''#!/bin/bash
					echo 'pwd:'
					pwd

					echo 'whoami: '
					whoami

					echo 'groups: '
					groups

					echo 'ENV:'
					env
				'''
				sh "sudo npm install"
				sh "sudo npm run build"
			}
		}
		stage("Deploy") {
			steps {
				sh "sudo rm -rf /var/www/dev-shoptounsi"
				sh "sudo cp -r ${WORKSPACE}/build/ /var/www/dev-shoptounsi/"
			}
		}
		stage("Lighthouse") {
			environment {
				LHCI_GITHUB_TOKEN = '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'
			}
			steps {
				sh "chmod 755 job.sh"
				sh "./job.sh"
				sh "sudo npm install -g @lhci/cli@0.8.x"
				sh "lhci autorun"
			}
		}
	}
}