 
def response
def spawn  
def child 
 
pipeline{

    agent any

    stages{
            stage("All"){
                parallel{

                
                        stage("one"){
                            steps{
                               
                                echo "hello 1"
                                //bat 'node Server.js'
                                spawn = require('child_process').spawn;
                                child = spawn('node Server.js');
                            }
                        }
                        stage("two"){
                            steps{
                                //echo "hello 2"

                                //--------------code start---------
                                 script {
                                        try{
                                                    //bat 'node Server.js'
                                                    //sleep 2
                                                    bat 'start http://127.0.0.1:8181'
                                                    echo 'hello'
                                                    //def response = httpRequest 'http://127.0.0.1:8282'
                                                    response = httpRequest 'http://127.0.0.1:8181'
                                                    echo "Status   : "+response.status
                                                    echo "Content  : "+response.content 
                                                     
                                            }catch(Exception ex)
                                            {
                                                echo("Launch App Exception: ${ex}")
                                                child.kill(); 
                                            }//end try catch(Exception ex)
                                }  //end script     
                                //--------------code cend-----------
                            }
                        } 

                        stage('verifyApp'){
                            steps{
                                script {
                                    try{
                                                 //sleep 4
                                                if(response.status == 200 && response.content=="Hello World" )
                                                {
                                                        echo "File Reading Success: " 
                                                        //node() {
                                                                writeFile file: 'response.txt', text: 'string equal hello world'
                                                        // }    
                                                }
                                                else
                                                {
                                                        echo "File Reading Fail: "   
                                                        //node() {
                                                                writeFile file: 'response.txt', text: 'issue in app'
                                                        // }      
                                                }
                                        }catch(Exception ex)
                                        {
                                            writeFile file: 'response.txt', text: 'issue in app'
                                            echo("Reading Exception: ${ex}")
                                            
                                            child.kill() 
                                        }//end try catch(Exception ex)
                                }  //end script                
                            } //end step
                        } //end stage verifyApp

                        stage('readAndDeleteApp'){
                                    steps{
                                        script {
                                            try{
                                                    //sleep 6
                                                    def data = readFile(file: 'response.txt')
                                                    echo  '***************** File Content  ****************'
                                                    echo   data 
                                                    echo  '****************** End Content ************'   

                                                    if (fileExists('response.txt')) {
                                                            bat 'del response.txt'
                                                            //new File('response.txt').delete()
                                                            //deleteFile('response.txt')
                                                            //deleteFile file :'response.txt' 
                                                            //deleteFile('test.zip')
                                                            //Files.delete('response.txt');
                                                            echo "file deleted"
                                                            
                                
                                                    } else {
                                                            echo "response.txt file not found"
                                                    }
                                                    
                                                    child.kill() 
                                                }catch(Exception ex)
                                                {
                                                    echo("File Deletion Exception: ${ex}")
                                                   
                                                    child.kill() 
                                                }//end try catch(Exception ex)
                                        }  //end script                
                                    } //end step
                        } //end stage

                }// end parallel
            }// end all stage
    } // end all stages

}//end pipeline  