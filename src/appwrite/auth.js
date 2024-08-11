import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account ;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId) ;
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const user = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //call the desired method you want after sucessful creation of user
            }
            else{
                return userAccount;
            }
        }

        catch(error){
            throw error;
        }
    }

    async login ({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite service:: getCurrentUser:: error",error)
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser:: error",error)
        }
    }
}

const authService = new AuthService;

export default authService;