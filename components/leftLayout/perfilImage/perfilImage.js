
import Image from 'next/image';
import { DEFAULT_URL_IMAGE, NAME } from '../../../constants/constants';

const PerfilImage = ({ src = DEFAULT_URL_IMAGE, className, size }) => (
    <Image
        priority
        src={src}
        className={className}
        height={size}
        width={size}
        alt={NAME}
    />
);

export default PerfilImage;