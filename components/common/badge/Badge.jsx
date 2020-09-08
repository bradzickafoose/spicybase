import classNames from 'classnames';

export default function Badge({ size, variant, children, className, ...props }) {
  return (
    <span
      className={classNames(
        'flex-shrink-0 inline-block px-2 py-0.5 leading-4 font-medium rounded-full',
        {
          'text-sm': size === 'small',
          'text-xs': size === 'xsmall',
          'text-teal-100 bg-teal-800': variant === 'active',
          'text-teal-800 bg-teal-100': variant === 'inactive',
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
