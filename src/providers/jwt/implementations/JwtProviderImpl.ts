import { JwtInput, JwtProvider, JwtResponse } from "../JwtProvider";
import jwt from 'jsonwebtoken';
const keySecret = '31e4cb2672cf9f02c6206249293a74031d5a80b6cd4c8bd9afc64d4b192aa1545d4d3175b61266c3b16aa977f9270ed8c130e47763892198121800782e58b588'


export class JwtProviderImpl implements JwtProvider {
    generate(input: JwtInput): JwtResponse {
        const token = jwt.sign(
            { ...input.data }, 
            keySecret,
            { subject: input.subject }
        )

        return { token }
    }
    verify(token: string): object | null {
        try {
            return jwt.verify(token, keySecret) as object;
        } catch (error) {
            return null;
        }
    }
    
}