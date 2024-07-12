import conf from "../conf/conf";
import { Client, Storage,ID, Databases } from "appwrite";

export class Service{
    client=new Client();
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client);
    }
    async createPost({title,content,slug,featuredimage,status,userid}){
        try{
             return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title,content,featuredimage,status,userid }
            )
        }
        catch(error){
            throw error;
        }
    }
    async updatePost(slug,{title,content,featuredimage,status}){
         try{
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredimage,status
                }
            )
        }
        catch(error)
        {
            throw error;
        }
    }
    async deletePost(slug){
        try{
            return await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        }
        catch(error){
            throw error;
            
        }
    }
    async getPost(slug){
        try{
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            throw error;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }
        catch(error){
            throw error;
        }
    }
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            throw error;
        }
    }
    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            
        }
        catch(error){
            throw error;
           
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}
const service=new Service();
export default service; 