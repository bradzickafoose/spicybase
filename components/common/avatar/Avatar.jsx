import classNames from 'classnames';

export default function Avatar({
  alt,
  src,
  size = 'base',
  variant = 'rounded',
  className,
  ...props
}) {
  return src ? (
    <img
      className={classNames(
        {
          'w-60 h-60': size === 'xlarge',
          'w-20 h-20': size === 'large',
          'w-12 h-12': size === 'base',
          'w-8 h-8': size === 'small',
          'w-6 h-6': size === 'xsmall',
        },
        { 'rounded-full': variant === 'circular', 'rounded-lg': variant === 'rounded' },
        className,
      )}
      src={src}
      alt={alt}
      {...props}
    />
  ) : (
    <span
      className={classNames(
        'inline-block overflow-hidden bg-gray-100 rounded-full',
        {
          'w-32 h-32': size === 'xlarge',
          'w-20 h-20': size === 'large',
          'w-12 h-12': size === 'base',
          'w-8 h-8': size === 'small',
          'w-6 h-6': size === 'xsmall',
        },
        className,
      )}
      {...props}
    >
      <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
}
