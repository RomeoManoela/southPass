import { passwordItem } from '../helper/types.ts';
import { JSX } from 'react';
import { Button } from '../ui/Button.tsx';
import { deletePassword } from '../service/apis.ts';
import { useDispatch } from 'react-redux';
import { deleteAPassword } from '../user/userSlice.ts';

function Password({ password }: { password: passwordItem }): JSX.Element | null {
  const dispatch = useDispatch();
  async function handleDelete() {
    dispatch(deleteAPassword(password.id));
    await deletePassword(password.id as number);
  }

  if (password.deleted) {
    return null;
  }
  return (
    <div className='relative mb-4 rounded-lg border border-gray-300 bg-stone-200 p-4 shadow-sm transition-shadow hover:shadow-md'>
      <h3 className='text-xl font-semibold text-gray-800'>{password.title}</h3>
      <p className='mt-2 text-gray-600'>{password.description}</p>
      <p className='mt-2'>
        <strong className='text-gray-700'>Password:</strong>
        <span className='ml-2 text-gray-900'>{password.password}</span>
      </p>
      <p className='mt-2 text-sm text-gray-500'>Created at: {password.created_at}</p>
      <div className='absolute bottom-4 right-4 mt-4 flex space-x-2'>
        <Button variant={'primary'}>Edit</Button>
        <Button variant={'secondary'} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Password;
