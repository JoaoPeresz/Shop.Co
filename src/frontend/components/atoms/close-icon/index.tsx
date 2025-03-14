import CloseIcon from '@mui/icons-material/Close';

type Props = {
    handlerClose?: () => void;
}

export default function ClosedIcon ({handlerClose} : Props) {
    return (
        <div onClick={handlerClose} style={{ cursor: 'pointer' }}>
            <CloseIcon />
        </div>
    );
}