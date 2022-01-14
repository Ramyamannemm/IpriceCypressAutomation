Please find the below steps to configure this project on your machine:

-> Clone this repository in new folder in your machine by using the below command
     git clone https://github.com/Ramyamannemm/IpriceCypressAutomation.git -b master
 
 -> After cloning the code, make sure that node.js is installed in the machine. Also, add node_home as an environment variable as shown below:
 
     NODE_HOME : C:\Program Files\nodejs
     
 -> Navigate to the project directory that is being cloned above, and execute the below command to run the code:
 
    .\node_modules\.bin\cypress run
    
  -> If need to see the run on GUI, please execute the below command:
  
     .\node_modules\.bin\cypress open
     
     Then a GUI will be opened and click on .feature file
     
    -> The test run will be opened and shown in the browser

