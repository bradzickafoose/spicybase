import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center flex-shrink-0">
        <h1 className="text-xl font-medium leading-tight text-red-600">
          Spicy<span className="font-bold">base</span>
        </h1>
      </a>
    </Link>
  );
}
