import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import styled from "@emotion/styled";

type FriendMessageType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <StyleMessage className={s.friendImageAndText}>
                <StyledImage
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt={'warning'}
                />
                <StyleTextBlock className={s.friendText}>
                    <StyleName
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {
                            props.message.user.name
                        }
                    </StyleName>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                       {props.message.message.text}
                    </pre>
                </StyleTextBlock>
            </StyleMessage>
            <StyleTime
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time}
            </StyleTime>
        </div>
    )
}

export default FriendMessage


const StyledImage = styled.img `
    width: 48px;
    height: 48px;
    font-weight: 600;
;
`
const StyleMessage = styled.div `
    display: flex;

`

const StyleTextBlock = styled.div `
    background-color: rgba(245, 247, 251, 1);
    margin-left: 10px;
    padding: 5px 13px 0 10px;
    color: black;
    border-radius: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    :after {
        content: "";
        position: absolute;
        right: 18px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid rgba(245, 247, 251, 1);
    }
    
`
const StyleName = styled.div `
    display: flex;
    justify-content: left;
`
const StyleTime = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 10px;
    padding-left: 13px;
`