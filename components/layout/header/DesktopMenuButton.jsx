import { Avatar } from 'components';

export default function DropdownButton({ isOpen, setIsOpen }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
      >
        <Avatar avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" size="small" />
      </button>
    </div>
  );
}
