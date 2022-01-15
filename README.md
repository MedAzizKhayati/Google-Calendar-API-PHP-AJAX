# Google-Calendar-API-PHP-AJAX
This is a project requested by Junk Doctors, it is a web application for fetching events of a given date.

Prerequisites

* PHP 5.4 or greater with the command-line interface (CLI) and JSON extension installed
* The Composer dependency management tool
* A Google Cloud Platform project with the API enabled. To create a project and enable an API, refer to
  https://developers.google.com/workspace/guides/create-project and enable the API.
  
Instructions

1. First thing you need to do, is to go and create an OAuth Client ID for your project, and set the type
   to be "Desktop".
2. Then go and download the JSON credentials and paste it in the project directory, inside a subfolder named
   credentials, NOTE: this is very important.
3. You may run in the console: "composer install", in order to install all the needed libraries, in our case the google api client
4. Run in the console, getEvents.php which is located in project-directory/libs/getEvents.php, and to do so
   use this command: "php getEvents.php"
5. Now you should see in the console, a prompt asking you for a code, you can get that code by authenticating
   to your google account using the given link in the console.
6. Lastly, run the whole web application via: "php -S localhost:3000" or any other port you wish to use.
