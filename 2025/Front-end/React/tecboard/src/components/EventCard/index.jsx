import "./event-card.styles.css";

export function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.cover} />
      <div className="body">
        <p className="tag">{event.theme.name}</p>
        <p className="date">{event.date.toLocaleDateString("pt-PT")}</p>
        <h4 className="title">
            {event.title}
        </h4>
      </div>
    </div>
  );
}
