
export type HashProvider = {
    hash(text: string): Promise<string>;
	verify(text: string, hash: string): Promise<boolean>;
}

export const HashProviderAlias = 'HashProvider';

