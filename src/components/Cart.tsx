import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import Logo from "../assets/Navbar/logo.png";
import { useNavigate } from "react-router-dom";
import Award from "./Award";
import { DeleteIcon } from "../assets/Icons";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ cartArr, setCartArr }: any) => {

    const formatINR = (price: any) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(price * 90);
    };


    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);


    const removeItem = (id: any) => {
        const updatedCart = cartArr.filter((item: any) => item.id !== id);
        setCartArr(updatedCart);
        toast.success('Successfully Removed!', {
position: "bottom-center",
});
    };


    let subtotal:any = 0;
    cartArr.forEach((item: any) => {
        subtotal += item.price * item.quantity*90;
    });
    subtotal = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(subtotal);

    const navigate = useNavigate();

    const columns = [
        {
            name: '',
            selector: (row: any) => row.title,
            cell: (row: any) => (
                <div className="flex items-center gap-1 mt-5">
                    <img
                        src={row.image}
                        alt={row.title}
                        className="w-20 h-20 object-contain"
                    />

                </div>
            ),
        },
        {
            name: 'Product',
            selector: (row: any) => row.title,
            cell: (row: any) => (
                <div className="flex items-center">

                    <div className="font-poppins text-footer w-25">
                        {row.title}
                    </div>
                </div>
            ),
        },
        {
            name: 'Price',
            cell: (row: any) => (
                <span className="font-poppins text-footer">
                 {formatINR(row.price)}
                </span>
            ),
        },
        {
            name: 'Quantity',
            cell: (row: any) => (
                <span className="flex items-center justify-center w-8 h-8 border border-footer rounded-[5px]">
                    {row.quantity}
                </span>
            ),
        },
        {
            name: 'Subtotal',
            cell: (row: any) => (
                <span className="font-poppins">
                    {formatINR(row.quantity*row.price)}
                </span>
            ),
        },
        {
            name: 'Actions',
            cell: (row: any) => (
                <button
                    className="cursor-pointer"
                    onClick={() => {
                        setDeleteId(row.id);
                        setOpenDeleteModal(true);
                    }}
                >
                    {DeleteIcon}
                </button>

            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                borderBottom: 'none',
                padding: '10px 0 10px 0'
            }
        },
        headRow: {
            style: {
                backgroundColor: "#F9F1E7",
                borderBottom: 'none'
            }
        }
    }




    return (
        <div className="">

            {openDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-xl p-6 w-container max-w-md">
                        <h3 className="text-lg font-semibold text-red-600 font-poppins">
                            Delete Item
                        </h3>

                        <p className="mt-2 text-gray-600 mb- font-poppins">
                            Are you sure you want to delete this item?
                        </p>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setOpenDeleteModal(false)}
                                className="font-poppins px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    removeItem(deleteId);
                                    setOpenDeleteModal(false);
                                }}
                                className="font-poppins px-5 py-2 rounded-md bg-[#B88E2F] text-white hover:bg-red-600 cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <div className="bg-[url(./assets/shopImg.jpg)] h-79 bg-cover bg-center w-full relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>

                <div className="relative z-20 flex flex-col items-center justify-center ">
                    <img src={Logo} alt="" className="object-contain" />

                    <h1 className="text-[#000000] text-[35px] lg:text-[48px] font-medium">Cart</h1>
                    <div className="flex items-center">

                        <Breadcrumb aria-label="Default breadcrumb example" className="flex items-center
            group-first:hidden
            ">
                            <BreadcrumbItem
                                href="/home"
                                className="flex items-center"
                            >
                                <p className="font-poppins font-medium text-lg">Home</p>
                            </BreadcrumbItem>

                            <BreadcrumbItem href="/shop" className="flex items-center">
                                <p className="font-poppins font-light text-[16px]">Shop</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="px-5 lg:px-25 lg:py-18">
                <div className="flex flex-col lg:flex-row justify-between gap-7.5">
                    <div className="w-full">
                        <div className="py-3.75 w-full ">
                            <DataTable
                                columns={columns}
                                data={cartArr}
                                customStyles={customStyles}
                                noDataComponent={
                                    <h1 className="font-poppins text-footer ">No Items In Cart!</h1>
                                }
                            />
                        </div>

                      
                    </div>

                    <div className="bg-[#F9F1E7] px-5 lg:px-21.25">
                        <h1 className="pt-3.75 font-semibold text-[18px] lg:text-[32px] font-poppins text-center lg:text-start">
                            Cart Totals
                        </h1>

                        <div className="pt-15.25 flex items-center justify-between">
                            <h2 className="font-poppins">Subtotal</h2>
                            <h2 className="font-poppins text-footer">
                                Rs. {subtotal}
                            </h2>
                        </div>

                        <div className="pt-7.75 flex items-center justify-between">
                            <h2 className="font-poppins">Total</h2>
                            <h2 className="font-medium font-poppins text-[#B88E2F]">
                                Rs. {subtotal}
                            </h2>
                        </div>

                        <div className={`pt-12 pb-20 flex justify-center ${cartArr.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            <button className={`${cartArr.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} w-55.5  h-14.5 border rounded-[15px] font-poppins`}
                                onClick={() => navigate("/checkout")}
                                disabled={cartArr.length === 0}
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Award />
        </div>
    );
};

export default Cart;
