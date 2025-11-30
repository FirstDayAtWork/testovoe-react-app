'use client';

import { cn } from '@/utils/cn';
import { setButtonWidth } from '@/utils/set-button-width';
import { useRouter } from 'next/navigation';

type RedirectButtonProps = {
  href: string;
  title: string;
  width: string;
};

export default function RedirectButton(props: RedirectButtonProps) {
  const { href, title, width } = props;

  const navigate = useRouter();

  function handleClick() {
    navigate.push(href);
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        `bg-card border-border-card text-button hover:border-button m-auto w-full rounded-[10px] border-[3px] px-[25px] py-[15px] text-lg hover:cursor-pointer hover:transition-all ${setButtonWidth(width)}`,
      )}
    >
      {title}
    </button>
  );
}
