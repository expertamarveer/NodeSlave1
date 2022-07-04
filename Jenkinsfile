 
pipeline{

    agent any

    stages{
            stage("All"){
                parallel{

                
                        stage("one"){
                            steps{
                                echo "hello 1"
                                bat 'node Server.js'
                                 
                            }
                        }
                        stage("two"){
                            steps{
                                echo "hello 2"
                            }
                        } 
                        stage("three"){
                            steps{
                                echo "hello 3"
                                bat 'process.exit(0)'
                            }
                        } 

                }// end parallel
            }// end all stage
    } // end all stages

}//end pipeline  