import { Form, Navigation, useActionData, useNavigation } from 'react-router-dom';
import { Button } from '../ui/Button.tsx';
import { errorType } from '../helper/types.ts';
import { useState } from 'react';

function Login() {
  const status = useActionData() as errorType;
  const navigation: Navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';
  const [actionType, setActionType] = useState('Register');
  if (status?.action === 'Login') {
    setActionType(status.action);
  }
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 dark:bg-gray-900'>
      <Form
        method='POST'
        className='w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800'
      >
        <h1 className='mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white'>
          {actionType}
        </h1>
        {status?.error && (
          <div className='rounded-md border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/30'>
            <p className='text-sm text-red-600 dark:text-red-400'>{status.error}</p>
          </div>
        )}
        {status?.message && (
          <div className='rounded-md border border-green-200 bg-red-50 p-3 dark:border-green-800 dark:bg-green-900/30'>
            <p className='text-sm text-green-600 dark:text-green-400'>{status.message}</p>
          </div>
        )}
        <div className='space-y-4'>
          <div className='space-y-2'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              className='w-full rounded-md border border-gray-300 px-4 py-2 transition-colors duration-200 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9eeb34] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
            />
          </div>
          <div className='space-y-2'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='w-full rounded-md border border-gray-300 px-4 py-2 transition-colors duration-200 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9eeb34] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
            />
          </div>
        </div>
        <input type='hidden' name={'actionType'} value={actionType} />
        <Button
          isLoading={isSubmitting}
          loadingMessage={'submitting'}
          size='md'
          className='w-full bg-[#9eeb34] font-semibold text-gray-800 hover:bg-[#8ed42f]'
        >
          {actionType}
        </Button>
        <p
          onClick={() =>
            setActionType((type: string): 'Register' | 'Login' =>
              type === 'Register' ? 'Login' : 'Register',
            )
          }
          className={
            'mt-2 text-stone-100 transition-all duration-150 hover:text-blue-500'
          }
        >
          {actionType === 'Login'
            ? "Don't have any account ? Sign up"
            : ' Already have an account ? Login'}
        </p>
      </Form>
    </div>
  );
}

export default Login;
