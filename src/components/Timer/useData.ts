import {format, formatDuration, intervalToDuration} from 'date-fns';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

type TArgs = {
  startDate?: string | null;
  endDate?: string | null;
};

const appendZero = (num: number) => String(num).padStart(2, '0');

export const useData = ({endDate, startDate}: TArgs) => {
  const dispatch = useDispatch();

  const NOW = useMemo(() => new Date().getTime(), []);

  const timer = useRef<ReturnType<typeof setInterval>>(0);

  const [seconds, setSeconds] = useState(new Date(startDate || NOW).getTime());

  const onClock = useCallback(() => {
    setSeconds(prev => prev + 1000);
  }, []);

  const onStart = useCallback(() => {
    if (startDate) {
      setSeconds(new Date(startDate).getTime());
      timer.current = setInterval(onClock, 1000);
    }
  }, [startDate]);

  useEffect(() => {
    onStart();

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [onStart]);

  const onStop = useCallback(() => {
    if (endDate && timer.current) {
      clearInterval(timer.current);
    }
  }, [endDate]);

  useEffect(() => {
    onStop();
  }, [onStop]);

  const date = useMemo(() => {
    const interval = intervalToDuration({
      start: new Date(startDate || NOW),
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
