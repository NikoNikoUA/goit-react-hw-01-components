import css from './Statistics.module.css';

export function Statistics({ title, statistics }) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const isTitle = true;
  return (
    <section className={css.stats}>
      {isTitle && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statistics}>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
