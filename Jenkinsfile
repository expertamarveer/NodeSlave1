 
def    exec  = require("child_process") 

pipeline{

    agent any

    stages{
        parallel {

             stage("Launch"){
                steps{
                    //echo 'hello'
                   script{

                            echo 'Launching '
                            bat 'node Server.js'
                            //const  { exec } = require("child_process") 
                            // exec("node Server.js", (error, stdout, stderr) => {
                            //     if (error) {
                            //         console.log(`error: ${error.message}`);
                            //         return;
                            //     }
                            //     if (stderr) {
                            //         console.log(`stderr: ${stderr}`);
                            //         return;
                            //     }
                            //     console.log(`stdout: ${stdout}`); 
                            // });     

                   }
                }//end steps
            }//end stages Launch
            stage('verify'){
                  steps{
                      script {
                           try{
                                    echo 'Before Calling URL '
                                    //bat 'node Server.js'
                                    bat 'start http://127.0.0.1:8282'
                                    echo 'After Calling URL'
                                    //def response = httpRequest 'http://127.0.0.1:8282'
                                    response = httpRequest 'http://127.0.0.1:8282'
                                    echo "Status   : "+response.status
                                    echo "Content  : "+response.content 
                            }catch(Exception ex)
                            {
                                echo("Launch App Exception: ${ex}")
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage
        }
           
    }//end stages

}//end pipeline  