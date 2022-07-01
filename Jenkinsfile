def response
pipeline{
    agent any
    stages{
        stage("launch"){
                steps{
                    echo  'starting app'
                    //bat   'node Server.js'
                    //bat   'sleep 5000'
                }//end steps
        } //end stage
        stage("invoke"){
                steps{
                     script {
                           try{
                                //bat 'start http://127.0.0.1:8282'
                                bat 'start http://127.0.0.1:8181'
                                echo 'URL Invoked Successfully'
                                response = httpRequest 'http://127.0.0.1:8282'
                                echo "Status Code : "+response.status
                                echo "URL Content : "+response.content 
                            }catch(Exception ex)
                            {
                                echo("invoke Exception : ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script 
                }//end steps
        } //end stage


        stage('verifyApp'){
                  steps{
                      script {
                           try{
                                    if(response.status == 200 && response.content=="Hello World" )
                                    {
                                             echo "File Reading Success: " 
                                             //node() {
                                                    writeFile file: 'response.txt', text: 'string equal  hello world'
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
                                echo("Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage

        stage('readAndDeleteApp'){
                  steps{
                      script {
                           try{
                                def data = readFile(file: 'response.txt')
                                echo  '***************** File Content  ****************'
                                echo   data 
                                echo  '****************** End Content ************'   
                                response.end();

                                if (fileExists('response.txt')) {
                                        //new File('response.txt').delete()
                                        //deleteFile('response.txt')
                                        Files.delete('response.txt');
                                        echo "file deleted"
                                        
                                } else {
                                        echo "response.txt file not found"
                                }
                                process.exit();
                            }catch(Exception ex)
                            {
                                echo("Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage
    }//end stages

    


}//end pipeline  