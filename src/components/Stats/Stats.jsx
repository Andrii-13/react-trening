import css from './Stats.module.css';
import clsx from 'clsx';

export const Stats = ({ isOnline, isOffline }) => {
  return (
    <div
      // звичайне використання

      //   className={
      // isOnline
      //   ? `${css.styleStats} ${css.blue}`
      //   : `${css.styleStats} ${css.yellow}`
      //   }

      // з використанням бібліотеки clsx

        // className={clsx(
        //   css.styleStats,
        //   isOnline && css.blue,
        //   !isOffline && css.yellow
        // )}

      // з використанням бібліотеки clsx передача у вигляді обєкту

      className={clsx(css.styleStats, {
        [css.blue]: isOnline,               //обєкт ключ : значення (алієв 1.2 - 59 хв, 1:10 хв)
        [css.yellow]: isOffline,
      })}
    >
      Stats
    </div>
  );
};
