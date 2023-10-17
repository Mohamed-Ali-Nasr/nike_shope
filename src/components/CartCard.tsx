import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import swal from "sweetalert";
import { WavyLink } from "react-wavy-transitions";
import { productCart } from "types";
import { useAppDispatch } from "hooks/redux-hooks";
import { minusCount, plusCount, removeProduct } from "store/cartSlice";

const CartCard = (product: productCart) => {
  const dispatch = useAppDispatch();

  const plusCountHandler = () => {
    dispatch(plusCount(product.id));
  };

  const minusCountHandler = () => {
    dispatch(minusCount(product.id));
  };

  const removeProductHandler = () => {
    swal({
      title: "Do you want to delete this product?",
      icon: "warning",
      buttons: ["no", "ok"],
    }).then((res: boolean) => {
      if (res) {
        dispatch(removeProduct(product.id));
      }
    });
  };

  return (
    <section className="md:w-full w-max sm-x2:flex-col sm-x2:px-5 relative flex mt-10 select-none">
      <div
        className="rounded-l"
        style={{
          background: `linear-gradient(135deg, #2a6e6a 8%, ${product.bg} 83%)`,
        }}
      >
        <WavyLink duration={1000} color="#fff" to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="w-36 sm-x2:w-[80%] sm-x2:mx-auto sm-x2:relative sm-x2:bottom-3 "
            alt="product image"
          />
        </WavyLink>
      </div>

      <div className="sm:flex-col md:w-full sm:pt-0 w-80 flex items-center justify-between px-4 py-4 bg-white rounded-r">
        <div className="sm:flex sm:items-baseline sm:justify-between sm:w-full whitespace-nowrap">
          <p>{product.title}</p>
          <p className="mt-4">${product.count * product.price.current_price}</p>
        </div>
        <div className="sm:flex sm:items-baseline sm:flex-row-reverse sm:justify-between sm:w-full">
          <div className="flex items-center justify-between gap-2">
            <span
              onClick={minusCountHandler}
              className="cursor-pointer text-[20px] px-[1px]"
            >
              -
            </span>
            <p className="bg-[#17604e66] px-2 text-[14px] rounded-md">
              {product.count}
            </p>
            <span
              onClick={plusCountHandler}
              className="cursor-pointer text-[20px]"
            >
              +
            </span>
          </div>
          <div className="flex mt-4">
            {Array(product.star)
              .fill(0)
              .map(() => (
                <AiFillStar
                  key={crypto.randomUUID()}
                  className="text-[orange]"
                />
              ))}
            {Array(5 - product.star)
              .fill(0)
              .map(() => (
                <AiOutlineStar
                  key={crypto.randomUUID()}
                  className="text-[orange]"
                />
              ))}
          </div>
        </div>
      </div>

      <div
        className="-right-3 -top-4 sm-x2:right-1 absolute p-2 bg-white rounded-full cursor-pointer"
        onClick={removeProductHandler}
      >
        <BiSolidTrashAlt className="text-red-600" />
      </div>
    </section>
  );
};

export default CartCard;
