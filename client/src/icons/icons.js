export const SettingsIcon = () => {
  return (
    <svg
      className='h-6 w-6 text-gray-300 hover:text-gray-50'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      fill='none'
    >
      {' '}
      <path stroke='none' d='M0 0h24v24H0z' />{' '}
      <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />{' '}
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
};

export const RunIcon = () => {
  return (
    <svg
      className='h-6 w-6 text-gray-300 hover:text-gray-50'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {' '}
      <polygon points='5 3 19 12 5 21 5 3' />
    </svg>
  );
};
