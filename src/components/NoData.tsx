import React from 'react'

interface INoData {
    title: string,
    image?: string
}

const NoData: React.FC<INoData> = ({title}) => {
    return (
        <div className="d-flex justify-content-center">
<h3 className="text-white">{title}</h3>
        </div>
    )
}

export default NoData
