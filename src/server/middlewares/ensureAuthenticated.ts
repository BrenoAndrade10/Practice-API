import { NextFunction, Request, Response } from "express";
import { JwtProvider, jwtProviderAlias } from "../../providers/jwt/JwtProvider";
import { find } from "../../core/DependencyInjection";


export async function _ensureAuthenticated(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const token = (req.headers.authorization ?? '').split(' ')[1] ?? '';
    if (!token) throw Error('UNAUTHORIZED');

	const jwtProvider = find<JwtProvider>(jwtProviderAlias);

    const payload = jwtProvider.verify(token);
    if (!payload) throw Error('UNAUTHORIZED');

	const { sub } = payload as { sub: string };
    
    req.user = {
        id: parseInt(sub, 10)
    }
    
    next();
}