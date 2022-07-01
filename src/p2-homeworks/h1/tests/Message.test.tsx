import React from 'react'
import {render} from '@testing-library/react'
import {Message} from "../Message";

test('find text "test message name"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name="test message name"
            message=""
            time=""
        />
    ))
    const linkElement = getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})
