import JSONPretty from 'react-json-pretty';

interface PrettyJsonProps {
    data?: object;
}

export const PrettyJson = (props: PrettyJsonProps) => {

    return (
        <div>
            {props.data ? (<div> <JSONPretty data={props.data}></JSONPretty> </div>) : (<div>No Data</div>)}
        </div>
    );
};