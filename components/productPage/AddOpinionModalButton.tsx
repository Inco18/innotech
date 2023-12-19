"use client";
import { supabase } from "@/utils/supabase";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import ReactTextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";
import SmallSpinner from "../ui/SmallSpinner";

type Props = {
  productImage: string;
  productModel: string;
  productId: number;
};

const AddOpinionModalButton = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [starsSelected, setStarsSelected] = useState(6);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email")?.toString();
    const description = formData.get("description")?.toString();
    const username = formData.get("name")?.toString();
    setIsSending(true);
    const { data, error } = await supabase.from("opinions").insert({
      rating: starsSelected,
      email,
      description,
      product_id: props.productId,
      username,
    });
    setIsSending(false);

    if (error) toast.error(error.code + ": " + error.details);
    else {
      toast.success("Your opinion has been added.");
      router.refresh();
      setModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white py-2 w-full md:w-auto md:px-10 rounded-lg md:mt-4 text-sm hover:bg-blue-600 transition-colors"
      >
        Add opinion
      </button>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          <Transition.Child
            enter="transition duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div
              className="fixed inset-0 bg-black/60 z-[998]"
              aria-hidden="true"
            />
          </Transition.Child>
          <div className="fixed inset-0 flex w-screen z-[999] items-center justify-center">
            <Transition.Child
              enter="transition duration-300"
              enterFrom="transform translate-y-[5rem] opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-200"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform translate-y-[5rem] opacity-0"
              as={Fragment}
            >
              <Dialog.Panel className="h-full md:h-[90%] bg-white rounded-lg w-full max-w-xl flex flex-col">
                <Dialog.Title
                  className="py-2 px-4 border-b-2 border-gray-200 flex items-center gap-2 font-semibold text-lg"
                  tabIndex={0}
                >
                  Add opinion
                  <IoIosClose
                    className="text-4xl rounded-md hover:bg-gray-200 cursor-pointer ml-auto"
                    onClick={() => setModalOpen(false)}
                  />
                </Dialog.Title>
                <div className="overflow-y-auto">
                  <div className="flex items-center text-sm border-b-8 p-4 border-gray-100">
                    <Image
                      src={props.productImage}
                      width={60}
                      height={60}
                      alt={props.productModel}
                    />
                    {props.productModel}
                  </div>
                  <form onSubmit={handleSubmit} id="opinionForm">
                    <div className="flex flex-col items-center p-5 border-b-2">
                      <h4>Your product rating</h4>
                      <div className="flex group text-3xl m-4 cursor-pointer">
                        <div
                          className={`text-amber-400 peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(1)}
                        >
                          <FaStar />
                        </div>
                        <div
                          className={`${
                            starsSelected >= 2
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          } peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(2)}
                        >
                          <FaStar />
                        </div>
                        <div
                          className={`${
                            starsSelected >= 3
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          } peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(3)}
                        >
                          <FaStar />
                        </div>
                        <div
                          className={`${
                            starsSelected >= 4
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          } peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(4)}
                        >
                          <FaStar />
                        </div>
                        <div
                          className={`${
                            starsSelected >= 5
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          } peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(5)}
                        >
                          <FaStar />
                        </div>
                        <div
                          className={`${
                            starsSelected >= 6
                              ? "text-amber-400"
                              : "text-gray-300 group-hover:text-amber-400"
                          } peer-hover:text-gray-300 px-2 peer`}
                          onClick={() => setStarsSelected(6)}
                        >
                          <FaStar />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">
                        Write what you think about this product
                      </h4>
                      <p className="text-sm">
                        Remember that your review should concern the product and
                        its functionality.
                      </p>
                      <label className="text-sm flex flex-col my-7">
                        <p>
                          What do you think about this product?{" "}
                          <span className="text-gray-600">(optional)</span>
                        </p>
                        <ReactTextareaAutosize
                          name="description"
                          minRows={3}
                          className="resize-none border-2 rounded-lg p-2 outline-none focus:border-gray-600"
                        />
                      </label>
                      <label className="text-sm">
                        <p className="mb-2">Name</p>
                        <input
                          type="text"
                          name="name"
                          required
                          className="border-2 rounded-lg p-2 outline-none focus:border-gray-600 w-full mb-3"
                        />
                      </label>
                      <label className="text-sm">
                        <p className="mb-2">E-mail</p>
                        <input
                          type="email"
                          name="email"
                          required
                          className="border-2 rounded-lg p-2 outline-none focus:border-gray-600 w-full"
                        />
                      </label>
                      <p className="text-xs my-1">
                        Your email address will not be visible after adding your
                        opinion.
                      </p>
                    </div>
                    <button type="submit" hidden />
                  </form>
                </div>
                <div className="flex justify-end p-4 border-t-2 mt-auto">
                  <button
                    className="bg-blue-500 py-2 w-36 rounded-lg text-white hover:bg-blue-600 transition-colors flex justify-center items-center disabled:bg-blue-500"
                    form="opinionForm"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? <SmallSpinner /> : "Add opinion"}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddOpinionModalButton;
