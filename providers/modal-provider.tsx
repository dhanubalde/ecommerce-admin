"use client"

import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    /* server side*/
    if (!isMounted) {
        return null;
    }
    /* client side*/
    return (
        <>
            <StoreModal />
        </>
    );
};