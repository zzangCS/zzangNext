import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const events = getAllEvents(); //전체 이벤트 가져오기
  const router = useRouter();

  function findEventsHandler(yearn, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
