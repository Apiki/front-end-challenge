interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="w-fit inline-block font-bold text-2xl md:text-4xl text-dark">
      {children}
    </h2>
  );
}
