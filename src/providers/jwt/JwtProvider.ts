export type JwtProvider = {
    generate(input: JwtInput): JwtResponse;
	verify(token: string): object | null;
}

export const jwtProviderAlias = 'JwtProvider';

export type JwtInput = {
	subject: string;
    data?: Record<string,any>;
}

export type JwtResponse = {
    token: string;
}