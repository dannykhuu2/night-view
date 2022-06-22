import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signUp() {
        return { msg: 'Test: Sign up'}
    }
    
    signIn() {
        return { msg: 'Test: Sign in'}
    }
}
