// import PropTypes from 'prop-types';

export function Statistics({ title, statistics }) {
  const isTitle = true;
  return (
    <section class="statistics">
      {isTitle && <h2 class="title">{title}</h2>}
      <ul class="statistics">
        {statistics.map(({ id, label, percentage }) => {
          return (
            <li class="item" key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   statistics: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };
