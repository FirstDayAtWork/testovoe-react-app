import { useProductStore } from '@/stores/product-store';
import { cn } from '@/utils/cn';

type RemoveButtonProps = {
  id: number;
};

export default function EditButton(props: RemoveButtonProps) {
  const { id } = props;

  const items = useProductStore((state) => state.items);
  const addTargetItem = useProductStore((state) => state.addTargetItem);
  const modalRef = useProductStore((state) => state.modalRef);

  function handleEditEvent() {
    const currentItem = items.products.find((item) => item.id === id);

    if (currentItem && modalRef && 'current' in modalRef) {
      addTargetItem(currentItem);

      modalRef?.current?.showModal();
    }
  }

  return (
    <button
      type="button"
      name="edit"
      onClick={handleEditEvent}
      className={cn('hover:cursor-pointer')}
      title="Edit Card"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28px"
        viewBox="0 -960 960 960"
        width="28px"
        fill="#73fdea"
      >
        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
      </svg>
    </button>
  );
}
