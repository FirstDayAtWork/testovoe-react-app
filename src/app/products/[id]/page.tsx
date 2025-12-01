import RedirectButton from '@/ui/redirect-button/redirect-button';
import Details from '@/components/details/details';
import { cn } from '@/utils/cn';
import { getAllProducts } from '@/api/getData';
import { URLS } from '@/utils/urls';

export const dynamicParams = false;

type Slugs = {
  id: string;
};

type PageProps = {
  params: Promise<Slugs>;
};

export async function generateStaticParams(): Promise<Slugs[]> {
  const data = await getAllProducts(URLS.getAll);
  return data.products.map((item) => ({ id: item.id.toString() }));
}

export default async function Page({ params }: PageProps) {
  const slug = await params;

  return (
    <div className={cn('flex w-full flex-col items-center justify-center p-5 max-sm:p-1')}>
      {<Details slug={slug.id} />}
      <div className={cn('flex w-full justify-center p-5')}>
        <RedirectButton href="/" title="Go to Main" width={'400px'} />
      </div>
    </div>
  );
}
