"use client";

import styles from "./contact-card.module.css";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  borderBackColor: string;
  children: ReactNode;
}

const ContactCard = ({ icon, borderBackColor, children }: Props) => {
  return (
    <div className={`${styles.card} relative w-full max-w-[300px] h-[150px]`}>
      {/* Front card */}
      <div className={`${styles.front} flex justify-center items-center`}>
        {icon}
      </div>

      {/* Back card */}
      <div
        className={`${styles.back} flex justify-center items-center border-2 ${borderBackColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactCard;
