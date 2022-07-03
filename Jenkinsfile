 

pipeline{

    agent any

    stages{
            stage("Launch"){
                steps{
                    //echo 'hello'
                   script{
                       
                           bat' const { exec } = require("child_process");
                            exec("node Server.js", (error, stdout, stderr) => {
                                if (error) {
                                    console.log(`error: ${error.message}`);
                                    return;
                                }
                                if (stderr) {
                                    console.log(`stderr: ${stderr}`);
                                    return;
                                }
                                console.log(`stdout: ${stdout}`);'
                            });     
                   }
                }//end steps
            }//end stages Launch
    }//end stages

}//end pipeline  