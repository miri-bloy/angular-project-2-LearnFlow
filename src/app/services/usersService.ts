import { Injectable, signal } from "@angular/core";
import { userObj } from "../components/user/user.model";
import { USERS } from "../DB/users.data";

@Injectable({providedIn: 'root'})

export class UsersService{
   
    users: userObj[]= USERS;

    getAllUsers(): userObj[]{
        return this.users;
    }

    getUserById(id: string): userObj | null {
       return this.users.find((u)=>u.id==id) || null;
    }
    
}