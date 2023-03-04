import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";
import Link from "next/link";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="jiwon" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
