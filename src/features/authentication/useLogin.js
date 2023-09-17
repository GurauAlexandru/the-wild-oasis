import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user); //this is for manualy set data into react query cache
      toast.success('Log in successfuly');
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR: ', err);
      toast.error(err.message);
      //   toast.error('Wrong email or password');
    },
  });

  return { login, isLoading };
};
