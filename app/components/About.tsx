import { IPersonDetail } from '../person/[id]/page';
import { getNetWorth } from '../util';
interface IAboutProps {
  detail: IPersonDetail;
}
export default function About({ detail }: IAboutProps) {
  return (
    <div className=' w-full max-w-lg bg-[#121D24] text-white p-4 flex flex-col gap-8'>
      <img className='w-1/4' src={detail.squareImage} alt={detail.name} />
      <h2 className='font-bold text-2xl'>{detail.name}</h2>
      <div className='flex flex-col gap-4'>
        <span>Networth: {getNetWorth(detail.netWorth)}</span>
        <span>Country : {detail.country}</span>
        <span>Industry: {detail.industries.join(', ')}</span>
        <p>{detail.about}</p>
      </div>
    </div>
  );
}
