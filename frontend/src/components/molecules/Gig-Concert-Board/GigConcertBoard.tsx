import GigEvents from "@/constants/Event";
export default function GigConcertBoard({ dateTitle = 'Hoy' }) {
    const gigEvents = GigEvents;
    return (
        <>
            <section className="bg-black p-2 mx-6">
                <h1 className="bg-amber-400">{dateTitle}</h1>
                <h2> {gigEvents[0].title} el {gigEvents[0].event_date.getDate()}
                    &ensp;de&ensp;{gigEvents[0].event_date.toLocaleDateString('default', { month: 'long' })}</h2>
                <h2>Poseidótica en Morón</h2>
                <h2>Babasónicos en Lanús</h2>
            </section>
        </>
    );
}
