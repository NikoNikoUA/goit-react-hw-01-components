import css from './Statistics.module.css';
import { getRandomHexColor } from '../../Helpers/helpers';

export function Statistics({ title, statistics }) {
  return (
    <section className={css.stats}>
      {title && <h2 className={css.title}>{title}</h2>}
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
