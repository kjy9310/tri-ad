import * as React from "react";

export interface CardProps {
    id: number
    title: string
    description: string
    url: string
    votes: number
    submitterAvatarUrl: string
    productImageUrl: string
    onClickCallback: (id: number) => void
}

export const Card: React.FC<CardProps> =
    ({ id, title, description, url, votes, submitterAvatarUrl, productImageUrl, onClickCallback }) => (
        <div className="card">
            <div className="product-image-box">
                <img alt={`product-${id}`}src={productImageUrl} />
            </div>
            <div className="content">
                <div className="top">
                    <a className="vote" onClick={()=>onClickCallback(id)}>
                        <img alt={`vote-up-${id}`} src="images/ui/arrow.png" />
                    </a>
                    <span className="count">{votes}</span>
                </div>
                <div className="mid">
                    <a className="title" href={url}>{title}</a>
                    <span className="description">{description}</span>
                </div>
                <div className="bot">
                    <span className="submitter">
                        <span>Submitted by: </span>
                        <div className="submitter-image-box">
                            <img alt={`submitter-${id}`} src={submitterAvatarUrl}/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )