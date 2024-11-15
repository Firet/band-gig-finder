'use client'

import { useEffect, useState } from 'react';
import GigEvents from "@/constants/Event";
// import fetch from '@/utils/fetch';

export default function GigConcertBoard({ dateTitle = 'Hoy' }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response: any) => response.json())
            .then(
                (data: any) => {
                    console.log('data', data);
                    setUsers(data);
                })
            .catch((error) => console.log(error))
    };

    const gigEvents = GigEvents;
    return (
        <>
            <section className="bg-black p-2 mx-6">
                <h1 className="bg-amber-400">{dateTitle}</h1>
                <h2> {gigEvents[0].title} el {gigEvents[0].event_date.getDate()}
                    &ensp;de&ensp;{gigEvents[0].event_date.toLocaleDateString('es-ES', { month: 'long' })}</h2>
                <h2>Poseidótica en Morón</h2>
                <h2>Babasónicos en Lanús</h2>
                {users.map((user: any) => (
                    <div key={user.id}>
                        {user.name}
                    </div>
                ))}
            </section>
        </>
    );
}
