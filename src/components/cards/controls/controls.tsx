import { cn } from '@/utils/cn';
import LikeButton from './like-button';
import RemoveButton from './remove-button';
import EditButton from './edit-button';

type ContolsProps = {
  id: number;
};

export default function Controls(props: ContolsProps) {
  const { id } = props;

  return (
    <div className={cn('flex cursor-default justify-between p-2')}>
      <LikeButton id={id} />
      <EditButton id={id} />
      <RemoveButton id={id} />
    </div>
  );
}
