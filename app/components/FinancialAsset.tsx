import { IFinancialAsset } from '../person/[id]/page';

interface IAssetProps {
  asset: IFinancialAsset;
}
export default function FinancialAsset({ asset }: IAssetProps) {
  return (
    <div className='flex flex-col border-2 border-[#2F393F] p-4 rounded-md gap-2'>
      <span>Ticker: {asset.ticker}</span>
      <span>Shares: {Math.floor(asset.sharePrice).toLocaleString()}</span>
      {asset.exerciseOptionPrice ? (
        <span>Excersie Price: ${asset.exerciseOptionPrice.toFixed(2)}</span>
      ) : null}
    </div>
  );
}
