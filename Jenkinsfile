pipeline {
    agent any

    environmet{ 
        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_PROJECT_NAME = 'flipkart-demo'
        SONAR_PROJECT_KEY = 'flipkart-demo'
        SONAR_PROJECT_VERSION = '1.0'
        SONAR_PROJECT_SOURCE = '.'
        SONAR_PROJECT_LANGUAGE = 'js'
        SONAR_PROJECT_SOURCES = '.'
        SONAR_PROJECT_TESTS = 'test'
        SONAR_PROJECT_TESTS_REPORT_PATH = 'test-results.xml'
    }
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
                sh 'npz sonar-scanner'
            }
        }



    }

}
