import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success('Account successfuly created'),
    onError: () => toast.error('Failed to create your account'),
  });

  return { signup, isLoading };
};

export default useSignup;
