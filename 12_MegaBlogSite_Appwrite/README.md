# React + Vite

# Notes
1. Environment variables
-> to hide the secrets keys and secret data we use the environmental variables and we insert this where we deploy our project == jaha project deploy krte hai waha inka values humlog insert krte hai with secrets but github pr ye sab secret reveal nhi hota ye secret hi rehta hai ok so remember this because it is very important for privacy of the software.

2. environmentral varible wala file ->.env file hamesa root me hona chahiye project ke ok

3. ye .env file git me push nhi hota so ise git ingnore me dal ke rakho

4. we make a sample file waha humlog sab data rakhte hai .env.sample file me ok and ye git me push hoga 
5. agar create react app se banaye ho project to environment variable ko access krne ke liye process.env.name_of_environment_variable isko log krne se output ayega but vite se project banane se tumko variable banate time bhi vite use krna hai and output krte time bhi import.meta.env.(variable name) aise use krna hoga to access the variable

6. api endpoint in appwrite site is the first url variable jo .env file me first wala line me hai   

7. update permission me all user set krna and har user create read update delete ye operation kr paye so tick out kr dena all four ok
