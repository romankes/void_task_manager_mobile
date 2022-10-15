import {format, formatDuration, intervalToDuration} from 'date-fns';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

type TArgs = {
  startDate?: string | null;
  endDate?: string | null;
};

const NOW = new Date().getTime();
const appendZero = (num: number) => String(num).padStart(2, '0');

export const useData = ({endDate, startDate}: TArgs) => {
  const dispatch = useDispatch();

  const timer = useRef<ReturnType<typeof setInterval>>(0);

  const [seconds, setSeconds] = useState(new Date(startDate || NOW).getTime());

  const onClock = useCallback(() => {
    setSeconds(prev => prev + 1000);
  }, []);

  const onStart = useCallback(() => {
    timer.current = setInterval(onClock, 1000);
  }, [startDate]);

  useEffect(() => {
    onStart();

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [onStart]);

  const date = useMemo(() => {
    const interval = intervalToDuration({
      start: new Date(NOW),
      end: new Date(),
    });

    return formatDuration(interval, {
      format: ['hours', 'minutes', 'seconds'],
      delimiter: '.',
      zero: true,
      locale: {
        formatDistance: (_token, count) => appendZero(count),
      },
    });
  }, [seconds]);

  return {date};
};
