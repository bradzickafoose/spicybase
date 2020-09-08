// Full-width on mobile, constrained with padded content above
export default function Container({ children }) {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}
