const HomeContent = (props) => {
    return(
        <>
            <p>{props.text}</p>
            <h2>{props.children}</h2>
        </>
    );
}

export default HomeContent;