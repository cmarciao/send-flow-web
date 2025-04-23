import { useContext } from 'react';
import { AuthContext } from '@/core/contexts/auth-context';

export function useAuth() {
	const { user } = useContext(AuthContext);

	return {
		user
	};
}
