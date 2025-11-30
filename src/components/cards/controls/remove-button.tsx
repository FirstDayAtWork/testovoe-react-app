import { useProductStore } from '@/stores/product-store';
import { cn } from '@/utils/cn';

type RemoveButtonProps = {
  id: number;
};

export default function RemoveButton(props: RemoveButtonProps) {
  const { id } = props;

  const removeItem = useProductStore((state) => state.removeItem);

  function handleRemoveEvent(): void {
    removeItem(id);
  }

  return (
    <button
      type="button"
      name="remove-card"
      onClick={handleRemoveEvent}
      className={cn('hover:cursor-pointer')}
      title="Remove Card"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28px"
        viewBox="0 -960 960 960"
        width="28px"
        fill="#FFF056"
      >
        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
      </svg>
    </button>
  );
}
