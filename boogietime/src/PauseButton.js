function PauseButton(props){
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
        </button>
    )
}

export default PauseButton;
