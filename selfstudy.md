## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

Sessions are a way to store data that we want to be preserved across page-loads. They use storage and cookies with the appropriate session id to create a place for devs to store user/client data across multiple pages of an application

- [ ] What does bcrypt do to help us store passwords in a secure manner.

bcrypt hashes passwords for us, allowing us to abstract away the plaintext password the user/client entered

- [ ] What does bcrypt do to slow down attackers?

Hashes the passwords/info multiple times, it can also add salt to the hashing algorithm

- [ ] What are the three parts of the JSON Web Token?

Header, payload, and signature