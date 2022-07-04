 
def    exec  = require("child_process") 

pipeline{

    agent any

    stages{
        stage("All Stages"){
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
            
            stage('verifyApp'){
                  steps{
                      script {
                           try{
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
                                variable = ""
                            }//end try catch(Exception ex)
                      }  //end script                
                  } //end step
        } //end stage
        

        }//end stages parallel
        }//end all stage    

    }//end main stages

}//end pipeline  