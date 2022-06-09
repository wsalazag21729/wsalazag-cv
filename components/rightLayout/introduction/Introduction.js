import Link from 'next/link';

const Introduction = ({ introductionInfo }) => {
    return (
        <div className="px-5 pt-4 pb-2">
            <h2>{introductionInfo.title}</h2>
            <p className='text-justify justify-content-center'>
                {introductionInfo.description?.replace('**', '\n')}
            </p>
        </div>
    );
}
export default Introduction;