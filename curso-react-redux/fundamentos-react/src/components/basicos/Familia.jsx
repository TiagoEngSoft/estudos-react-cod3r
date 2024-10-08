import React, { cloneElement } from "react";

export default (props) => {
    //Fundamentos aula 28
    return (
        <div>
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    );
};
