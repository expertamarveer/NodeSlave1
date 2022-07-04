 
def    exec  = require("child_process") 

pipeline{

    agent any

    stages{
         stage("group1_stage"){
             parallel(
                    "StageA": {
                        echo "This is branch a"
                    },
                    "StageB": {
                        echo "This is branch b"
                    }
            )
         }// end group1_stag 

    } // end all stages

}//end pipeline  