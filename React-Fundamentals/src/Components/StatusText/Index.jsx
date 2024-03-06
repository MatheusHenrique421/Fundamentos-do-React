const StatusText = () => {
    const status = true;
    return <h2>Current status: {status ? "ON" : "OFF" }</h2>;
}

export default StatusText;