
export default function GigConcertBoard({dateTitle= 'Hoy'}) {
    return (
        <>
            <section className="bg-black p-2 mx-6">
                <h1 className="bg-amber-400">{dateTitle}</h1>
                <h2>Poseidótica en Morón</h2>
                <h2>Babasónicos en Lanús</h2>
            </section>
        </>
    );
}
