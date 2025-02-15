import { useEffect } from "react";
import { useState } from "react"



export const useFetch = async (url, dispatch) => {

    const dataFetch = async () => {
        const resp = await fetch(url);
        const result = await resp.json();
        dispatch({
            type: 'set_properties',
            payload: result
        })
    }

    useEffect(() => {
        dataFetch()
    }, [])

}