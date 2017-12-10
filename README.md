# Self
Self Mobile Application

run npm install
node serve.js

All the operations are POST.

Add User details or Signup details
    http://localhost:3030/adduser

    Send data as json to the above link. For example { username : "Rakesh", password: "abc", DOB: "12/01/1999" }
    You can use this to send any details. You can can add any number of attributes. 
    Note: username is a primary key in the db.

Select User details
    http://localhost:3030/selectuser

    Select or Find user details. For example, during login select user details by sending json object to the above URL.
    { username : "Rakesh", password: "abc" }

Update User details
    http://localhost:3030/updateuser
    
    Update user details using username as primary key. Send data as json to the above link like { username : "Rakesh", password: "abc123", DOB: "12/01/1989" }. You can send any number of attributes. 


