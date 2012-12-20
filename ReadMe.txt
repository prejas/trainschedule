Setup and Run TrainRestService and TrainScheduleMobile applications

Tools Used
jdk 6
Eclipse eclipse-jee-indigo-SR2-win32
Maven Plugin for eclipse
MySql 5.5.8
Android SDK
PhoneGap 2.0.0
HTML5
Apache tomcat 6 web server

Download project
1. download trainschedule project from github repository https://github.com/prejas/trainschedule as a zip
2. extract it to local hard disk and remember its location.

Database Setup
  1. download and install mysql from http://dev.mysql.com/downloads/mysql/5.1.html#downloads (mysql-5.1.66-win32.msi)
     set password as admin while installation
  2  open mysql command line client from All programs ->mysql ->MySql Sever 5.1 
  3  execute trainschedule.sql from TrainRestService\database folder using following command
     use complete path where trainschedule.sql is located i.e. if extracted folder path is e:\TrainRestService\database then
     mysql>\. e:\TrainRestService\database\trainschedule.sql

1. Setup and run TrainRestService java server App
Setup
   1  install JDK 6
   2  set JAVA_HOME environmental variable with value as JDK installation home directory(i.e. c:\program files\java\jdk6)
   3  set JAVA_HOME\bin in path env variable
   2. Visit the Eclipse downloads page to download the eclipse-jee-indigo-SR2-win32 package for windows operating system. 
       The Eclipse download will be an archive containing the development environment.
   3. Extract the archive to your local hard disk and remember its location.
   4. Once extracted, you can launch Eclipse by double-clicking the Eclipse application, without any additional setup steps.
   5. install maven plugin for eclipse from eclipse marketplace from help menu option.Type maven plugin in find and choose and install maven integration for eclipse
   6  download tomcat zip from http://tomcat.apache.org/download-60.cgi#6.0.36 (zip (pgp, md5) ) and extract to local hard disk and remember its location
   7  open up servers view from Eclipse  window->show view -> servers
   8. right click and configure tomcat 6 from new server wizard.. option select Apache-> Tomcat v6.0 Server click next and select Tomcat installation directory apache-tomcat-6.0.36
   

Import project & run 
   1. select file->import->General->existing projects into workplace ->select root directory->select TrainRestService project from extracted project directory
   2. right click on TrainRestService project and select Run As -> Maven clean
   3. right click on TrainRestService project and select Run As -> Maven install
   4  right click on TrainRestService project and select Run As ->Run On Server and select default option and click finish
   



2. Setup & run  TrainServiceMobile android  App

Setup
  1. Download Android SDK  from  http://developer.android.com/sdk/index.html and extract it to local hard disk.
  2. launch eclipse from extracted android sdk i.e adt-bundle-windows-x86\eclipse folder.

Import project & run 
   1. select file->import->Android->existing android code into workplace -> select root directory->select TrainServiceMobile project from extracted project directory i.e. (trainschedule-master\trainschedule-master\TrainServiceMobile)
   2. right click on TrainServiceMobile (MainActivity) project and select Build Project
   3. create Android virtual device from window -> Android Virtual Device Manager -> Device Definitions-> select any device -> click on create AVD
   4. right click on TrainServiceMobile (MainActivity) project and select Run As -> Android Application
   










