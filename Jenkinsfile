def response
pipeline{
    agent any
    stages{
        stage("launch"){
                steps{
                    echo  'starting app'
                    bat   'node Server.js'
                    //bat   'sleep 5000'
                }//end steps
        } //end stage
        stage("invoke"){
                steps{
                     script {
                           try{
                                //bat 'start http://127.0.0.1:8282'
                                bat 'start http://127.0.0.1:8080'
                                echo 'URL Invoked Successfully'
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

    }//end stages

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


}//end pipeline  