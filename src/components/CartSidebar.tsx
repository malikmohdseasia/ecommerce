import { useNavigate } from "react-router-dom";
import { CrossCart, crossIcon, Xicon } from "../assets/Icons";

const CartSidebar = ({ cartShow, setCartShow, cartArr, setCartArr, setIsOpen }: any) => {

    const navigate = useNavigate();

    const handleRemoveItem = (id: number) => {
        setCartArr(cartArr.filter((item: any) => item.id !== id));
    };

    let subtotal = 0;

    cartArr.forEach((item: any) => {
        subtotal += item.price * item.quantity * 83;
    });

    subtotal = Math.round(subtotal);




    return (
        <>

        {
            cartShow && <div className="fixed inset-0 bg-black/50 z-40"></div>
        }

            {cartShow && <div className="fixed z-50 top-0 right-0 bg-white px-5 py-7 h-[90vh] overflow-y-scroll scrollbar-hide ">
                <div className="flex justify-between items-center gap-10 lg:gap-0">
                    <h1 className="font-poppins font-semibold text-[24px]">Shopping Cart</h1>
                    <button className="cursor-pointer"
                        onClick={() => setCartShow(false)}
                    >  {CrossCart}</button>
                </div>

                <hr className="border border-hrLine mt-6.5" />

                <div className="mt-10.5 flex flex-col gap-5">
                    {cartArr.length === 0 && (
                        <p className="text-center text-footer font-poppins">
                            Cart is empty
                        </p>
                    )}

                    {cartArr && cartArr?.map((item: any) => (
                        <div key={item.id} className="flex flex-col lg:flex-row items-center">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>

                            <div className="lg:ml-8 lg:mr-15 lg:w-45 text-center lg:text-start">
                                <h1 className="font-poppins w-full">{item.title}</h1>

                                <div className="flex items-center gap-3.75 justify-center lg:justify-start">
                                    <p className="font-poppins font-light">{item.quantity}</p>
                                    {Xicon}
                                    <p className="font-medium text-[12px] text-[#B88E2F]">
                                        Rs. {Math.round(item.price * item.quantity * 83)}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="cursor-pointer"
                            >
                                {crossIcon}
                            </button>
                        </div>
                    ))}
                </div>


                <div className="mt-30.25">
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-25.25">
                        <h1 className="font-poppins text-center lg:text-start">Subtotal</h1>
                        <p className="font-poppins text-[#B88E2F] font-semibold text-center lg:text-start">
                            Rs. {subtotal}
                        </p>

                    </div>

                    <hr className="border border-hrLine mt-5.75" />

                    <div className="flex flex-col lg:flex-row items-center gap-3.5 mt-6.5">
                        <button className="py-1.5 px-7.5 border rounded-full font-poppins text-[12px] cursor-pointer"
                            onClick={() => {
                                navigate('/cart')
                                setCartShow(false)
                                setIsOpen(false)
                            }}
                        >cart</button>
                        <button className="py-1.5 px-7.5 border rounded-full font-poppins text-[12px] cursor-pointer"
                        onClick={()=>{navigate("/checkout")
                              setCartShow(false);
                              setIsOpen(false)
                        }}
                        
                        >Checkout</button>
                        <button className="py-1.5 px-7.5 border rounded-full font-poppins text-[12px] cursor-pointer">Comparison</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CartSidebar
