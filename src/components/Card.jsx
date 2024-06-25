function Card({ title, image }) {
  return (
    <div
      className="p-4 flex flex-col justify-center items-center max-w-sm rounded shadow-lg cursor-pointer"
      // onClick={onClick}
    >
      <img className="w-60" src={image} alt={title} />

      <div className="font-bold text-xl py-4">{title}</div>
    </div>
  );
}

export default Card;
