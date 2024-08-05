import React, {useEffect, useRef, useState} from 'react'
import { message0 } from '../HW1'
import s from './MessageSender.module.css'
import styled from "@emotion/styled";

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <StyleForm id={'hw1-send-message-form'} className={s.sendForm}>
                <StyleTextArea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}

                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}

                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <StyleSendButton
                    id={'hw1-button'}
                    className={s.button}

                    onClick={addMessage}
                >
                    {/*текст кнопки могут изменить студенты*/}
                    Send
                    {/**/}
                </StyleSendButton>
            </StyleForm>
        </>
    )
}

export default MessageSender

const StyleSendButton = styled.button`
    width: 120px;
    border-radius: 20px;
    border-color: transparent;
    color: white;
    background-color: rgba(0, 102, 204, 1);
    font-size: 16px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    padding-inline: 10px;
    height: 40px;
`

const StyleForm =styled.div`
    display: flex;
    justify-content: space-between;
    gap: 44px;
    align-items: flex-end;
`

const StyleTextArea = styled.textarea`
    background-color: rgba(245, 247, 251, 1);
    border-radius: 20px;
    border-color: transparent;
    font-size: 14px;
    font-family:'Montserrat', sans-serif;
    min-height: 40px;
    width: 976px;
    padding: 12px 0 11px 24px;
    resize : none;
    overflow: hidden;
`