import React from 'react'
import { Button } from 'react-bootstrap'

const MyButton = ({ primary, title, click }) => {
    return (
        <>
            <Button variant={primary} className='mx-2' onClick={click}>
                {title}
            </Button>
        </>
    )
}

export default MyButton
