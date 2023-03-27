import React, { useMemo } from 'react'

import CustomSelect from '../components/CustomSelect'
import { UNITS } from '../constants'
import { DEFAULT_LOCALE_EN } from '../locale'
import { SecondsProps } from '../types'
import { classNames } from '../utils'

export default function Seconds(props: SecondsProps) {
  const {
    value,
    setValue,
    locale,
    className,
    disabled,
    readOnly,
    leadingZero,
    clockFormat,
    period,
    periodicityOnDoubleClick,
    mode,
  } = props
  const internalClassName = useMemo(
    () =>
      classNames({
        'react-js-cron-field': true,
        'react-js-cron-seconds': true,
        [`${className}-field`]: !!className,
        [`${className}-seconds`]: !!className,
      }),
    [className]
  )

  return (
    <div className={internalClassName}>
      {period === 'minute'
        ? locale.prefixSecondsForMinutePeriod !== '' && (
            <span>
              {locale.prefixSecondsForMinutePeriod ||
                DEFAULT_LOCALE_EN.prefixSecondsForMinutePeriod}
            </span>
          )
        : locale.prefixMinutes !== '' && (
            <span>
              {locale.prefixSecond || DEFAULT_LOCALE_EN.prefixSeconds}
            </span>
          )}

      <CustomSelect
        placeholder={
          period === 'minute'
            ? locale.emptySecondsForMinutePeriod ||
              DEFAULT_LOCALE_EN.emptySecondsForMinutePeriod
            : locale.emptySeconds || DEFAULT_LOCALE_EN.emptySeconds
        }
        value={value}
        unit={UNITS[0]}
        setValue={setValue}
        locale={locale}
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        leadingZero={leadingZero}
        clockFormat={clockFormat}
        period={period}
        periodicityOnDoubleClick={periodicityOnDoubleClick}
        mode={mode}
      />

      {period === 'minute' && locale.suffixSecondsForMinutePeriod !== '' && (
        <span>
          {locale.suffixSecondsForMinutePeriod ||
            DEFAULT_LOCALE_EN.suffixSecondsForMinutePeriod}
        </span>
      )}
    </div>
  )
}
