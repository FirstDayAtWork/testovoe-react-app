'use client';

import type { ChangeEvent, JSX } from 'react';
import type { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormInputs } from '@/zod/schema';
import { cn } from '@/utils/cn';

type InputProps = {
  register: UseFormRegister<FormInputs>;
  setValue: UseFormSetValue<FormInputs>;
  error: FieldErrors<FormInputs>;
  content: [keyof FormInputs, string];
  classValue: string;
};

export default function Input(props: InputProps): JSX.Element {
  const { register, setValue, error, content, classValue } = props;

  function handleChange(event: ChangeEvent<HTMLInputElement>, name: keyof FormInputs): void {
    register(name).onChange({
      target: {
        name,
        value: event.target.files?.[0],
      },
    });
  }

  return (
    <li className={cn(`p-2 ${classValue}`)}>
      <label
        htmlFor={content[0]}
        className={cn('text-text-card mb-2 block text-sm font-semibold capitalize')}
      >
        {content[0]}
      </label>

      {content[1] === 'file' ? (
        <input
          {...(register(content[0]),
          {
            onChange: (event): void => {
              if (event.target.files && event.target.files.length > 0) {
                setValue(content[0], event.target.files[0]);
              }
            },
          })}
          type={content[1]}
          id={content[0]}
          name={content[0]}
          onChange={(event): void => handleChange(event, content[0])}
          className={cn('border-border-card h-10 w-full rounded-lg border-2 bg-black p-2')}
        />
      ) : (
        <input
          {...register(content[0], {
            valueAsNumber: content[1] === 'number',
          })}
          type={content[1]}
          id={content[0]}
          name={content[0]}
          className={cn('border-border-card h-10 w-full rounded-lg border-2 bg-black p-2')}
        />
      )}

      <div className={cn('text-xs text-red-500')}>
        {error[content[0]] && <div>{error[content[0]]?.message}</div>}
      </div>
    </li>
  );
}
