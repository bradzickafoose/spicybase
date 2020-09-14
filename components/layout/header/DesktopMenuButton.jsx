import { Avatar } from 'components';

export default function DropdownButton({ isOpen, setIsOpen, user }) {
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
        <Avatar src={user.profileImage} size="small" />
      </button>
    </div>
  );
}
