import Card from '../components/Card';

export interface IBillionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

const getBillionaries = async () => {
  const data = await fetch('https://billions-api.nomadcoders.workers.dev/');
  return data.json();
};
export default async function Home() {
  const billionaries: IBillionaire[] = await getBillionaries();

  return (
    <div className='flex justify-center px-20 py-4'>
      <ul className='w-full grid grid-cols-4 gap-4 max-w-screen-lg'>
        {billionaries.map((billionarie) => (
          <Card key={billionarie.id} person={billionarie} />
        ))}
      </ul>
    </div>
  );
}
