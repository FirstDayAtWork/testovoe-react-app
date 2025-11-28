import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { basicSchema, type FormInputs } from '../../zod/schema';
import fileToBase64 from '@/utils/file-to-base64';
import Input from './input';
import { inputArray } from '@/utils/categories';
import { cn } from '@/utils/cn';
import { gridItems } from '@/utils/grid-items';
import { useProductStore } from '@/stores/product-store';
import { ProductDetails } from '@/types/types';

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormInputs>({ mode: 'onChange', resolver: standardSchemaResolver(basicSchema) });

  const setData = useProductStore((state) => state.setItem);
  const id = useProductStore((state) => state.id);
  const increment = useProductStore((state) => state.increment);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);

    const base64 = await fileToBase64(data.image);

    if (typeof base64 === 'string') {
      const object: ProductDetails = {
        ...data,
        id: id,
        dimensions: {
          depth: data.depth,
          height: data.height,
          width: data.width,
        },
        images: [base64],
      };

      increment();
      setData(object);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className={cn('grid grid-cols-6 grid-rows-4 gap-1 max-sm:flex max-sm:flex-col')}>
        {inputArray.length > 0 &&
          inputArray.map((item, index) => (
            <Input
              key={item[0]}
              register={register}
              setValue={setValue}
              error={errors}
              content={item}
              classValue={gridItems[index].value}
            />
          ))}
      </ul>

      <div className={cn('w-full text-center')}>
        <button
          className={cn(
            `mb-2 w-full max-w-[350px] rounded-[10px] border-[3px] border-emerald-600 bg-emerald-600 px-[25px] py-[15px] text-lg text-white ${!isValid && 'disabled'} disabled:bg-bg-disabled disabled:text-disabled disabled:border-bg-disabled disabled:brightness-80 disabled:grayscale-80`,
          )}
          disabled={!isValid}
          type="submit"
        >
          Create Card
        </button>
      </div>
    </form>
  );
}
