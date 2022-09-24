import MeetupDetail from "../../components/meetups/MeetupDetail";

import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const MeetupDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://mo-diab:Hope2022@cluster0.akwnsty.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetupIdList = await meetupCollection.find({}, { _id: 1 }).toArray();

  // console.log(meetupIdList);

  client.close();

  return {
    fallback: false,
    paths: meetupIdList.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://mo-diab:Hope2022@cluster0.akwnsty.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetup = await meetupCollection.findOne({ _id: ObjectId(meetupId) });

  // console.log(meetup);

  client.close();

  return {
    props: {
      meetupData: {
        image: meetup.image,
        id: meetupId,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
