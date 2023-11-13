// we need project id database id appwrite url all things are needed so we need to export the conf file
import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    // first we need to make client ->you can see in the doc section how to make account
    client = new Client();
    account;

    // making constructor because when the function is called tabhi ye execute hoga
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // now add the account
        this.account = new Account(this.client);
    }

    // also we can create account by using a async function not by direct method jo docs me hai ok and docs me promise use kiya hai but we can use async await also ok
    async createAccount({ email, password, name }) {
        // !ye fail bhi ho sakta hai so use try and catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            // throw error;
            console.log(error);
        }
    }

    // for login
    async login({ email, password }) {
        try {
            // in login use create email session
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // throw error;
            console.log(error);
        }
    }

    // to check you are logged in or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // throw error; // you can do log also
            // console.log("Appwrite service :: getCurrentUser::error", error);
            console.log(error);
        }
        // for safe side agar kuch account return nhi ho rha to
        return null;
    }

    // logout session
    async logout() {
        try {
            await this.account.deleteSessions();//terminate all sessions ek session without last s bhi hota h osme session id dena hota hai  
        } catch (error) {
            // throw error;
            // console.log("Appwrite service :: logout ::error", error);
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;

// ab authService ko import kro and authService.function() access kr sakte ho easily koi bhi file me