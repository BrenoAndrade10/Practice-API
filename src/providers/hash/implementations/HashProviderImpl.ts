import * as bcrypt from 'bcrypt';
import { HashProvider } from "../HashProvider";

export class HashProviderImpl implements HashProvider {
    hash(text: string): Promise<string> {
        return bcrypt.hash(text, 14);
    }
    verify(text: string, hash: string): Promise<boolean> {
        return bcrypt.compare(text, hash);
    }

}