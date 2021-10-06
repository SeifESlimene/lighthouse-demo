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

					echo 'uname: '
					uname -a

					echo 'groups: '
					groups

					echo 'list groups: '
					grep $(whoami) /etc/group

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