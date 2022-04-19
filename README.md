# engine

1. Before running the application ensure you have node.js installed on your device
   (you may need to reboot after this step)
2. We also need to check your host file can accpet the host connection
   a. Open the start menu
   b. Type Notepad.exe and press enter
   c. In notepad find file and open
   d. Navigate to C:\Windows\System32\drivers\etc.
   e. Change the file type to open from Text Documents (_.txt) to All Files (_.\*).
   f. Open the hosts file.
   g. Enter the following details at the bottom of the file:

##

# Host Database

#

# localhost is used to configure the loopback interface

# when the system is booting. Do not change this entry.

##

127.0.0.1 localhost1
255.255.255.255 broadcasthost
::1 localhost
fe80::1%lo0 localhost
h. Press save and follow the next instructions

2. Clone the git at repository https://github.com/rgellison/engine.git
3. Locate the backend folder in the file explorer and create a new file called .env
   this file is the environment for the database
4. In this .env file copy the following details:
   JWT_SECRET=somethingsecret
   MONGODB_URI=mongodb://localhost1/engine
5. Save this file and open a new terminal
6. Type the following command: cd backend
7. Type the following command: npm install
8. Type the following command: npm install react
9. Type the following command: node server.js - you should see the database is connected
10. Keep this terminal open and open a new terminal
11. Type the following command: cd frontend
12. Type the following command: npm install react-scripts
13. Type the following command: npm start

You should now be able to access the site
Please create an account or use the following details to log in:
email: guest@guest.com
password: guest

Enjoy :)

# Work

Below are all the components created thorughout the duration of my project:

1. Install Tools
2. Create React App
3. Create Git Repository
4. Created main feature screen with temproray data
5. Created singular product screen with tenporary data
6. updated URLs

7. Add items to favourites
8. Alter existing items in favourites (check backend)
9. create favourites page
10. create sign in screen
11. connect to database

12. add product data
13. add user data
14. create sign in screen
15. create sign up screen
16. create user profile
17. create search
18. add CVE info

19. create admin functionality
20. management and sorts
21. create recommendation based on popularity and user likes
22. updated css
