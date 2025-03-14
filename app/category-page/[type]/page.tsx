"use client";

import {Fragment, useEffect, useState} from "react";
import {useParams} from "next/navigation";
import CategoryPage from "@/src/frontend/components/templates/category-page";

export default function Category () {

    const params = useParams();
    const [categoryType, setCategoryType] = useState<string | null>(null);

    useEffect(() => {
        if (params?.type) {
            setCategoryType(params.type as string);
        }
    }, [params]);

    if (!categoryType) {
        return;
    }

    return (
        <Fragment>
            <CategoryPage categoryType={categoryType}/>
        </Fragment>
    )
}