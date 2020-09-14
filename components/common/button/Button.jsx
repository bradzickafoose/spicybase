import classNames from 'classnames';
import Icon from '../icon/Icon';

export default function Button({
  type = 'button',
  icon,
  size,
  variant = 'primary',
  children,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={classNames(
        className,
        'relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out border border-transparent rounded-full focus:outline-none',
        {
          'border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50':
            variant === 'outlined',
          'text-white shadow-sm bg-green-600 hover:bg-green-500 focus:border-green-700 focus:shadow-outline-green active:bg-green-700':
            variant === 'primary',
        },
      )}
      {...props}
    >
      {icon && <Icon icon={icon} size={size} />}
      <span>{children}</span>
    </button>
  );
}
