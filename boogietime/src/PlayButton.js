function PlayButton(props){
    const defaultStyle = {
        width: '36px',
        height: '36px',
        padding: '5px',
        // Default styles for the button
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    };
    return(
        <button style = {{...defaultStyle, ...props.style}} {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
        </button>
    );
}

export default PlayButton;
