pipeline {
    agent {
        docker {
            image 'node:20-alpine' // Use a Node.js Docker image compatible with your setup
        }
    }
    environment {
        CI = 'true' // Ensures npm understands we're in a CI environment
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/abhaybansal0322/SCM_Final_Project'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Installs all dependencies from package.json
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint' // Runs ESLint to check for code quality
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build' // Builds the project using Vite
            }
        }
        stage('Test') {
            steps {
                // Add test commands here if you have tests configured
                sh 'echo "No tests configured yet."' 
            }
        }
        stage('Preview Build') {
            steps {
                sh 'npm run preview' // Optional: Preview the build to ensure it runs correctly
            }
        }
        stage('Dockerize') {
            steps {
                sh 'docker build -t your-docker-image-name .' // Builds a Docker image for the app
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'dist/**', fingerprint: true // Archives build output
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}

                
            
