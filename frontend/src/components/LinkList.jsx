/* eslint-disable react/prop-types */

export default function LinkList({ linkList }) {
    return (
        <ul>
            {linkList.map((link, id) => {
                console.log('LINK IS: ', link);
                return <li key={id}>{link.title}</li>;
            })}
        </ul>
    );
}
