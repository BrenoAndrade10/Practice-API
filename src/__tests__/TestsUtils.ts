import { find } from "../core/DependencyInjection";
import { JwtProvider, jwtProviderAlias } from "../providers/jwt/JwtProvider";



export class TestUtils {
    static async generateAuthToken(): Promise<string> {
        const jwtProvider = find<JwtProvider>(jwtProviderAlias);

        const { token } = jwtProvider.generate({ subject: '-1' });

        return `Bearer ${token}`;
    }
}