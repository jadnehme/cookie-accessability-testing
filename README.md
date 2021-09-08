# cookie-accessability-testing

This folder contains some web pages that will test accessability of cookies from 1st party and 3rd party context.

To run: 
1- deploy the first* files on a webserver. 
2- add the following lines to your hosts file. Che only hardcoded domain is 3rdpartycontex.com in the file third-domain-main-page.html, so you could choose the domain and port you want, just change the line 3rdpartycontex.com in that file accordingly, or make the call dynamic. 

127.0.0.1       1stpartycontext.com

129.0.0.1       3rdpartycontext.com

3- access the URI http://1stpartycontext.com/first-domain-main-page.html. Click on "write to test cookie" and "read your cookies". That will validate that you have cookies set for that domain

4- open the URI http://3rdpartycontext.com/third-domain-main-page.html. click read your cookies and see which ones made it through. You can also click "write cookies" and then go back to 1stpartycontext to see which ones are available in the 1st party domain.

One test to validate that the calls are correctly setting the cookies is to open  http://1stpartycontext.com/third-domain-main-page.html and access the IFRAME. In there you should see all your cookies set in I http://1stpartycontext.com/first-domain-main-page.html.

