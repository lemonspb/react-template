import React from 'react';

interface Title {
    name: string;
}

const Title = (props: Title) => {
    const a = '19';
    return (
        <>
            <div>{props.name}</div>;
        </>
    );
};

export default Title;
