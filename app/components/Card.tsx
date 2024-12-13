import Link from 'next/link';
import { IBillionaire } from '../(home)/page';
import { getNetWorth } from '../util';

interface ICardProps {
  person: IBillionaire;
}

export default function Card({ person }: ICardProps) {
  return (
    <Link
      href={`/person/${person.id}`}
      className='text-white flex flex-col gap-2 bg-[#121D23] rounded-md overflow-hidden cursor-pointer transition-transform duration-100 ease-in-out hover:scale-105'
    >
      <img src={person.squareImage} alt={person.name} className='w-full' />
      <div className='bg-[#121D23] px-2 pb-4'>
        <h3 className='font-bold text-md'>{person.name}</h3>
        <div className='text-sm flex gap-2'>
          <span>{getNetWorth(person.netWorth)}</span>/
          <span>{person.industries}</span>
        </div>
      </div>
    </Link>
  );
}
