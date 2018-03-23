<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

-Middleware is code you can put between the framework sending a request, and the framework generating a resonse, providing a third party extension point.

-A session is a place to store data that you want to access across requests. For each user that has a unique session, the website can use sessions to store and access user data as they browse the application.

-bcrypt is a hashing algorithm used to convert plain text passwords into long arbitrary strings that are very difficult to decrypt by malicious attackers.

-JWT or JSON Web Tokens provide a secure authentication method that is relatively easy to implement. It works by creating access tokens that assert a number of claims from a specific user, such as "logged-in", or "logged-in as admin".

2.  What does bcrypt do in order to prevent attacks?

-Bcrypt makes it very difficult for an attacker to uncover user's information by converting their password into a long string of arbitrary characters. This makes it very difficult for anyone to potentially reverse, and gain access to other users' stored passwords.

3.  What are the three parts of the JSON Web Token?

-header, payload, signature.