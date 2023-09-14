import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export const useDeleteBooking = () => {
  // Access the client
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking successfuly deleted!');
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
};
