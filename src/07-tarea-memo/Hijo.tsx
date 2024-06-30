import React, { memo } from 'react'

interface Props {
    numero: number,
    incrementar: (numero: number) => void,
}

export const Hijo = memo(({ numero, incrementar }: Props) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
})
