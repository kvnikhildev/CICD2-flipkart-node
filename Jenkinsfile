pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kvnikhildev/CICD2-flipkart-node.git'
            }
        }



        stage('build') {
            steps {
                sh 'docker build -t flipkart-demo .'
            }
        }

        stage('test'){
            steps {
                sh 'npm audit || true && npm test'
            }
        }

        stage('static code analysis'){
            steps{
                withCredentials([string(credentialsId: 'sonarqube', variable: 'SONAR_TOKEN')]) {
               
                sh 'npx sonar-scanner'
                }
            }
        }

    }

}
