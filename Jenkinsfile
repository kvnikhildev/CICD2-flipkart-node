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
                script {
                    
                    docker.build("${DOCKER_IMAGE}")
                    def dockerImage = docker.image("${DOCKER_IMAGE}")
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
                        dockerImage.push()
                    } 
                }                                           
            }     
        }

        stage('update Deployment file') {
            environment{
                GIT_REPO_NAME = "flipkart-clone"
                GIT_USER_NAME = "kvnikhildev"
            }
            steps {
                withCredentials([string(credentialsId: 'github-credentials', variable:'GITHUB_TOKEN')]) {
                sh """
                    git config user.name "kvnihkill"
                    git config user.email "kvnihkill@gmail.com"
                    BUILD_NUMBER=${BUILD_NUMBER}
                    sed -i "s/ReplaceWithYourImage/${BUILD_NUMBER}/g" Deployment/Deployment.templte.yml
                    git add /Deployment/deployment.templte.yml . 
                    git commit -m "updating deployment file with image tag ${BUILD_NUMBER}"
                    git push https://${GITHUB_TOKEN}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME}.git HEAD:main
                """
                }
            }
        }

    }

}
