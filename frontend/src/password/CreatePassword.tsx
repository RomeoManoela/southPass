import { FormEvent, useState } from 'react';
import { generatePassword } from '../helper/functions.ts';
import { EyeSlashIcon } from '@heroicons/react/16/solid';
import { EyeIcon } from 'lucide-react';
import { createPassword } from '../service/apis.ts';
import { useDispatch } from 'react-redux';
import { addPassword } from '../user/userSlice.ts';

function CreatePassword({ onsetCreate }: { onsetCreate: (params: boolean) => void }) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await createPassword({ title, description, password });
    dispatch(addPassword(res));
    setTitle('');
    setDescription('');
    setPassword('');
    onsetCreate(false);
  }
  function handleGen(e: FormEvent) {
    e.preventDefault();
    const res: string = generatePassword();
    setPassword(res);
  }
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Fond flou */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
        onClick={() => onsetCreate(false)}
      ></div>

      {/* Modal */}
      <div className='relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='text-xl font-semibold text-gray-800'>Create Password</h2>
        <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Description</label>
            <input
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <div className='relative flex items-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {showPassword ? (
                  <EyeSlashIcon className='h-5 w-5' />
                ) : (
                  <EyeIcon className='h-5 w-5' />
                )}
              </button>
            </div>
            <button
              onClick={handleGen}
              className={'p-0.5- mt-2 rounded bg-lime-950 text-stone-100'}
            >
              Auto generate
            </button>
          </div>
          <div className='flex justify-end space-x-2'>
            <button
              type='button'
              onClick={() => onsetCreate(false)}
              className='rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
