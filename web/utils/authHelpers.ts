import { useAuth } from '~/stores/useAuth';
import type { AuthState } from '~/types';

export const checkAuth = (allowedRoles: number[] = [1, 3]) => {
    const auth: AuthState = useAuth();
    return allowedRoles.includes(auth.user.role);
};

export const checkAuthNormal = (allowedRoles: number[] = [1, 2, 3]) => {
    const auth: AuthState = useAuth();
    return allowedRoles.includes(auth.user.role);
};

// TODO: remove this in production for testing only
export const viewOnly = (
    allowedRoles: Array<number | null> = [0, 1, 2, 3, null],
) => {
    const auth: AuthState = useAuth();
    return allowedRoles?.includes(auth.user.role);
};
