 
def    exec  = require("child_process") 

pipeline{

    agent any

    stages{
         stage("group1_stage"){
             parallel{
                 stage("one")
                 {
                        steps{
                            echo "hello 1"
                        }
                 }// end stage  one
                 stage("two")
                 {
                        steps{
                            echo "hello 2"
                        }
                 }// end stage  two
             }// end parallel
         }// end group1_stag 

    } // end all stages

}//end pipeline  