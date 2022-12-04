export const HeaderComponent = ({ header, title, description }) => {
  return (
    <div className="bg-stone-100">
      <h2 className="leading-loose uppercase">{header}</h2>
      <p className="text-6xl leading-loose font-bold">{title}</p>
      <p className="text-2xl leading-loose">{description}</p>
    </div>
  );
};
