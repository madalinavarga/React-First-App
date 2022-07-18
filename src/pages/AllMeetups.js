import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetups] = useState([]);
  useEffect(() => {//conditioneaza cand sa se execute 
    setIsLoading(true);
    fetch(
      "https://react-first-app-576e1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json(); //ne da acces la date + return un promise
      })
      .then((data) => {//object with elements 
        const meetups=[];
        for(const key in data){
          const meetup={
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); //al doilea argument pune conditia(o singura data la incarcare daca e gol)

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}
export default AllMeetupsPage;
