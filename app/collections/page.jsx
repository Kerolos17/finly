"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@/app/ClientImports";
import "./collection.css";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getClollections } from "../redux-system/slices/collectionsSlice";

function CollectionsPage() {
  const dispatch = useDispatch();
  const { collections } = useSelector((state) => state.collectionData);

  useEffect(() => {
    dispatch(getClollections());
  }, [dispatch]);

  return (
    <div className="px-5 flex flex-col justify-center items-center w-full mt-[10em]">
      <h1 className="text-2xl mt-[2em] tracking-widest font-thin">
        ALL COLLECTIONS
      </h1>
      <div className="flex flex-wrap	gap-[2em] justify-center items-center w-full mt-[3em]">
        {collections?.women?.map((card, index) => (
          <Card
            key={index}
            shadow={false}
            className="relative grid h-[45rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_API_BASE_URL
                }/${card.image.replace(/ /g, "%20")})`,
              }}
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="absolute w-full bottom-0 py-14 px-6 md:px-12 flex justify-end flex-col">
              <div
                variant="h5"
                className="mb-4 absolute bottom-[6rem] text-white text-2xl left-[-3rem] w-full"
              >
                <p className="uppercase">{card.category_description.name}</p>
              </div>
              <div className="absolute bottom-6 w-full left-[-3rem]">
                <Button className="btn">
                  <Link href={`/collections/${card.category_id}`}>View Products</Link>
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <hr className="w-full mt-[2em]" />
    </div>
  );
}

export default CollectionsPage;