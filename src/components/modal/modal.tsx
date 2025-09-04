'use client'

import "./modal.css"

type modalProps = {
    content?: React.JSX.Element;
    onClose: () => void;
}

export default function Modal(props: modalProps) {
    const modalId = "modal"
    const modalCenterId = "modal-center"

    return (
        <div id={modalId} className={props.content ? "show no-doc-scroll" : "hide"} onClick={(e) => {
            // @ts-expect-error `e.target.id` does exist, but is being incorrectly picked up as an error.
            if (e.target.id == modalId || e.target.id == modalCenterId) {
                props.onClose()
            }
        }}>
            <div id={modalCenterId} className="centre">
                <div className="content">
                    <span className="close" onClick={props.onClose}></span>
                    {props.content ? props.content : <div></div>}
                </div>
            </div>
        </div>
    )
}