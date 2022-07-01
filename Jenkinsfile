pipeline{
    agent any
    stages{
        stage("launch"){
                steps{
                    echo 'starting app'
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
                                echo "URL Content: "+response.content 
                            }catch(Exception ex)
                            {
                                echo("invoke Exception : ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script 
                }//end steps
        } //end stage
        
    }//end stages
}//end pipeline  