"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState('');

  function openModal(id: number) {
    const photo = photoList.find(item => item.id == id);

    if (photo) {
      setShowModal(true);
      setImageOfModal(photo.url)
    }
  };

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>{!showModal && <h1 className="mt-10 font-bold text-5xl">Akatsuki</h1>}</div>
      <section className="my-10 gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mx-10 sm:mx-20">
        {photoList.map(item => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal && 
        <Modal image={imageOfModal} closeModal={closeModal} />
      }
    </div>
  );
}
