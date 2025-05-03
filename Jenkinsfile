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

        stage('push to docker hub'){
            environment {
                DOCKER_IMAGE = "kvnikhill/flipkart-demo:${BUILD_NUMBER}"
            }
            steps {
                sh '''
                    docker.build -t ("${DOCKER_IMAGE}")
                    def dockerImage = docker.image("${DOCKER_IMAGE}")
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
                        dockerImage.push()
                    }
                '''                                                  
            }

            
        }

    }

}
