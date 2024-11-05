import GigConcertBoard from "@/components/molecules/Gig-Concert-Board/GigConcertBoard";


export default function GigSection() {

  const ConcertBoardDates = {
    yesterday: 'Ayer', today: 'Hoy', tomorrow: 'Mañana'
  };
  return (
    <section className="flex flex-row mt-[14rem]">
      <GigConcertBoard dateTitle={ConcertBoardDates.yesterday} />
      <GigConcertBoard dateTitle={ConcertBoardDates.today} />
      <GigConcertBoard dateTitle={ConcertBoardDates.tomorrow} />
    </ section>
  );
}
