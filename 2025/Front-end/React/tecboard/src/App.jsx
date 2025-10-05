import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { EventCard } from "./components/EventCard";
import { EventForm } from "./components/EventForm";
import { Theme } from "./components/Theme";

function App() {
  const themes = [
    {
      id: 1,
      name: "front-end",
    },
    {
      id: 2,
      name: "back-end",
    },
    {
      id: 3,
      name: "devops",
    },
    {
      id: 4,
      name: "inteligência artificial",
    },
    {
      id: 5,
      name: "data science",
    },
    {
      id: 6,
      name: "cloud",
    },
  ];

  const [events, setEvents] = useState([
    {
      cover:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    },
  ]);

  function addEvent(event) {
    // events.push(event);
    // console.log("Eventos => ", events);
    setEvents([...events, event]);
  }

  // Rederização condicional usando &&
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <EventForm themes={themes} submitted={addEvent} />
      <section className="container">
        {themes.map((theme) => {
          if (
            !events.some((event) => {
              return event.theme.id == theme.id;
            })
          ) {
            return null;
          } else {
            return (
              <section key={theme.id}>
                <Theme theme={theme} />
                <div className="events">
                  {events
                    .filter((event) => {
                      return event.theme.id == theme.id;
                    })
                    .map((event, index) => {
                      return <EventCard event={event} key={index} />;
                    })}
                </div>
              </section>
            );
          }
        })}
      </section>
    </main>
  );
}

export default App;
