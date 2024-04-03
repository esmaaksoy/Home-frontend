import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
  const { thumbnail, price, title, description, _id } = item
  const navigate = useNavigate();

  return (
    <a
      href="#"
      className="group block"
      onClick={() =>
        navigate(`/home/products/${_id}`)
      }
    >
      <img
        src={thumbnail}
        alt="image"
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <p className="mt-1.5 text-pretty text-xs text-gray-500">
            {description}
          </p>
        </div>

        <p className="text-gray-900">${price}</p>
      </div>
    </a>
  );
};

export default Card;
