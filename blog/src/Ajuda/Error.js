import React from 'react'

export const Error = ({error}) => {

    if (!error) return null;
    return <p style={{ color: '#ff2600', margin: '1rem 0' }}>{error}</p>
}
