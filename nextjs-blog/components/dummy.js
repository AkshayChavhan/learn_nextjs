import React from 'react'



function Dummy() {
    // here we added "global" attribute which will cause to apply css on "Test paragraphs".
    // if we remove it then it will css from same will remove even after classname is there.
    return (
        <>
            <style jsx global>
                {`
        .dummyCss {
            background : green;
        }
        `}
            </style>
            <div className='dummyCss'>I am Dummy Components</div>
        </>
    )
}

export default Dummy