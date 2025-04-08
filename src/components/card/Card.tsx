import {PropsWithChildren} from "react";
import "./Card.scss";

interface CardProps extends PropsWithChildren {}

export function Card(props: PropsWithChildren){
    return <div className="card">
        {props.children}
    </div>
}