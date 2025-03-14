"use client";

import { Fragment, useEffect, useState } from "react";
import ProductDetailPage from "@/src/frontend/components/templates/product-detail-page";
import { useParams } from "next/navigation";

export default function ProductDetails() {
    const params = useParams(); // useParams agora retorna uma Promise
    const [clotheID, setClotheID] = useState<string | null>(null);

    useEffect(() => {
        if (params?.clotheID) {
            setClotheID(params.clotheID as string);
        }
    }, [params]);

    if (!clotheID) {
        return <p>Carregando...</p>;
    }

    return (
        <Fragment>
            <ProductDetailPage clotheId={clotheID}/>
        </Fragment>
    );
}
