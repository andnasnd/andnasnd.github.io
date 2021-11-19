"use strict";(self.webpackChunkcomm_docs=self.webpackChunkcomm_docs||[]).push([[257],{5160:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Instructions (Linux)",sidebar_position:3},l="Linux Instructions",p={unversionedId:"linux_dev_environment",id:"linux_dev_environment",isDocsHomePage:!1,title:"Linux Instructions",description:"The instructions to set up Comm development environment are only tested and available for Ubuntu 20.04.",source:"@site/docs/linux_dev_environment.md",sourceDirName:".",slug:"/linux_dev_environment",permalink:"/linux_dev_environment",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Instructions (Linux)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instructions (macOS)",permalink:"/dev_environment"}},d=[{value:"Reference main dev environment instructions",id:"reference-main-dev-environment-instructions",children:[],level:2},{value:"React Native",id:"react-native",children:[],level:2},{value:"nvm",id:"nvm",children:[],level:2},{value:"Redis",id:"redis",children:[],level:2},{value:"Reactotron",id:"reactotron",children:[],level:2},{value:"phpMyAdmin",id:"phpmyadmin",children:[],level:2},{value:"Apache",id:"apache",children:[],level:2},{value:"MySQL",id:"mysql",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux-instructions"},"Linux Instructions"),(0,a.kt)("p",null,"The instructions to set up Comm development environment are only tested and available for Ubuntu 20.04."),(0,a.kt)("h2",{id:"reference-main-dev-environment-instructions"},"Reference main dev environment instructions"),(0,a.kt)("p",null,"This doc is very incomplete, so you should start by reading through the ",(0,a.kt)("a",{parentName:"p",href:"dev_environment"},"main dev environment instructions"),". For anything that isn't mentioned here, you should either try to install it with the same approach described in the main docs, or (if that's not possible) you should try to figure out an alternate approach yourself. The following notes can help you for some of the more complex parts."),(0,a.kt)("h2",{id:"react-native"},"React Native"),(0,a.kt)("p",null,"To set up React Native, follow the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native docs"),"."),(0,a.kt)("h2",{id:"nvm"},"nvm"),(0,a.kt)("p",null,"You can install nvm following the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"nvm installation instructions"),"."),(0,a.kt)("h2",{id:"redis"},"Redis"),(0,a.kt)("p",null,"On Ubuntu, you can install the latest stable version of Redis from the ",(0,a.kt)("inlineCode",{parentName:"p"},"redislabs/redis")," package repository via ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:redislabs/redis\nsudo apt-get update\nsudo apt-get install redis\nsudo systemctl start redis\nsudo systemctl status redis\n")),(0,a.kt)("p",null,"If you\u2019re not on Ubuntu, you can look for distro-specific binaries using your preferred package manager, or compile from ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/download"},"source"),"."),(0,a.kt)("h2",{id:"reactotron"},"Reactotron"),(0,a.kt)("p",null,"Reactotron is an event tracker and logger that can be used to aid in debugging on React Native."),(0,a.kt)("p",null,"Download and install the Reactotron package from their ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron/blob/master/docs/installing.md"},"release")," page."),(0,a.kt)("p",null,"If Reactotron does not connect to the Android Emulator, run the following command and restart the Metro bundler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"adb reverse tcp:9090 tcp:9090\n")),(0,a.kt)("p",null,"You can see more information on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md#configure-reactotron-with-your-project"},"Reactotron installation instructions"),"."),(0,a.kt)("h2",{id:"phpmyadmin"},"phpMyAdmin"),(0,a.kt)("p",null,"On Ubuntu, you can install and run ",(0,a.kt)("inlineCode",{parentName:"p"},"phpmyadmin")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install phpmyadmin php-mbstring php-zip php-gd php-json php-curl\nphpmyadmin\n")),(0,a.kt)("p",null,"For configuration you should refer to the ",(0,a.kt)("a",{parentName:"p",href:"/dev_environment#phpmyadmin"},"main dev environment instructions"),"."),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("p",null,"On Ubuntu, you can install the Apache webserver using ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install apache2\n")),(0,a.kt)("p",null,"The you can enable it to run on system startup using ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl start apache2\nsudo systemctl status apache2\n")),(0,a.kt)("p",null,"You'll also need to add a set of Apache modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo a2ensite mod_proxy mod_proxy_http mod_proxy_wstunnel mod_userdir\n")),(0,a.kt)("p",null,"Finally, you'll need to configure the development site. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"000-default.conf")," with your text editor of choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo vim /etc/apache2/sites-enabled/000-default.conf\n")),(0,a.kt)("p",null,"Add the content below, but make sure to replace \u201cashoat\u201d with your username."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Directory "/Users/ashoat/Sites/">\n  AllowOverride All\n  Options Indexes FollowSymLinks\n  Require all granted\n</Directory>\n\n<VirtualHost *:80>\n  ProxyRequests on\n  ProxyPass /comm/ws ws://localhost:3000/ws\n  ProxyPass /comm/ http://localhost:3000/\n  ProxyPass /commlanding/ http://localhost:3000/commlanding/\n\n  RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}\n  RequestHeader set "X-Forwarded-SSL" expr=%{HTTPS}\n</VirtualHost>\n')),(0,a.kt)("p",null,"Finally, let\u2019s restart Apache so it picks up the changes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart apache2\nsudo systemctl status apache2\n")),(0,a.kt)("h2",{id:"mysql"},"MySQL"),(0,a.kt)("p",null,"First, install Docker with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get remove docker docker-engine docker.io\nsudo apt install docker.io\nsudo systemctl start docker\nsudo systemctl enable docker\n")),(0,a.kt)("p",null,"Next you'll download the MySQL 5.7 Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull mysql:5.7\n")),(0,a.kt)("p",null,"After setting up your MySQL install following the ",(0,a.kt)("a",{parentName:"p",href:"/dev_environment#mysql-2"},"main dev environment instructions"),", you can use the root password to run your Docker container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=password --expose 3306 -p 3306:3306 -v $HOME/mysql-data:/var/lib/mysql -d mysql:5.7\n")),(0,a.kt)("p",null,"You can log in to MySQL database in the Docker container using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec -it my-mysql mysql -p\n")),(0,a.kt)("p",null,"You may find yourself needing to configure your MySQL user using the IP corresponding to the inet entry from ",(0,a.kt)("inlineCode",{parentName:"p"},"ifconfig docker0")," output, rather than the default (",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE USER comm@172.17.0.1 IDENTIFIED BY 'password';\nGRANT ALL ON comm.* TO comm@172.17.0.1;\n")))}c.isMDXComponent=!0}}]);