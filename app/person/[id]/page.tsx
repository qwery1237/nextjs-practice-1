import About from '@/app/components/About';
import FinancialAsset from '@/app/components/FinancialAsset';

export interface IFinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number; // 선택적 속성
}

export interface IPersonDetail {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: IFinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

const getDetail = async (id: string) => {
  const data = await fetch(
    'https://billions-api.nomadcoders.workers.dev/person/' + id
  );
  return data.json();
};
export default async function PersonDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const detail: IPersonDetail = await getDetail(id);

  return (
    <div className='w-full flex flex-col items-center gap-8 py-8 *:max-w-screen-lg *:rounded-md'>
      <About detail={detail} />
      <div className='bg-[#121D23] text-white px-8 py-16'>
        <h2 className='text-2xl font-bold mb-4'>Financial Assets</h2>
        <>
          {detail.financialAssets ? (
            <ul className='grid grid-cols-4 gap-x-16 gap-y-4'>
              {detail.financialAssets.map((asset, i) => (
                <FinancialAsset key={asset.companyName + i} asset={asset} />
              ))}
            </ul>
          ) : null}
        </>
      </div>
    </div>
  );
}
