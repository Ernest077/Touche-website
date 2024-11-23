import './ButtonMore.scss';

const Button = ({ text, big, black }) => {
    return (
        <>
            {black ? (
                <button className='Black_Button'>{text}</button>
            ) : (
                big ? (<button className='Big_Button'>{text}</button>
                ) : (
                    <button className='Button'>{text}</button>
                )
            )}
        </>
    )
}

export default Button;