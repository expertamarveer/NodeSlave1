 
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
                                //echo "hello 2"

                                //--------------code---------
                                 script {
                                        try{
                                                    //bat 'node Server.js'
                                                    bat 'start http://127.0.0.1:8282'
                                                    echo 'hello'
                                                    //def response = httpRequest 'http://127.0.0.1:8282'
                                                    response = httpRequest 'http://127.0.0.1:8282'
                                                    echo "Status   : "+response.status
                                                    echo "Content  : "+response.content 
                                                    echo "Port     : "+response
                                            }catch(Exception ex)
                                            {
                                                echo("Launch App Exception: ${ex}")
                                                variable = ""
                                            }//end try catch(Exception ex)
                                }  //end script     
                                //--------------end-----------
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