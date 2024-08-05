import React from 'react'
import s from './Message.module.css'
import {MessageType, TextMessageType} from "../HW1";
import styled from "@emotion/styled";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
export const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <StyleMessage className={s.imageAndText}>
                <StyledImage
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt={'cry baby'}
                />
                <StyleTextBlock className={s.text}>
                    <StyleName id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </StyleName>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
                    </pre>
                </StyleTextBlock>
            </StyleMessage>
            <StyleTime id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}
            </StyleTime>
        </div>
    )
}

const StyledImage = styled.img `
    width: 48px;
    height: 48px;
    font-weight: 600;
;
`
const StyleMessage = styled.div `
    display: flex;
    flex-direction: row-reverse;
    
`

const StyleTextBlock = styled.div `
    background-color: rgba(0, 102, 204, 1);
    margin-right: 10px;
    padding: 5px 13px 0 10px;
    color: white;
    font-family: 'Montserrat', sans-serif ;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    border-radius: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    :after {
        content: "";
        position: absolute;
        right: -8px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid rgba(0, 102, 204, 1);
    }
    
`
const StyleName = styled.div `
    display: flex;
    justify-content: right;
    font-size: 18px;
    font-weight: 600;
`
const StyleTime = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 10px;
    padding-right: 13px;
`

