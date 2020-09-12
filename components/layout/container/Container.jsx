// Full-width on mobile, constrained with padded content above
export default function Container({ children }) {
  return <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">{children}</div>;
}
