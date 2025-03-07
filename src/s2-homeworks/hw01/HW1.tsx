import React from 'react'
import {Message} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import styled from "@emotion/styled";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: TextMessageType
}
export type UserType = {
    avatar: string
    name: string
}
export type TextMessageType = {
    text: string
    time: string
}
// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <Main id={'hw1'}>
            <TaskName className={s2.hwTitle}>Homework #1</TaskName>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <MessageArea>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </MessageArea>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </Main>
    )
}

export default HW1


const Main = styled.div`
    padding: 70px;

`
const TaskName = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
`
const MessageArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`