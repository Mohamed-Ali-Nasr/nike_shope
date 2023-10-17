import { WavyLink } from "react-wavy-transitions";
import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { useAppSelector } from "hooks/redux-hooks";
import { selectCart } from "store/cartSlice";
import CartCard from "components/CartCard";

const Basket = () => {
  const cart = useAppSelector(selectCart);

  const [total, setTotal] = useState(0);

  const totalPrice = useRef<number>();

  useEffect(() => {
    totalPrice.current = 0;

    cart.map((product) => {
      totalPrice.current += product.count * product.price.current_price;
    });

    setTotal(totalPrice.current);
  }, [cart]);

  const purchaseHandler = () => {
    swal({
      title: "Coming Soon...",
      icon: "warning",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      buttons: "ok" as any,
    });
  };

  return (
    <div className="bg-[#024742] px-8 sm-x2:px-4 mt-20">
      {cart.length ? (
        <main className="h-[100vh] md:h-full md:pb-20 md:gap-5 flex lg:gap-20 md:flex-col gap-10 py-10">
          <section className="md:w-full w-1/2 pt-12">
            <p className="sm-x2:text-2xl my-8 text-5xl text-white">Products:</p>
            <hr className="w-full" />
            {cart.map((product) => (
              <CartCard key={crypto.randomUUID()} {...product} />
            ))}
          </section>

          <section className="pt-12 w-1/2 md:w-full md:pt-6 sm-x2:!pt-0">
            <p className="sm-x2:text-2xl my-8 text-5xl text-white">Check out</p>
            <hr className="w-full" />
            <div className="relative mt-8 lg:w-full w-[400px] text-[rgb(0,59,8)] z-[999] rounded-3xl sm-x2:px-6 p-8 bg-[#ecf0f3] ">
              <div className="text-left sm-x2:text-[20px] text-2xl   gap-5 mx-auto font-bold flex">
                <p>Total :</p>
                <p>$ {total}</p>
              </div>
              <p className=" text-[15px] mt-4 tracking-tight  ">
                Taxes and shipping calculated at checkout
              </p>
              <button
                onClick={purchaseHandler}
                className="text-1xl w-full py-2 rounded-md transition-colors hover:bg-[rgb(0,59,8)] text-white mt-6 bg-[#024742]"
              >
                purchase
              </button>
            </div>
          </section>
        </main>
      ) : (
        <main className="w-max block pt-48 pb-56 mx-auto text-center">
          <img
            src="/images/icons8-basket-100.png"
            className="mx-auto"
            alt="basket"
          />
          <p className="  sm-x2:text-[22px] my-4 text-white text-3xl">
            Your Cart Is Empty :((
          </p>
          <WavyLink duration={1000} color="#024742" to="/">
            <div className="border border-solid border-white text-white px-3 hover:text-[#024742] hover:bg-white transition-colors py-2 mt-6 rounded-md w-fit mx-auto">
              Go shopping
            </div>
          </WavyLink>
        </main>
      )}
    </div>
  );
};

export default Basket;
