import React from 'react';
import {Message} from "./Message";
import s from './Message.module.css';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vit',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus, eius exercitationem facilis hic\n' +
        '    minima modi non nulla obcaecati odio praesentium quaerat, quod, reiciendis sit soluta suscipit temporibus veniam\n' +
        '    voluptatem.\n',
    time: '22:00',
}

function HW1() {
    return (

        <div className={s.container}>
            <h3>homeworks 1</h3>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}
export default HW1;
