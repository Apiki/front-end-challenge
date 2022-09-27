import React from 'react'

export const Error = ({error}) => {

    if (!error) return null;
    return <p>{error}</p>
}
