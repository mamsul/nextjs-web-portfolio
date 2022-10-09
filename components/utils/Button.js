export default function Button({ href, className, children, variant, pill }) {
  const variants = {
    "outline-button": "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
    "normal-button": "bg-yellow-600 hover:-translate-y-0.5 active:-translate-y-0 text-black",
    "black-button": "bg-black text-white hover:opacity-90 hover:-translate-y-1 active:-translate-y-0",
  };

  return (
    <a
      href={href}
      className={`${pill && 'rounded-full'} transition py-2 md:py-2.5 font-medium md:font-semibold font-main inline-block ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
