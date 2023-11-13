// same as auth.js osi type ka code yha bhi hoga
import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

// create a class
export class Service {
    // !make client
    client = new Client();
    databases;
    bucket;
    // !make constructor
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // creating function to create post in the databse ok
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service:: createPost::error", error);
        }
    }

    // !note -> slug is used as document id ok and you can read the docs ki kya kya dena hai paramenter me by looking at the code given on the site 
    // update method
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service:: updatePost:: error", error);
        }
    }

    // delete method
    async deletePost(slug) {
        // slug->document id == means ki sirf slug pass kro and it is enough to delete the post
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; // !means delete successful if true returns 
        } catch (error) {
            console.log("Appwrite service:: deletePost :: error", error);
            return false; // !if delete unsuccessful then return false
        }
    }

    // !for get post we need only document id so taken the slug and yes we can get the document
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service::getPost::error", error);
            return false;
        }
    }

    // !method to get all documents called list document (see the docs link is given below) and wahi post get krenge jo ki active hai ok so oske liye query use krenge and jiska status type active ho (see docs https://appwrite.io/docs/products/databases/queries)
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getposts :: error", error);
            // if you don't get values then reuturn false
            return false;
        }
    }



    // services for file uploading on the site



    // !we will use two method 1. upload file 2. delete file
    // !docs -> https://appwrite.io/docs/products/storage/quick-start
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // !method to delete file 
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true; // if deleting the file is successful then return true here
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }


    // file preview method to get the preview of the file 
    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const service = new Service();
export default service; //so that we can access the methods present in the Service directyly by doing the thing like service.(method) ok

// !Note -> read this docs yhi sab method use kiya hu uper me but in a different way but parameter kya kya pass krna hai oska info yhi se dekha hu
// https://appwrite.io/docs/references/cloud/client-web/databases