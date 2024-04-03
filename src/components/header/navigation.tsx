"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const arrMenuData = [
  {
    id: 1,
    title: "Главная",
    src: "/",
    active: "main",
  },
  {
    id: 2,
    title: "Подбор оправ",
    src: "/selection-of-lenses",
    active: "lenses",
  },
  {
    id: 3,
    title: "Изготовление очков",
    src: "/glasses-making",
    active: "making",
  },
  {
    id: 4,
    title: "Тонировка линз",
    src: "/lens-tinting",
    active: "tinting",
  },
  {
    id: 5,
    title: "О компании",
    src: "/about-company",
    active: "about",
  },
  {
    id: 6,
    title: "Контакты",
    src: "/contacts",
    active: "contacts",
  },
];

type ActiveLinkProps = {
  activeLink: String;
};

export function Navigation({ activeLink }: ActiveLinkProps) {
  const [mBtnStatus, setMBtnStatus] = useState(false);
  function toggleMBtnMenu() {
    mBtnStatus ? setMBtnStatus(false) : setMBtnStatus(true);
  }

  return (
    <div className="bg-[#0CAFC4] max-w-maxw3big">
      <ul
        className={cn(
          "list-none max-w-maxwbig flex mx-auto justify-between px-[5px]",
          "lg-max:fixed lg-max:z-10 lg-max:top-0 lg-max:justify-center lg-max:flex-col",
          "lg-max:min-w-[220px] lg-max:m-0 lg-max:bg-[#0CAFC4] lg-max:h-[100vh]",
          "lg-max:duration-100",
          mBtnStatus ? "right-0" : "right-[-300px]",
        )}
      >
        {arrMenuData?.map((item) => {
          return (
            <li
              className={cn(
                activeLink === item.active ? "is-active-nav-link" : null,
                "py-[15px] relative text-center",
              )}
              key={item.id}
            >
              <Link
                href={item.title}
                className="not-italic font-bold text-lg tracking-wider text-[#FFFFFF]"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        className="fixed top-0 right-0 z-20 items-center justify-center p-0 border-none bg-[#0CAFC4] rounded
                        outline-none lg-max:flex hidden"
        onClick={toggleMBtnMenu}
      >
        <svg
          className={
            mBtnStatus ? "ham hamRotate ham1 active" : "ham hamRotate ham1"
          }
          viewBox="0 0 100 100"
          width="50"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
    </div>
  );
}
