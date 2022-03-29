# Bookapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Book App 
Using the "https://gutendex.com/books/" api I have designed an application where users can download books as .rar files.

# First Page
- User cannot view and download books without registration and login.
![image](https://user-images.githubusercontent.com/98026058/160709580-0455c941-54cf-4323-a4b2-7536c7040c08.png)

# Sign-Up Form Page
- I used the reactive form structure and validators in the registration form.
- When users enter an invalid email, they cannot become a member of the system if the password and password fields are not the same.
- When users register, their information will be registered in the 'go.rest/users' api.
![image](https://user-images.githubusercontent.com/98026058/160709896-60789018-b019-44b3-85eb-0737687deee5.png)
![image](https://user-images.githubusercontent.com/98026058/160709975-672be893-d9ba-4f42-98d5-772b2e05ae79.png)

- Users are notified when they register successfully.
![image](https://user-images.githubusercontent.com/98026058/160710238-07f63c20-0b31-44dd-97ed-a3ea2df7638d.png)

# Login Form Page
- When users enter their email address and password, the 'go.rest/users' api will be checked, if the information is correct they will be directed to the product page.
![image](https://user-images.githubusercontent.com/98026058/160710459-223cb77a-d742-4f04-a330-6ff88825e19d.png)
![image](https://user-images.githubusercontent.com/98026058/160710543-f0af94b1-cff0-4fc1-ae92-950342a8ba91.png)
![image](https://user-images.githubusercontent.com/98026058/160710598-e8d32d58-804c-477f-8fa9-b326eaeb6dbc.png)

# Book Page
![image](https://user-images.githubusercontent.com/98026058/160710682-e3dabf03-3535-45e4-8550-4424aa43384e.png)
- Users can search for book titles with the 'search' filter on the homepage.
![image](https://user-images.githubusercontent.com/98026058/160710905-915ae64e-21f6-4f7f-a9fc-57be43af9e11.png)

- When they click the 'download' button under the books they want to download, the products are downloaded as .rar files.
![image](https://user-images.githubusercontent.com/98026058/160710952-54fe7375-83b8-445e-a21c-4e6202a34e1f.png)

# Responsive Design
- The application has a responsive design. Its appearance in mobile applications is as follows.
![image](https://user-images.githubusercontent.com/98026058/160711123-ffb14467-01d2-4b1c-970f-9eb2493e7d6a.png)
![image](https://user-images.githubusercontent.com/98026058/160711174-5470c846-4f37-4e50-b4b5-7ec90875f5bb.png)


